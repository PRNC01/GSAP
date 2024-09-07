let Tl = gsap.timeline()

Tl.to('#Box',{
    x:500,
    rotate:180,
    duration:2,
    delay:2
})
Tl.to('#Box2',{
    x:400,
    rotate:90,
    duration:2.5,
})
Tl.from('h1',{
    opacity:0,
    duration:1,
    y:30,
    stagger:1
})

let Nav = gsap.timeline();
Nav.from('#h1',{
    y:30,
    opacity:0,
    duration:1,
    delay:1
})
Nav.from('#b1 h4',{
    y:40,
    opacity:1,
    duration:4,
})

