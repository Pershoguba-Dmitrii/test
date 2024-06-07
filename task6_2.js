const productInfo = [
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/main.png",
    "desc-text": "Main"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/soups.png",
    "desc-text": "Soups"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/salads.png",
    "desc-text": "Salads"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/drinks.png",
    "desc-text": "Drinks"
  },
];

const menuElements = [
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/offer-and-promo.svg",
    "desc-text": "Offer and promo"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/recent-orders.svg",
    "desc-text": "Recent Orders"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/location.svg",
    "desc-text": "Location"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/settings.svg",
    "desc-text": "Settings"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/security.svg",
    "desc-text": "Security"
  },
  {
    "img-src": "https://odinkeane.github.io/web-developer/practical5/privacy-policy.svg",
    "desc-text": "Privacy Policy"
  },
];

const menuOption = document.querySelector('.burger-nav-ul');
const mainGrid = document.querySelector('.main-grid');
window.addEventListener('load', () => {
  productInfo.forEach(element => {
    mainGrid.innerHTML += `
    <figure class="grid-slot">
    <div class="grid-slot-img-bg">
      <img class="grid-slot-img" src="${element["img-src"]}" alt="">
    </div>
    <figcaption class="grid-slot-description">
      <h3>${element["desc-text"]}</h3>
    </figcaption>
    </figure>
  `
  });

  menuElements.forEach(element => {
    menuOption.innerHTML += `
      <li>
      <img src="${element["img-src"]}" alt="">
      <a href="#">${element["desc-text"]}</a>
      </li>
    `
  });

});




