let Timeline = gsap.timeline();

Timeline.from("nav h1, nav h4, nav button",{
    opacity:0,
    y:-100,
    duration:0.5,
    delay:1,
    stagger:0.2,
})

Timeline.from("#Center-Part1 h1",{
    x:-500,
    opacity:0,
    duration:0.6,
})

Timeline.from("#Center-Part1 p",{
    opacity:0,
    x:-500,
    duration:0.5,
})

Timeline.from("#Center-Part1 button",{
    opacity:0,
    duration:0.5,
})

Timeline.from("#Center-Part2 #Img",{
    opacity:0,
},"-=0.5")

let servicesTimeline = gsap.timeline({
    scrollTrigger:{
        trigger:"#Section2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        scrub:2,
        top:0,
    }
})

servicesTimeline.from("#Section2 h1",{
    x:-100,
    opacity:0,
    delay:1,
})

servicesTimeline.from("#Section2 .Service-Heading h1",{
    opacity:0,
})