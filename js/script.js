let myChart = document.getElementById("myChart").getContext("2d");
let hamburger = document.querySelector(".hamburger");
let topBar = document.querySelector(".topLinks");
let profilePic = document.querySelector(".profilePic");
let sideBar = document.querySelector(".sideBar");
let links = document.getElementById("links");
let exit = document.getElementsByClassName("exit");
let quit = document.getElementsByClassName("quit");
let exitCancel = document.getElementsByClassName("exitCancel");
let addLinkUpButton = document.getElementsByClassName("addLinkUpButton");
let submitLinkUp = document.getElementById("submitLinkUp");
let addLinkUpModal = document.querySelector(".bg-modal-uplink");
let addLinkDownButton = document.getElementsByClassName("addLinkDownButton");
let addLinkDownModal = document.querySelector(".bg-modal-downlink");
let submitLinkDown = document.getElementById("submitLinkDown");
let addChangeLinkModal = document.querySelector(".bg-modal-linkChange");
let addBannerUpButton = document.getElementsByClassName("addBannerUpButton");
let submitBannerUp = document.getElementById("submitBannerUp");
let message = document.querySelector(".bg-modal-message");
let exitModal = document.querySelector(".bg-modal-exit");
let addBannerUpModal = document.querySelector(".bg-modal-upbanner");
let addBannerDownButton = document.getElementsByClassName(
  "addBannerDownButton"
);
let addBannerDownModal = document.querySelector(".bg-modal-downbanner");
let submitBannerDown = document.getElementById("submitBannerDown");
let linksShow = document.getElementById("linksShow");
let banners = document.getElementById("banners");
let details = document.getElementById("details");
let detailsShow = document.getElementById("detailsShow");
let payout = document.getElementById("payout");
let payoutShow = document.getElementById("payoutShow");
let bannersShow = document.getElementById("bannersShow");
let general = document.getElementById("general");
let generalShow = document.getElementById("generalShow");
let personalData = document.getElementById("personalData");
let personalDataShow = document.getElementById("personalDataShow");
let body = document.querySelector("body");
let linkUl = document.getElementById("linkUl");
let bannerUl = document.getElementById("bannerUl");
let close = document.getElementsByClassName("close");
let bannerArr = [
  ["banner1", "www.banner1.gif"],
  ["banner2", "www.banner2.gif"],
  ["banner3", "www.banner3.gif"]
];
let linkArr = [
  ["homepage", "www.homepage.com"],
  ["google", "www.google.com"],
  ["onet", "www.onet.pl"]
];

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
  topBar.classList.toggle("showMenu");
  sideBar.classList.toggle("showMenu");
});

linksShow.addEventListener("click", function() {
  links.classList.toggle("show");
});

function updateLink() {
  while (linkUl.firstChild) {
    linkUl.removeChild(linkUl.firstChild);
  }
  createList(linkArr);
}
function updateBanner() {
  while (bannerUl.firstChild) {
    bannerUl.removeChild(bannerUl.firstChild);
  }
  createBanner(bannerArr);
}

function createList(arr) {
  let i = 0;
  arr.forEach(link => {
    i++;
    let node = document.createElement("LI");
    node.innerHTML += `<div class='linkEl'><p>${link[0]}</p><a href=''#''>${
      link[1]
    }</a></div><div class='linkControl'><svg version='1.1' class='changeLink'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 18 10' style='enable-background:new 0 0 18 10;' xml:space='preserve'><path d='M7,8H5C3.3,8,2,6.7,2,5s1.3-3,3-3h1V1H5C2.8,1,1,2.8,1,5s1.8,4,4,4h2c2.2,0,4-1.8,4-4h-1C10,6.7,8.7,8,7,8z M13,1h-2 C8.8,1,7,2.8,7,5h1c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3s-1.3,3-3,3h-1v1h1c2.2,0,4-1.8,4-4S15.2,1,13,1z'/></svg><svg version='1.1' class='trashLink' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 14 16' style='enable-background:new 0 0 14 16;'xml:space='preserve'><path d='M11,15H3V6H2v10h10V6h-1V15z M0,4v1h14V4H0z M7,2c0.6,0,1,0.4,1,1h1c0-1.1-0.9-2-2-2S5,1.9,5,3h1C6,2.4,6.4,2,7,2z M8,6v8h1 V6H8z M5,6v8h1V6H5z'/></svg></div>`;
    node.classList.add(i);
    linkUl.appendChild(node);
  });
}
function createBanner(arr) {
  let i = 0;
  arr.forEach(link => {
    i++;
    let node = document.createElement("LI");
    node.innerHTML += `<div class='linkEl'><p>${link[0]}</p><a href=''#''>${
      link[1]
    }</a></div><div class='linkControl'><svg version='1.1' class='changeBanner'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 18 10' style='enable-background:new 0 0 18 10;' xml:space='preserve'><path d='M7,8H5C3.3,8,2,6.7,2,5s1.3-3,3-3h1V1H5C2.8,1,1,2.8,1,5s1.8,4,4,4h2c2.2,0,4-1.8,4-4h-1C10,6.7,8.7,8,7,8z M13,1h-2 C8.8,1,7,2.8,7,5h1c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3s-1.3,3-3,3h-1v1h1c2.2,0,4-1.8,4-4S15.2,1,13,1z'/></svg><svg version='1.1' class='trashBanner' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 14 16' style='enable-background:new 0 0 14 16;'xml:space='preserve'><path d='M11,15H3V6H2v10h10V6h-1V15z M0,4v1h14V4H0z M7,2c0.6,0,1,0.4,1,1h1c0-1.1-0.9-2-2-2S5,1.9,5,3h1C6,2.4,6.4,2,7,2z M8,6v8h1 V6H8z M5,6v8h1V6H5z'/></svg></div>`;
    node.classList.add(i);
    bannerUl.appendChild(node);
  });
}

