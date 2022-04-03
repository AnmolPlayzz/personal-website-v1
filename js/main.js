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
    if (x.style.transform === "translateY(0%)") {
      x.style.transform = "translateY(-200%)";
      x.style.transition = "all 0.3s";
    } else {
      x.style.transform = "translateY(0%)";
      x.style.transition = "all 0.3s";
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
