window.addEventListener('DOMContentLoaded', (event) => {
    window.scrollTo(0, 1);
});
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    if(scrollY > 30) {
        document.getElementById("nav").style.padding = "21px 50px";
        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.510)";
        document.getElementById("nav").style.backdropFilter = "blur(20px)";
        document.getElementById("nav").style.transition = "all 0.3s";
    } else {
        document.getElementById("nav").style.padding = "33px 50px";
        document.getElementById("nav").style.backgroundColor = "rgba(47, 37, 72, 0)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.transition = "all 0.3s";
    }
});

//in view


