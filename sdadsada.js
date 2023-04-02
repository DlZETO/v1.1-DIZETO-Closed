const checkTime = (time) => `0${time}`.slice(-2);

const updateDate = () => {
  const date = new Date();
  const day = checkTime(date.getDate());
  const month = checkTime(date.getMonth() + 1);
  const year = date.getFullYear();
  document.getElementById("dttxt").innerHTML = `${day}/${month}/${year}`;
  setTimeout(updateDate, 500);
};

const updateTime = () => {
  const date = new Date();
  const hours = checkTime(date.getHours());
  const minutes = checkTime(date.getMinutes());
  const seconds = checkTime(date.getSeconds());
  document.getElementById("tmtxt").innerHTML = `${hours}:${minutes}:${seconds}`;
  setTimeout(updateTime, 500);
};

window.onload = () => {
  updateDate();
  updateTime();
};

//---

window.onscroll = function () {
  var aboutSection = document.getElementById("about");
  var aboutSectionTop = aboutSection.offsetTop;
  var navbar = document.querySelector("nav");
  var styles = {
    transition: "background-color 1s ease-in-out, color 1s ease-in-out",
    color: window.pageYOffset >= aboutSectionTop - 67 ? "white" : "black",
    backgroundColor:
      window.pageYOffset >= aboutSectionTop - 67
        ? "rgba(0, 0, 0, 0.85)"
        : "rgba(0, 0, 0, 0)",
  };
  Object.assign(navbar.style, styles);
};

//---

var index = 0;
var slides = document.getElementsByClassName("tmslider");
var dots = document.getElementsByClassName("icon-dot");

function showSlide() {
  if (slides.length === 0 || dots.length === 0) {
    console.error("Elemen tidak ditemukan!");
    return;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.add("hidden");
    dots[i].classList.remove("active");
  }

  slides[index].style.opacity = 1;
  slides[index].classList.remove("hidden");
  dots[index].classList.add("active");
  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(showSlide, 3000);
