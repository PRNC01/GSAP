const menuBtn = document.getElementById("Menu");
const closeBtn = document.getElementById("Close")
const timeLine = gsap.timeline();

timeLine.to("#Full",{
    right:0,
    duration:0.8,
})
timeLine.from("#Full h4",{
    x:150,
    duration:0.5,
    stagger:0.3,
    opacity:0
})
timeLine.from("#Full i",{
    opacity:0,
    rotate:180,
    duration:1,
})

timeLine.pause()

menuBtn.addEventListener("click",() => {
    timeLine.play()
});

closeBtn.addEventListener("click", () => {
    timeLine.reverse()
})