
document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "complete") {
      setTimeout(() => {
          document.querySelector('body').style.opacity = "1"
          document.querySelector('body').style.transition = "all 0.6s ease";
       }, 500);
    }
  });

function tran() {

    document.querySelector('body').style.opacity = "0"
    document.querySelector('body').style.transition = "all 0.5s ease";
    setTimeout(() => { document.location.href="/" }, 700);
};
function tran1() {
    document.querySelector('body').style.opacity = "0"
    document.querySelector('body').style.transition = "all 0.4s ease";
    setTimeout(() => { document.location.href="/socials" }, 700);
};
function tran2() {
    document.querySelector('body').style.opacity = "0"
    document.querySelector('body').style.transition = "all 0.4s ease";
    setTimeout(() => { document.location.href="/contact" }, 600);
};