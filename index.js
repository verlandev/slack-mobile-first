// window.addEventListener('resize', () =>{
//     console.log(window.innerWidth)
// })

// // JS en el nav bar

// const button = document.querySelector('.navbar__button')
// const nav = document.querySelector('.nav__elements')
// const navbar = document.querySelector('.navbar')
// const slack = document.querySelector('h5')
// const svg = document.querySelector('.navbar__button--svg')



// button.addEventListener('click', () =>{
    
//     if (nav.classList.toggle('activo')){

//             navbar.style.background = "#fff";
//             button.style.background = "#fff";
//             slack.style.color = "#000";
//             svg.style.filter="invert(100%)"
//     } 
//         else {
            
//             navbar.style.background = "#531554";
//             button.style.background = "#531554";
//             slack.style.color = "#fff";
//             svg.style.filter="invert(0%)"    
//     }   
// })

// // JS para el carrusel

// const caption = document.querySelector('.addFeatures__caption')
// const span = document.querySelectorAll('.addFeatures__carrusel--span')

// span.forEach((cadaSpan, i) =>{ 
//     span[i].addEventListener('click', () =>{

//         let position = i
//         let operacion = position * -170

//         caption.style.transform = `translateX(${operacion}%)`

//         span.forEach( (cadaSpan, i) => {
//             span[i].classList.remove('span__active')
//         })
//         span[i].classList.add('span__active')

//     })

// })


// //JS para el acordeón

// const block     = document.querySelectorAll('.footerSupMenu__block')
// const h5        = document.querySelectorAll('.footerSupMenu__h5')

// h5.forEach(( eachH5, i) =>{
//     h5[i].addEventListener('click', accordeon = ()=>{

//         block.forEach((eachBlock, i)=>{
//             block[i].classList.remove('block--active')
//         })
//             block[i].classList.add('block--active')
//     } )

//     eachH5.removeEventListener
// })

const block     = document.querySelectorAll('.footerSupMenu__block')
const h5        = document.querySelectorAll('.footerSupMenu__h5')


window.addEventListener('resize', () =>{
    
    if(window.innerWidth > 1600){
        for (const h of h5) {
            h.removeEventListener('click',accordeon, false)
        } 
    } else {
        for (const h of h5) {
            h.addEventListener('click',accordeon)
        }
    }
})

// JS en el nav bar

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
    } 
        else {
            
            navbar.style.background = "#531554";
            button.style.background = "#531554";
            slack.style.color = "#fff";
            svg.style.filter="invert(0%)"    
    }   
})

// JS para el carrusel

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


//JS para el acordeón
const accordeon = (e) => {
    const i = e.target.id
    block.forEach((eachBlock, i)=>{
        eachBlock.classList.remove('block--active')
    })
        block[i].classList.add('block--active')
} 

h5.forEach(( eachH5, i) =>{
    eachH5.id = i
    h5[i].addEventListener('click', accordeon
)})
