let intialPath = `M 10 100 Q 500 100 1490 100`;

let finalPath = `M 10 100 Q 500 100 1490 100`;

let string = document.querySelector('#String');

string.addEventListener('mousemove',(dets) => {
    intialPath = `M 10 100 Q ${dets.x} ${dets.y} 1490 100`
    gsap.to('svg path',{
        attr:{d:intialPath},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener('mouseleave', (e) => {
    gsap.to('svg path',{
        attr:{d:finalPath},
        duration:1.5,
        ease:"power3.out",
        ease: "elastic.out(1,0.2)",
    })
})