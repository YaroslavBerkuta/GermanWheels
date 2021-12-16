const serviceLabel = document.querySelectorAll(".service__form form label");
const openMain = document.getElementById("openMain");
const mainData = document.querySelector(".main__data");
const sendMain = document.querySelector("#sendMain");
serviceLabel.forEach((item) => {
  item.addEventListener("change", () => {
    item.classList.toggle("active");
  });
});

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
    "январь",
    "Февраль",
    "март",
    "апрель",
    "Май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
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
      days += `<div class="today"><span>${i}</span></div>`;
    } else {
      days += `<div><span>${i}</span></div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date"><span>${j}</span></div>`;
    monthDays.innerHTML = days;
  }
  const daysDiv = document.querySelectorAll(".days div")

daysDiv.forEach(item=>{
  item.classList.remove("active");
  item.addEventListener("click",()=>{
    if(!item.classList.contains("active")){
      item.classList.add("active");
    }
  })
})


for(let i=0; i<daysDiv.length; i++){
  daysDiv[i].addEventListener("click", ()=>{
    daysDiv.forEach(item=>{
      item.classList.remove("active");
    })
    daysDiv[i].classList.add("active")
  })
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
