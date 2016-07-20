(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQOJg0yVzNRdQVZAWoBNVE4ATEDZAI2XXsGZ1dhAiYAY1x0AC8MZFF0B2EDXlZvBDQHOwNtByNSOwFlBTJUZw1UDj0NMldrUT4FMAE7AXdRdQFsAzUCbl0CBnZXcwJtADdcNABrDCtRcwd9A3FWYwRtB3A=","r":0.48},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0LIwg3AWUOKghUVj1RZVsyVWUEY15qUXcFZFJkUHQHZA0lCSYFbVRxUDZUCVZvBjYBPQVjVGQENlRyBj1SZFQ3CzAIDAFpDjwINlZtUTdbNlVyBCNeMFEwBWtSX1ByB3cNagljBTRUOlB1VCJWfwYiAWUFb1Qg","r":0.43},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkKIgg3BGBUcFMPUzgDNwZvVmZUM1FlU3VRMFJkW39QMwggXnFXPwInB2EDXlduVGRSbgdhUmVRYFRyV2xRZwBjCjEIDARsVGZTbVNoA2QGYVZxVHNRP1MyUT9SX1t5UCAIb140V28CZAciA3VXflRwUjYHbVIm","r":0.76},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8PJwg3VzNRdVMPBG8EMANqVmYFYlRgV3EAYVNlVnINbgoiCiUBaQInUzUOUwI7VWVRbQBmU2IDMQAmBD8CNAZlDzQIDFc\/UWNTbQQ\/BGMDY1ZxBSJUOlc2AG5TXlZ0DX0KbQpgATYCYFN2DngCK1VxUTUAalMn","r":0.66}];
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