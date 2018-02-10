console.log("it works bro !!");


// variables
var nav_bar = document.getElementById("header"),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos,
docHeight;

// calucate doc height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
  offset = docHeight / 4;
}

// scroll event listener

window.addEventListener("scroll", function(event) {
    scrollPos = body.scroll
})
