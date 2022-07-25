
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
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1
                // itemWidth: 150,
              }
            }
          ]
    })
})


// DASH MENU LATERAL


let menu_lateral = document.querySelectorAll('.dash-open-menu');
let menu_lateralContent = document.querySelector('.menu-lateral-globlal');
menu_lateral.forEach((menu, i) =>{
  menu_lateral[i].onclick = () =>{
    menu_lateralContent.classList.toggle("dash-menu-active")
    document.getElementById("dash-header-open-movil").classList.toggle('dash-change-menu');
    document.querySelector('.dash-header').classList.toggle('dash-change-menu-header');
  }
})
 


let menu_lateralStatus = document.getElementById('dash_perfil-status');
menu_lateralStatus.onclick = () =>{
  menu_lateralStatus.classList.toggle("dash_perfil-status")
  
}
