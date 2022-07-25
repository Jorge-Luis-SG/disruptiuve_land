
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_container-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.carousel_container-return',
          next: '.carousel_container-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            }
          ]
    })
})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_container-section4-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.carousel_container-section4-return',
          next: '.carousel_container-section4-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            }
          ]
    })
})
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_container-section5-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.carousel_container-section5-return',
          next: '.carousel_container-section5-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            }
          ]
    })
})


// CARRUSEL DE ABOUT US 

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel_containerTres-list'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.carousel_containerTres-return',
        next: '.carousel_containerTres-next'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 800,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          }
        ]
  })
})


window.addEventListener('load', function(){
  new Glider(document.querySelector('.about-section-3-carousel-list'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.about-section-3-carousel-return',
        next: '.about-section-3-carousel-next'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 850,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1330,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          }
        ]
  })
})


//GROW CRYPTO 

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel_containerFour-list'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.carousel_containerFour-return',
        next: '.carousel_containerFour-next'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 800,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          }
        ]
  })
})

//LEARN CRYPTO 

window.addEventListener('load', function(){
  new Glider(document.querySelector('.learn-carousel-list'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.learn-carousel-return',
        next: '.learn-carousel-next'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 850,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
              // itemWidth: 150,
            }
          }
        ]
  })
})


//ACORDION INVESTMENT
const titleAcordion = document.querySelectorAll('.investment-section3-accordion-item-title');
const boxAcordion = document.querySelectorAll('.investment-section3-accordion-item-parrafo');
let imgAcordion = document.querySelectorAll('.investment-section3-accordion-item-title-img');

titleAcordion.forEach((title, i) =>{
  titleAcordion[i].addEventListener('click', ()=>{
    // boxAcordion.forEach((boxAcordionItem, i)=>{
    //   boxAcordion[i].classList.remove('acordion-activo');
    // });
    boxAcordion[i].classList.toggle('acordion-activo');
    // imgAcordion.forEach((imgAcordionItem, i)=>{
    //   imgAcordion[i].classList.remove('acordion-img-activo');
    // });
    imgAcordion[i].classList.toggle('acordion-img-activo')
  })
});

const titleAcordionA = document.querySelectorAll('.learn-section-2-accordion-item-title');
const boxAcordionA = document.querySelectorAll('.learn-section-2-accordion-item-box');
let imgAcordionA = document.querySelectorAll('.learn-section-2-accordion-item-title-img');

titleAcordionA.forEach((title2, i) =>{
  titleAcordionA[i].onclick = ()=>{
    // boxAcordionA.forEach((boxAcordionItem, i)=>{
    //   boxAcordionA[i].classList.remove('acordion-activo-padre');
    // });
    boxAcordionA[i].classList.toggle('acordion-activo-padre');
    // imgAcordionA.forEach((imgAcordionItem, i)=>{
    //   imgAcordionA[i].classList.remove('acordion-img-activo-padre');
    // });
    imgAcordionA[i].classList.toggle('acordion-img-activo-padre');
  }
});

const titleAcordionson = document.querySelectorAll('.learn-section-2-accordion-sub-item-title');
const boxAcordionson = document.querySelectorAll('.learn-section-2-accordion-sub-item-parrafo');
let imgAcordionson = document.querySelectorAll('.learn-section-2-accordion-sub-item-title-img');

titleAcordionson.forEach((title2, i) =>{
  titleAcordionson[i].onclick = ()=>{
    boxAcordionson.forEach((boxAcordionItem, i)=>{
      boxAcordionson[i].classList.remove('acordion-activo-hijo');
    });
    boxAcordionson[i].classList.add('acordion-activo-hijo');
    imgAcordionson.forEach((imgAcordionItem, i)=>{
      imgAcordionson[i].classList.remove('acordion-img-activo-hijo');
    });
    imgAcordionson[i].classList.add('acordion-img-activo-hijo');
 
  }
});




// PORTAFOLIO 
let portolioAll = document.querySelectorAll('.portfolio-filter-all');
let porfolio1 = document.querySelectorAll('.first-category');
let portfolioGrid1 = document.getElementById('filter-1');
let portfolioGrid2 = document.getElementById('filter-2');
let portfolioGrid3 = document.getElementById('filter-3');




portfolioGrid1.onclick =() =>{
  console.log("HOLA")
  portolioAll.forEach((a, i)=>{
    portfolioGrid1.classList.add('portfolio-filter-all')
    porfolio1[i].classList.remove('portfolio-filter-all');
  })
}
 


// portfolioGrid2.onclick=()=>{
//   document.querySelectorAll('.first-category').classList.remove('portfolio-filter-all');
//   document.querySelectorAll('.second-category').classList.remove('portfolio-filter-all');
//   document.querySelectorAll('.thirdy-category').classList.add('portfolio-filter-all');
// }
// portfolioGrid3.onclick=()=>{
//   document.querySelectorAll('.first-category').classList.remove('portfolio-filter-all');
//   document.querySelectorAll('.second-category').classList.remove('portfolio-filter-all');
//   document.querySelectorAll('.thirdy-category').classList.add('portfolio-filter-all');
// }