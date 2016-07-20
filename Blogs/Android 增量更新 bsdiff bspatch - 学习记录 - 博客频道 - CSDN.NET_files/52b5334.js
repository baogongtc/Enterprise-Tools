(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgLI1tkAGRVcQNfAWpXY1Q9AzNSNV5qUnQKawM1ASUMb111DCMAaAAlAGYOU1FoWmpVaVU7U3cBaFA0ADcBMgFYCzhbZAA8VToDNgE7VyFUcANuUmReMlINCnoDJwFuDDtdNQxnACcAIgB6DnxRZFozVSI=","r":0.48},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoBKQs0UzcDJwZaDmUGMgFoBjZWMV5qVnABYAM1VnJXNAAoWnUDa1J3CG4BXFZvUGAFOQdhVWUGNFdxBD8GMFMwAToLD1M7AzEGOA41BmABbAYhVnFeMFY3AW8DDlZ0VycAZ1owAzJSPAgtAXdWf1B0BWEHbVUh","r":0.43},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B25ZcQo1AmYGIgZaDmUANFQ9BTVQN15qByEGZ1VjUXUHZAsjW3RQOFRxUDYGWwI7ATFRbVI2Xm9TdQduVGJRZgdgWVwKOAJnBm0GPA47AGFUJgV0UGtePQdpBllVd1F1BzwLYFsxUGVUJFAnBn0CIgEwUW1Scw==","r":0.46},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0PJ1lmVzMAJFMPAmlXYwBpAzMCZQczVHIKa1dhVXFRMg0lXnEGbgQhVTNRDFduATFWagBmAzIAMgMlUGtRZwRnDzRZXVc\/ADJTbQI5VzAAYAMkAiUHaVQ1CmRXWlV3USENal40BjEEZlVwUSdXfgElVjIAagN3","r":0.66}];
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