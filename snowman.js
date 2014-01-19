a = document.createElement("style"), i = 60;
a.type = "text/css";
a.innerHTML = "#sl{z-index:450;position:fixed;top:0;width:100%;height:100%;background:rgba(57,72,209,0.3);pointer-events:none;}#sl>div{pointer-events:none;position:fixed;width:50px;height:50px;perspective:50px;-webkit-perspective:50px;-moz-animation-iteration-count:infinite,infinite;-moz-animation-direction:normal,normal;-moz-animation-timing-function:linear,ease-in;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-direction:normal,normal;-webkit-animation-timing-function:linear,ease-in}#sl img{top:-100px;position:fixed;width:50px;height:50px;-moz-animation-iteration-count:infinite;-moz-animation-direction:alternate;-moz-animation-timing-function:ease-in-out;-moz-transform-origin:50% -100%;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;-webkit-animation-timing-function:ease-in-out;-webkit-transform-origin:50% -100%}@-moz-keyframes f{0%,95%{opacity:1}100%{opacity:0}}@-moz-keyframes d{0%{-moz-transform:translate(0px,-50px)}100%{-moz-transform:translate(0px,650px)}}@-moz-keyframes z{0%{-moz-transform:rotate(-50deg)}100%{-moz-transform:rotate(50deg)}}@-moz-keyframes x{0%{-moz-transform:scale(-1,1) rotate(50deg)}100%{-moz-transform:scale(-1,1) rotate(-50deg)}}@-webkit-keyframes f{0%,95%{opacity:1}100%{opacity:0}}@-webkit-keyframes d{0%{-webkit-transform:translate(0px,-50px)}100%{-webkit-transform:translate(0px,650px)}}@-webkit-keyframes z{0%{-webkit-transform:rotateY(0deg);-webkit-transform:rotateZ(0deg)}100%{-webkit-transform:rotateY(90deg);-webkit-transform:rotateZ(90deg)}}@-webkit-keyframes x{0%{-webkit-transform:scale(-1,1) rotate(50deg)}100%{-webkit-transform:scale(-1,1) rotate(-50deg)}}";
document.body.appendChild(a);
document.body.innerHTML += '<iframe width="0" height="0" src="//www.youtube.com/embed?listType=playlist&list=PLYvbP-7o5NQYF2u8URnzP8GX67kAHTRFX&index=1&autoplay=1"></iframe><section id="sl"></section>';
for (c = document.getElementById("sl"); i--;) {
    e = document.createElement("div"), f = document.createElement("img"), a = e.style, b = f.style, g = 5 + 6 * Math.random() + "s", h = 0 + 5 * Math.random() + "s";
    f.src = "http://shadownet.net23.net/snowman/img/snow_" + (1 + Math.floor(4 * Math.random())) + ".png";
    d = window.innerWidth;
    d = 0 + Math.floor(Math.random() * (d - 0));
    a.left = d + "px";
    a.mozAnimationName = a.webkitAnimationName = "f,d";
    b.webkitAnimationName = b.mozAnimationName = 0.5 > Math.random() ? "z" : "x";
    b.mozAnimationDuration = b.webkitAnimationDuration = 4 + 4 * Math.random() + "s";
    a.mozAnimationDuration = a.webkitAnimationDuration = g + ", " + g;
    a.mozAnimationDelay = a.webkitAnimationDelay = h + ", " + h;
    e.appendChild(f);
    c.insertBefore(e, c.firstChild)
}