
/*
    监控js错误并上报
    wtser@sf.gg
 */
window.onerror = function(msg, url, line, col, error) {
  if (msg !== "Script error." && !url) {
    return true;
  }

  /*
      采用异步的方式
      我遇到过在window.onunload进行ajax的堵塞上报
      由于客户端强制关闭webview导致这次堵塞上报有Network Error
      我猜测这里window.onerror的执行流在关闭前是必然执行的
      而离开文章之后的上报对于业务来说是可丢失的
      所以我把这里的执行流放到异步事件去执行
      脚本的异常数降低了10倍
   */
  setTimeout(function() {
    var c, data, ext, f, match;
    data = {};
    col = col || (window.event && window.event.errorCharacter) || 0;
    data.userId = document.querySelector("#SFUserId").getAttribute('value');
    data.url = url;
    data.line = line;
    data.col = col;
    data.msg = msg;
    data.targetUrl = location.href;
    if (!!error && !!error.stack) {
      data.msg = error.stack.toString();
    } else if (!!arguments.callee) {
      ext = [];
      f = arguments.callee.caller;
      c = 3;
      while (f && c > 0) {
        c = c - 1;
        ext.push(f.toString());
        if (f === f.caller) {
          break;
        }
        f = f.caller;
      }
      ext = ext.join(",");
      data.msg = ext || msg;
    }
    if (data.userId) {
      match = data.url.match(/\/\/[\s\S]*\//);
      if (!match) {
        return false;
      }
      if (match[0].search('segmentfault') !== -1) {
        console.warn(data);
        if ($) {
          return $.post('/api/log/frontend', data);
        }
      }
    }
  }, 0);
  return false;
};