bannersShow.addEventListener("click", function() {
  banners.classList.toggle("show");
});
close[0].addEventListener("click", function() {
  document.querySelector(".bg-modal-uplink").style.display = "none";
});
close[1].addEventListener("click", function() {
  document.querySelector(".bg-modal-downlink").style.display = "none";
});
close[3].addEventListener("click", function() {
  document.querySelector(".bg-modal-upbanner").style.display = "none";
});
close[4].addEventListener("click", function() {
  document.querySelector(".bg-modal-downbanner").style.display = "none";
});
close[5].addEventListener("click", function() {
  document.querySelector(".bg-modal-message").style.display = "none";
});
close[6].addEventListener("click", function() {
  document.querySelector(".bg-modal-exit").style.display = "none";
});
quit[0].addEventListener("click", function() {
  document.querySelector(".bg-modal-exit").style.display = "none";
});
exitCancel[0].addEventListener("click", function() {
  document.querySelector(".bg-modal-exit").style.display = "none";
});
generalShow.addEventListener("click", function() {
  general.classList.toggle("show");
});
personalDataShow.addEventListener("click", function() {
  personalData.classList.toggle("show");
});
detailsShow.addEventListener("click", function() {
  details.classList.toggle("show");
});
payoutShow.addEventListener("click", function() {
  payout.classList.toggle("show");
});

// link add functions

addLinkUpButton[0].addEventListener("click", function() {
  addLinkUpModal.style.display = "flex";
});
submitLinkUp.addEventListener("click", function() {
  let nameUp = document.getElementById("linkUpName").value;
  let linkUp = document.getElementById("linkUpLink").value;
  linkArr.unshift([nameUp, linkUp]);
  updateLink();
  document.querySelector(".bg-modal-uplink").style.display = "none";
  document.getElementById("linkUpName").value = "";
  document.getElementById("linkUpLink").value = "";
});
submitLinkDown.addEventListener("click", function() {
  let nameDown = document.getElementById("linkDownName").value;
  let linkDown = document.getElementById("linkDOwnLink").value;
  linkArr.push([nameDown, linkDown]);
  updateLink();
  document.querySelector(".bg-modal-downlink").style.display = "none";
  document.getElementById("linkDownName").value = "";
  document.getElementById("linkDownLink").value = "";
});
addLinkDownButton[0].addEventListener("click", function() {
  addLinkDownModal.style.display = "flex";
});

//change link

// banner add function

addBannerUpButton[0].addEventListener("click", function() {
  addBannerUpModal.style.display = "flex";
});
profilePic.addEventListener("click", function() {
  message.style.display = "flex";
});
exit[0].addEventListener("click", function() {
  exitModal.style.display = "flex";
});
submitBannerUp.addEventListener("click", function() {
  let nameUp = document.getElementById("bannerUpName").value;
  let linkUp = document.getElementById("bannerUpLink").value;
  bannerArr.unshift([nameUp, linkUp]);
  updateBanner();
  document.querySelector(".bg-modal-upbanner").style.display = "none";
  document.getElementById("bannerUpName").value = "";
  document.getElementById("bannerUpLink").value = "";
});
submitBannerDown.addEventListener("click", function() {
  let nameDown = document.getElementById("bannerDownName").value;
  let linkDown = document.getElementById("bannerDOwnLink").value;
  bannerArr.push([nameDown, linkDown]);
  updateBanner();
  document.querySelector(".bg-modal-downbanner").style.display = "none";
  document.getElementById("bannerDownName").value = "";
  document.getElementById("bannerDOwnLink").value = "";
});
addBannerDownButton[0].addEventListener("click", function() {
  addBannerDownModal.style.display = "flex";
});

// remove and change element with id trash

document.addEventListener("click", someListener);
function someListener(event) {
  let element = event.target;
  console.log(element);

  if (element.classList.contains("trashLink")) {
    element.parentNode.parentNode.remove();
    linkArr.splice(element.parentNode.parentNode.className - 1, 1);
    updateLink();
  }
  if (element.classList.contains("changeLink")) {
    addChangeLinkModal.style.display = "flex";
  }
  if (element.classList.contains("trashBanner")) {
    element.parentNode.parentNode.remove();
    bannerArr.splice(element.parentNode.parentNode.className - 1, 1);
    updateBanner();
  }
}

function onPageStart() {
  createList(linkArr);
  createBanner(bannerArr);
}
