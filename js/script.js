let myChart = document.getElementById("myChart").getContext("2d");
let hamburger = document.querySelector(".hamburger");
let topBar = document.querySelector(".topLinks");
let sideBar = document.querySelector(".sideBar");
let links = document.getElementById("links");
let linksShow = document.getElementById("linksShow");
let banners = document.getElementById("banners");
let bannerssShow = document.getElementById("bannersShow");
let personalData = document.getElementById("personalData");
let personalDataShow = document.getElementById("personalDataShow");
let trash = document.getElementById("trash");

let earningChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: "",
        data: [430, 190, 300, 250, 200, 380, 500, 450, 590, 290],
        backgroundColor: [
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca"
        ],
        borderColor: [
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca",
          "#80bfca"
        ],
        borderWidth: 1
      },
      {
        label: "",
        data: [230, 390, 100, 450, 500, 270, 450, 320, 120, 490],
        backgroundColor: [
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38"
        ],
        borderColor: [
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38",
          "#ff9a38"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

hamburger.addEventListener("click", function() {
  topBar.classList.toggle("show");
  sideBar.classList.toggle("show");
});

linksShow.addEventListener("click", function() {
  links.classList.toggle("show");
});

bannersShow.addEventListener("click", function() {
  banners.classList.toggle("show");
});
personalDataShow.addEventListener("click", function() {
  personalData.classList.toggle("show");
});

trash.addEventListener("click", function() {
  document.getElementById(this.parentNode.parentNode.id).remove();
});
