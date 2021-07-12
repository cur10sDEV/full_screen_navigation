const open = document.querySelector("#cta");
const close = document.querySelector(".close");
const tl = gsap.timeline();

tl.to(".container", {opacity: 1, x: 0, scale: 1, pointerEvents: "auto", duration: .3})
tl.to(".stagger", {x: 0, opacity: 1, stagger: .2}, "-=.3")
tl.pause();


open.addEventListener("click", () => {
    tl.play();
})

close.addEventListener("click", () => {
    tl.reverse();
})