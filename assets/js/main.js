var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".mySwiperOne", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

let subsBtn = document.querySelector(".subscribe-btn");
let info = document.querySelector(".info");

subsBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

function btnOnClick() {
  let subsInp = document.querySelector(".subscribe-input").value;
  if (subsInp.length == 0 || subsInp.trim() == "") {
    alert("Zehmet olmasa doldurun");
  } else {
    info.innerHTML = "Submitting...";
  }
}

let search = false;
function openCart() {
  if (search == false) {
    document.querySelector(".search").classList.add("active");
    search = true;
  } else {
    document.querySelector(".search").classList.remove("active");
    search = false;
  }
}

isOpen = false;
function openDropdown() {
  if (isOpen == false) {
    document.querySelector(".dropDown-shop").classList.add("active");
    isOpen = true;
  } else {
    document.querySelector(".dropDown-shop").classList.remove("active");
    isOpen = false;
  }
}

function increment() {
  document.querySelector("#qty").value++;
}

function decrement() {
  document.querySelector("#qty").value--;
}

const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow() {
  const target = this;
  const item = target.classList.contains("accordion-tab")
    ? target
    : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;

  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add("accordion-active");
      } else {
        tab.classList.remove("accordion-active");
      }
    }
  });

  labels.forEach(function (label) {
    const tabItem = label.parentElement;

    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add("accordion-active");
      } else {
        tabItem.classList.remove("accordion-active");
      }
    }
  });
}

labels.forEach(function (label) {
  label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", toggleShow);
});

let openSelect = false;
function openSelectCart() {
  if (openSelect == false) {
    document.querySelector(".select-list").classList.add("active");
    openSelect = true;
  } else {
    document.querySelector(".select-list").classList.remove("active");
    openSelect = false;
  }
}

let district = false;
function openDistrict() {
  if (district == false) {
    document.querySelector("#select-list").classList.add("active");
    district = true;
  } else {
    document.querySelector("#select-list").classList.remove("active");
    district = false;
  }
}
