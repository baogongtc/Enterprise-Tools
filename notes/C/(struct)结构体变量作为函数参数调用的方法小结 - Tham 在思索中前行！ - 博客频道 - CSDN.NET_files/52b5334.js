(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsAKA4xUzdUcAZaVT4ANARtBz9VNwMnBmcHY1B0VmEFcQokW2lUJgU2CVVSOQI2VTwFMVY4UHRUPQVhV2BRYgJbADMOMVNvVDQGN1VvAHYEIAdqVWMDbwZZB3dQdFY5BTIKYFswVHMFJwlzUiACN1U8BXI=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj9ddQs0VDADJ1UJBG8GMgduVm4EZl56UTBXMwYiU2RRJQ8hATMGdAc0BVkCaQQwWzJXY1Q6UnYBaAtvV2BTYFYPXW0LJVQ4AyVVCQRzBiQHP1ZqBDteKFElVycGcVMyURYPcAFoBkEHdAU0AkYEOFtqVyJUd1I1AXMLJVdmU3JWNF1pC35UOwMwVSIEIwZkBxVWMgQ3XjFRdFdlBhJTclE\/DzoBLQZYBzQFawJkBAtbbVcvVFxSOQFlCy5XNlNHVjVdYws9VAoDPFUyBCMGZQcXVmEEYl5tUWVXcQY9U2VRMg80AQUGbgc1BTsCNgRmWzdXcFRzUjwBYAtlV1pTaFYgXToLY1RnA2VVZgQgBiIHKlYnBDZeYVEy","r":"0.0012800000"}];
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