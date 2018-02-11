console.log("it works !!");


// variables
var nav_bar = document.getElementsByTagName("HEADER")[0],
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight;

// calucate doc height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
  offset = docHeight / 16;
}

// scroll event listener

window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    nav_bar.className = ( scrollPos > offset ) ? "visible" : "";

});


// var banner = document.querySelector('.banner--title');
//
// banner.textContent = 'KEVIN';
// var nav_bar_show = document.getElementsByTagName("HEADER")[0];
// var att = document.createAttribute("class");
//
// att.value = "visible";
// nav_bar_show.setAttributeNode(att);
