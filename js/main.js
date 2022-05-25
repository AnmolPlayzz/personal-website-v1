console.log("da nub site™")
window.addEventListener('DOMContentLoaded', (event) => {
  window.scrollTo(0, 0);  
});


window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    if(scrollY > 30) {
        document.getElementById("nav").style.padding = "21px 0px";
        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.510)";
        document.getElementById("nav").style.backdropFilter = "blur(12px)";
        document.getElementById("nav").style.transition = "all 0.3s";
    } else {
        document.getElementById("nav").style.padding = "33px 0px";
        document.getElementById("nav").style.backgroundColor = "rgba(47, 37, 72, 0)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.transition = "all 0.3s";
    }

    var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
      return (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };
    var tit1 = document.getElementById('c1');
    var tit2 = document.getElementById('vidh');
    var tit3 = document.getElementById('vid');
    var tit4 = document.getElementById('footer2');
    if (isInViewport(tit1)) {
      document.getElementById("c1").style.opacity = "1";
      document.getElementById("c1").style.transform = "translateY(0px)";
      document.getElementById("c1").style.transition = "all 0.3s 0.1s ease";
      document.getElementById("c2").style.opacity = "1";
      document.getElementById("c2").style.transform = "translateY(0px)";
      document.getElementById("c2").style.transition = "all 0.3s 0.3s ease";
    }
    if (isInViewport(tit2)) {
      document.getElementById("vidh").style.opacity = "1";
      document.getElementById("vidh").style.transform = "scale(1)";
      document.getElementById("vidh").style.transition = "all 0.3s 0.2s ease";
    }
    if (isInViewport(tit3)) {
      document.getElementById("vid").style.opacity = "1";
      document.getElementById("vid").style.transform = "scale(1) translateY(0px)";
      document.getElementById("vid").style.transition = "all 0.3s 0s ease";
    }
    if (isInViewport(tit4)) {
      document.getElementById("footer1").style.opacity = "1";
      document.getElementById("footer2").style.opacity = "1";
      document.getElementById("footer2").style.transform = " translateY(0px)";
      document.getElementById("footer1").style.transition = "all 0.3s 0s ease";
      document.getElementById("footer2").style.transition = "all 0.6s 0s ease";
    }
});

function myFunction() {
    var x = document.getElementById("myLinks");
    var ya = document.getElementById("bar1");
    var yb = document.getElementById("bar2");
    var yc = document.getElementById("bar3");
    var yd = document.getElementById("bar4");

    if (x.style.transform === "translateY(0%)") {
      x.style.transform = "translateY(-200%)";
      x.style.transition = "all 0.3s";
      ya.style.transform = "translateX(0%)"
      ya.style.opacity = "1"
      ya.style.transition = "all 0.2s ease";
      yb.style.transform = "translateX(0%)"
      yb.style.opacity = "1"
      yb.style.transition = "all 0.2s ease";
      yc.style.transform = "rotate(0deg)"
      yc.style.transformOrigin = "center center";
      yc.style.transition = "all 0.2s ease";
      yd.style.transform = "rotate(0deg)"
      yd.style.transformOrigin = "center center";
      yd.style.transition = "all 0.2s ease";
    } else {
      x.style.transform = "translateY(0%)";
      x.style.transition = "all 0.3s";
      ya.style.transform = "translateX(100%)"
      ya.style.opacity = "0"
      ya.style.transition = "all 0.2s ease";
      yb.style.transform = "translateX(-100%)"
      yb.style.opacity = "0"
      yb.style.transition = "all 0.2s ease";
      yc.style.transform = "rotate(45deg)";
      yc.style.transformOrigin = "center center";
      yc.style.transition = "all 0.2s ease";
      yd.style.transform = "rotate(-45deg)"
      yd.style.transformOrigin = "center center";
      yd.style.transition = "all 0.2s ease";
    }
  }

//on scroll thing for mobile - totally did not copy another part of my code

  window.addEventListener("scroll", (event) => {
    let scrollYa = this.scrollY;
    console.log(scrollYa)
    if(scrollYa > 30) {
        document.getElementById("actibe").style.backgroundColor = "rgba(0, 0, 0, 0.510)";
        document.getElementById("actibe").style.backdropFilter = "blur(12px)";
        document.getElementById("topnav2").querySelector("a").style.padding = "20px 25px";
        document.getElementById("icon1").style.padding = "20px 27px";
        document.getElementById("myLinks").style.backgroundColor = "rgba(0, 0, 0, 0.510)";
        document.getElementById("myLinks").style.backdropFilter = "blur(12px)";
        document.getElementById("actibe").style.transition = "all 0.3s";
        document.getElementById("icon1").style.transition = "all 0.3s";
    } else {
        document.getElementById("actibe").style.backgroundColor = "rgba(47, 37, 72, 0)";
        document.getElementById("actibe").style.backdropFilter = "blur(0px)";
        document.getElementById("topnav2").querySelector("a").style.padding = "30px 25px";
        document.getElementById("icon1").style.padding = "30px 27px";
        document.getElementById("myLinks").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("myLinks").style.backdropFilter = "blur(20px)";
        document.getElementById("actibe").style.transition = "all 0.3s";
        document.getElementById("icon1").style.transition = "all 0.3s";
    }
});