


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


// HEADER

const btn_connect_Wallet = document.querySelector('.dash-header-box2-btn2');
const btn_content_Wallet = document.querySelector('.connect-wallet-options');

btn_connect_Wallet.onclick = () =>{
  btn_content_Wallet.classList.add("wallet-options-active")
  document.body.style="overflow:hidden;"
}
const btn_close_Wallet = document.getElementById('btn-connect-close');
btn_close_Wallet.onclick = () =>{
  btn_content_Wallet.classList.remove("wallet-options-active")
  document.body.style="overflow:auto;"
}


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


// GRAFICA

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    tension: .2,
    datasets: [
      {
        data: [340,360,290,350,500,400],
        label: " ",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: [300,340,350,460,400,500],
        label: " ",
        borderColor: "#7DD61D",
        fill: false
      },
      
    ]
  },
  options: {
    title: {
      display: false,
      text: ""
    },
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  }
});

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ['Amet: 15.7K',
    'Sit: 1K',
    'Ipsum: 1.9K',
    'Lorem: 2.1k'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [200, 50, 100,100],
        backgroundColor: [
          'rgb(255, 197, 66)',
          'rgb(255, 151, 74)',
          'rgb(125, 214, 29)',
          'rgb(0, 98, 255)'
        ],
        hoverOffset: 4,
        borderColor: "#3e95cd",
        fill: false
      },
    ]
  },
  options: {
    cutoutPercentage: 90,
    legend: {
      display: false,
  },
    title: {
      display: false,
      text: ""
    }
  }
});