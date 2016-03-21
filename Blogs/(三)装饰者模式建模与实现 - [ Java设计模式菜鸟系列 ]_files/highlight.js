define(function (require) {
    require('./highlight/highlight.pack');

    var events = require('document/events');

    require('./highlight/styles/tomorrow.css');
    require('./highlight/styles/androidstudio.css');
    require('./highlight/styles/dark.css');

    $('link[rel]').each(function (i, link) {
        if (link.href.match(/\/highlight\/styles\//)) {
            $(this).attr('rel', 'alternate stylesheet');
            $(this).attr('class', 'codestyle');
            link.disabled = true;
        }
    });

    var styles = ['tomorrow', 'androidstudio', 'dark'];

    events.on('theme.change', function (event, theme) {
        $('.codestyle').each(function (i, e) {
            if(e.href.match(styles[theme] + '\\.css')){
                e.rel = 'stylesheet';
                e.disabled = false;
            }else{
                e.rel = 'alternate stylesheet';
                e.disabled = true;
            }
        });
    });

    events.on('article.open', function () {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });

});