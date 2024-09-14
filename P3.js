function breakText() {
    const H1 = document.querySelector("h1")
    const H1Text = H1.textContent;

    const splittedText = H1Text.split(""); // IT WILL SEPRATE ALL THE CHARCTERS IN THE FORM OF ARRAY 

    let clutter = '';

    const halfValue = splittedText.length/2; 

    splittedText.forEach( (e,idx) => {
        if (idx<halfValue) {
            clutter += `<span class="a">${e}</span>`;
        }else{
            clutter += `<span class="b">${e}</span>`;
        }
    });

    H1.innerHTML = clutter

}

breakText();

gsap.from("h1 .a",{
    y:50,
    stagger:0.15,
    opacity:0,
    duration:1,
})
gsap.from("h1 .b",{
    y:50,
    stagger:-0.15,
    opacity:0,
    duration:1,
})

