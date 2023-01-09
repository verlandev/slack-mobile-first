const button = document.querySelector('.navbar__button')
const nav = document.querySelector('.nav__elements')
const navbar = document.querySelector('.navbar')
const slack = document.querySelector('h5')
const svg = document.querySelector('.navbar__button--svg')

button.addEventListener('click', () =>{
    if (nav.classList.toggle('activo')){
        navbar.style.background = "#fff";
        button.style.background = "#fff";
        slack.style.color = "#000";
        svg.style.filter="invert(100%)"
    } else {
        navbar.style.background = "#531554";
        button.style.background = "#531554";
        slack.style.color = "#fff";
        svg.style.filter="invert(0%)"
        
    }
    
    
    
})

const caption = document.querySelector('.addFeatures__caption')
const span = document.querySelectorAll('.addFeatures__carrusel--span')

span.forEach((cadaSpan, i) =>{ 
    span[i].addEventListener('click', () =>{

        let position = i
        let operacion = position * -170

        caption.style.transform = `translateX(${operacion}%)`

        span.forEach( (cadaSpan, i) => {
            span[i].classList.remove('span__active')
        })
        span[i].classList.add('span__active')

    })

})