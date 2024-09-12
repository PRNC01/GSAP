let Main = document.getElementById('Main');
let Cursor = document.getElementById("Cursor");
let imgDiv  = document.getElementById("img")

Main.addEventListener('mousemove',(e) => {
    gsap.to(Cursor,{
        x:e.x,
        y:e.y,
        duration:0.1,
    })
});

imgDiv.addEventListener('mouseenter',() => {
    Cursor.innerHTML = 'View More'
    gsap.to(Cursor,{
        scale:4,
    })
});

imgDiv.addEventListener('mouseleave',() => {
    Cursor.innerHTML = ''
    gsap.to(Cursor,{
        scale:1,
    })
})