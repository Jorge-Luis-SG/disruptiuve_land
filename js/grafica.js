//GRAFICA DE INVESTMENT 

new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: {
        labels: [0,84, 1999, 4500000],
      datasets: [
        {
          data: [0, 84040,  2060000, 4500000],
          label: "a",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: [0, 54040,  1030000, 3500000],
          label: "",
          borderColor: "#8e5ea2",
          fill: false
        }
      ]
    },
    options: {
  
    }
  });
  