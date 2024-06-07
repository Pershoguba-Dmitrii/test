const headerBtn = document.querySelector(".header-btn");
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");


burgerMenu.style.left = "calc(50% - 605px)";
burgerMenu.style.width = "405px";
burgerMenu.style.height = "905px";

headerBtn.addEventListener('click', () => {
  burgerMenu.animate([
    {
      opacity: "0.4",
      left: "calc(50% - 605px)",
    },
    {
      opacity: "1",
      left: "calc(50% - 200px)",
    },
  ],
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
});

burgerBtn.addEventListener('click', () => {
  burgerMenu.animate([
    {
      opacity: "1",
      left: "calc(50% - 200px)",
    },
    {
      opacity: "0.4",
      left: "calc(50% - 605px)",
    },
  ],
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
});