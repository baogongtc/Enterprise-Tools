if(lstcommentid){
	if($s("comment-"+lstcommentid)){
		lstcommentid = $s("comment-"+lstcommentid);
		var commentformel = $s("comment_reply_ID");
		while(commentformel != null && commentformel.tagName != "FORM"){
			commentformel = commentformel.parentNode;
		}
		if(commentformel != null && commentformel.action.indexOf("wp-comments-post.php") != -1){
			commentformel.onsubmit = wptcajaxsend;
		}
	}
}

function gparam(f){
	var p='wptcajax=wptcajax';
	var fi = f.getElementsByTagName('input');
	for(i=0; i<fi.length; i++ ){
		e=fi[i];
		if(e.name!=''){
			if(e.type=='select')
				element_value=e.options[e.selectedIndex].value;
			else if(e.type=='checkbox' || e.type=='radio'){
				if(e.checked==false)
					continue;
				element_value=e.value;
			}else{
				element_value=e.value;
			}
			p+="&"+e.name+'='+encodeURIComponent(element_value);
		}
	}
	fi = f.getElementsByTagName('textarea');
	for(i=0; i<fi.length; i++)
		p+="&"+fi[i].name+"="+encodeURIComponent(fi[i].value);
	
	return p;
}

function getXMLInstance(){
	var req;
	if(window.XMLHttpRequest){
		req = new XMLHttpRequest();
		if (req.overrideMimeType){
			//req.overrideMimeType('text/xml');
		}
	}else if(window.ActiveXObject){
		try{
			req = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				req = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){}
		}
	}
	if(!req){
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	return req;
}

function wptcajaxsend(){
	var req = getXMLInstance();
	var r = $s('comment_reply_ID').value;
	var c = null;

	var p=gparam(commentformel);

	if(p != null)
		q=p.split("&");

	var author = null, email = null, comment = null;

	if(USERINFO == false){
		author = stpm("author",q);
		email = stpm("email",q);

		if(needauthoremail == true){
			if(author != null && author == ""){
				alert("please enter a valid author name");
				if($s("author"))
					$s("author" && $s("author").style.display != "none").focus();
				return false;
			}

			if(email != null && (email == "" || email.length < 6 || email.match(/^([a-z0-9+_]|\-|\.)+@(([a-z0-9_]|\-)+\.)+[a-z]{2,6}$/i) == null)){
				alert("please enter a valid email address");
				if($s("email"))
					$s("email" && $s("email").style.display != "none").focus();
				return false;
			}
		}else{
			if(author == null || author == ""){
				author = "Anonymous";
			}
		}
	}else{
		author = USERINFO;
	}

	comment = stpm("comment",q);

	if(comment == null || comment == ""){
		alert("comment can not be empty");
		if(Commentarea && Commentarea.display != "none")
			Commentarea.focus();
		return false;
	}

	comment = comment.replace(/\r\n\r\n/g, "</p><p>");
	comment = comment.replace(/\r\n/g, "<br />");
	comment = comment.replace(/\n\n/g, "</p><p>");
	comment = comment.replace(/\n/g, "<br />");
	comment = "<p>"+comment+"</p>";
	var dateObj = new Date();

	if(r == 0){
		c = document.createElement('div');
		//c = document.createElement(lstcommentid.tagName);
		c.id = "newcomment";
		if(sortflag == 'DESC'){
			lstcommentid.parentNode.insertBefore(c,lstcommentid);
			window.location="#newcomment";
		}else{
			if(lstcommentid.parentNode.lastChild == lstcommentid){
				lstcommentid.parentNode.appendChild(c);
			}else{
				lstcommentid.parentNode.insertBefore(c,lstcommentid.nextSibling);
			}
		}
	}else{
		c = document.createElement('div');
		c.id = "newcomment";
		rpPel.appendChild(c);
	}

	c.innerHTML = "<div id=\"newcommentcontent\"><p>"+author+" <em>Submit on "+dateObj.toLocaleString()+"</em>:</p>"+comment+"</div><div id=\"newcommentsubmit\"><p>提交评论中，马上就好...<img src=https://www.freehao123.com/wp-content/plugins/wp-thread-comment/loading.gif /></p></div>";

	$s(commentformid).style.display='none';
	
	req.onreadystatechange = function(){
		if(req.readyState == 4){
			$s(commentformid).style.display='block';
			if(req.status == 200){
				wptctextreplace($s('newcomment'),req.responseText);

				if(parseInt(r)){
					movecfm(null,0,0,null);	
				}
				if($s('comment')) $s('comment').value = '';
			}else{
				c.parentNode.removeChild(c);
				var error = req.responseText.match(/<body[^>]*>[\s\S]*?<p[^>]*>([\s\S]*)<\/p>[\s\S]*?<\/body>/i);
				if(typeof(error) != 'undefined' && error != null && error != ''){
					alert(error[1]);
				}else{
					alert('Failed to add your comment.');
				}
			}
		}
	}
	
	req.open('POST', commentformel.action, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Content-length", p.length);
	req.setRequestHeader("Connection", "close");
	req.send(p);
	
	return false;
}

function wptctextreplace(element,text){
	if(!text)
		return false;

	element.innerHTML = text;

	var commentid = text.match(/<(\w+).*?id\s*=\s*("|')(comment-\d+?)\2[^>]*>[\s\S]*<\/\1>/i);
	if(typeof(commentid) != 'undefined' && commentid != null){
		var commentid = commentid[3];

		var childelement = $s(commentid);
	
		var n=1;
		while(childelement.parentNode != element){
			childelement = childelement.parentNode;
			n= n+1;
			if(n>10) break;
		}

		if(n<11){
			if(typeof(childelement.className) != 'undefined' && lstcommentid.className.match(/\balt\b/i)){
				childelement.className = childelement.className.replace(/\balt\b/i,'');
			}

			element.parentNode.insertBefore(childelement,element);
			element.parentNode.removeChild(element);
			if($s('comment_reply_ID').value == 0)
				lstcommentid = childelement;

	if(typeof(AjaxEditComments) != 'undefined' && typeof(AjaxEditComments.init) == 'function')
		AjaxEditComments.init();

		}

	}else{
		lstcommentid = element;
	}

	return true;
}
function stpm(aname,array){
	for (var i=0; i < array.length; i++){
		var c = array[i].split("=");
		c[0] = unescape(decodeURI(c[0]));
		c[0] = c[0].replace(/^\s+|\s+$/g,"");
		if (aname == c[0]){
			c[1] = unescape(decodeURI(c[1]));
			c[1] = c[1].replace(/^\s+|\s+$/g,"");
			return c[1];
		}
	}
 	return null;
}
