
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    console.log(scrollY)
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
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
