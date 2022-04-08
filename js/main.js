console.log("da nub site™")
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    if(scrollY > 30) {
        document.getElementById("nav").style.padding = "21px 50px";
        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.510)";
        document.getElementById("nav").style.backdropFilter = "blur(12px)";
        document.getElementById("nav").style.transition = "all 0.3s";
    } else {
        document.getElementById("nav").style.padding = "33px 50px";
        document.getElementById("nav").style.backgroundColor = "rgba(47, 37, 72, 0)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.transition = "all 0.3s";
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
      ya.style.transform = "translateX(10%)"
      ya.style.opacity = "0"
      ya.style.transition = "all 0.2s ease";
      yb.style.transform = "translateX(-10%)"
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
