(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsLIw8wBWFUcAhUUjkMOFozDDRVNwImVzZWMlRwBzBTJ11zXmwMflRnVwtWPQM3WzICNgdpVHBdNARgV2BbaAJbCzgPMAU5VDQIOVJoDHpafgxhVWMCblcIViZUcAdoU2RdN141DCtUdlctViQDNlsyAnU=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGlbc1xjB2MFIQJeDmVWYlE4UGgHZVB0UjNXMwQgVWJRJVp0CjgHdQQ3BVkFblFlUjsANFc5U3dSOwtvUmVSYQBZW2tccgdrBSMCXg55VnRRaVBsBzhQJlImVycEc1U0URZaJQpjB0AEdwU0BUFRbVJjAHVXdFM0UiALJVJjUnMAYltvXCkHaAU2AnUOKVY0UUNQNAc0UD9Sd1dlBBBVdFE\/Wm8KJgdZBDcFawVjUV5SZAB4V19TOFI2Cy5SM1JGAGNbZVxqB1kFOgJlDilWNVFBUGcHYVBjUmZXcQQ\/VWNRMlphCg4HbwQ2BTsFMVEzUj4AJ1dwUz1SMwtlUl9SaQB2WzxcNAc0BWMCMQ4qVnJRfFAhBzVQb1Ix","r":"0.0012800000"}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();