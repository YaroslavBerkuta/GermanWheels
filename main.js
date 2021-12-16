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
