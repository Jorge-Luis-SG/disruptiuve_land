
window.addEventListener('load', function(){
    new Glider(document.querySelector('.dashboard-home-section1-box1-carousel-container-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.dashboard-home-section1-box1-carousel-container-return',
          next: '.dashboard-home-section1-box1-carousel-container-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 992,
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
                slidesToShow: 3,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            }
          ]
    })
})
