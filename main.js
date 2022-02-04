const serviceLabel = document.querySelectorAll(".service__form form label");
const openMain = document.getElementById("openMain");
const mainData = document.querySelector(".main__data");
const sendMain = document.querySelector("#sendMain");
serviceLabel.forEach((item) => {
  item.addEventListener("change", () => {
    item.classList.toggle("active");
  });
});
const burger = document.querySelector(".menu__burger")
const menu = document.querySelector(".mobill__wrapper")
burger.addEventListener("click", () => {
  menu.classList.toggle("active")
})
menu.querySelectorAll(".menu li").forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active")
  })
})
openMain.addEventListener("click", () => {
  mainData.classList.add("active");
  openMain.style.display = "none";
  sendMain.style.display = "block";
});

const date = new Date();
const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector(".days");
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  document.querySelector(".date h2").innerHTML = months[date.getMonth()];
  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date"><span>${prevLastDay - x + 1}</span></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today active"><span>${i}</span></div>`;
    } else {
      days += `<div><span>${i}</span></div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date"><span>${j}</span></div>`;
    monthDays.innerHTML = days;
  }
  const dateInput = document.getElementById("dateSelect");
  const daysDiv = document.querySelectorAll(".days div");
  for (let i = 0; i < daysDiv.length; i++) {
    daysDiv[i].addEventListener("click", () => {
      dateInput.setAttribute(
        "value",
        `${daysDiv[i].querySelector("div span").textContent}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`
      );
      daysDiv.forEach((item) => {
        item.classList.remove("active");
      });
      daysDiv[i].classList.add("active");
    });
  }
};
document.querySelector(".prev-btn").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next-btn").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();

const timeDiv = document.querySelectorAll(".time___flex div");
const timeInput = document.getElementById("timeSelect");

timeDiv.forEach((item) => {
  item.classList.remove("active");
  item.addEventListener("click", () => {
    timeInput.setAttribute("value", item.querySelector("span").textContent);
    if (!item.classList.contains("active")) {
      item.classList.add("active");
    }
  });
});

for (let i = 0; i < timeDiv.length; i++) {
  timeDiv[i].addEventListener("click", () => {
    timeDiv.forEach((item) => {
      item.classList.remove("active");
    });
    timeDiv[i].classList.add("active");
  });
}

const cheack = document.querySelector(".cheack");
const cheackImg = document.querySelector(".cheack__img");
const behindWheels = document.querySelector(".select__wheels-behind");
cheack.addEventListener("click", () => {
  cheackImg.classList.toggle("active");
  if (cheackImg.classList.contains("active")) {
    behindWheels.classList.add("active");
  } else {
    behindWheels.classList.remove("active");
  }
});

let map;


function initMap() {
  const myLatLng = { lat: 50.42506592850202, lng: 30.50686357493421 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    mapId: "f6a4b25e969da642",
    center: myLatLng,
  });

  new google.maps.Marker({
    icon:"./img/mapPin.svg",
    position: myLatLng,
    map,
    title: "German Wheels",
  });
}


const firstPopupOpen = document.getElementById("firstPopup")
const secondPopupOpen = document.getElementById("secondPopup")
const popup = document.querySelectorAll(".popup")
const firstPopup = document.querySelector(".popup__first")
const secondPopup = document.querySelector(".popup__second")
const closepopup = document.querySelectorAll(".popup__close")
firstPopupOpen.addEventListener("click", ()=>{
  firstPopup.classList.add("active")
})
secondPopupOpen.addEventListener("click", ()=>{
  secondPopup.classList.add("active")
})
closepopup.forEach((item) => {
  item.addEventListener("click", () => {
    popup.forEach((popup)=>{
      popup.classList.remove("active");
    })
  })
})

