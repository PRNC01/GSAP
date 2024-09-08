gsap.from('#Page1 .Box',{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})
gsap.from('#Page2 h1',{
    opacity:0,
    duration:1,
    x:-500,
    scrollTrigger:{ 
        trigger:"#Page2",
        scroller:"body",
        marker:true, 
        scrub:2,
         // IT WILL ANIMANATE WHEN WE SCROLLING IF WE STOP SCROLLING IT NOT ANIMATE
        // NOTE:- SCROLL-TRIGGER WILL NOT WORK IF YOU SET A PROPERTY OVERFLOW HIDDEN
    }
})
gsap.to("#Page4 h1",{
    transform:"translateX(-100%)",
    duration:3,
    scrollTrigger:{
        trigger:"#Page4", 
        scroller:"body",   
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})