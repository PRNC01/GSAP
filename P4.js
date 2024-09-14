window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        gsap.to(".Marque",{
            transform:"translateX(-200%)",
            duration:4,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".Marque img",{
            rotate:180,
        })
    }else{
        gsap.to(".Marque",{
            transform:"translateX(0%)",
            duration:2,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".Marque img",{
            rotate:0,
        })
    }
})