let slideIndex = 1;
let intervalId = null;
let slides;

window.addEventListener('load', async () => {
  const url = 'https://odinkeane.github.io/web-developer/practical6/data.json';
  const response = await request(url);

  slotSpawn(response.data);
  slides = document.querySelectorAll(".mySlides");
  showProducts(response.data);
  showSlides(slideIndex);
  autoPlay();

});

function request(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function slotSpawn(response) {
  const carousel = document.querySelector('.slideshow-container');
  for (let i = 0; i < response.length; i++) {
    carousel.innerHTML += `
    <div class="mySlides fade">
      <div class="myContent">
        
      </div>
    </div>`
  }
  carousel.innerHTML += `
  <div class="slider-controllers">
    <button class="prev" onclick="prevSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 15 40" fill="none">
        <path d="M13.5 35.4332L1.87776 20L13.5 4.56676L13.5 35.4332Z" fill="white" stroke="#FF6B00"
          stroke-width="3" />
      </svg>
    </button>
    <button class="next" onclick="nextSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 15 40" fill="none">
        <path d="M1.5 4.56677L13.1222 20L1.5 35.4332L1.5 4.56677Z" fill="white" stroke="#FF6B00"
          stroke-width="3" />
      </svg>
    </button>
  </div>
  `;
};

function showProducts(response) {
  const myContent = document.querySelectorAll('.myContent');
  for (let i = 0; i < response.length; i++) {
    if (response[i].hot) {
      myContent[i].innerHTML = `
      <img src="${response[i].urlImage}">
      <h4>${response[i].name}</h4>
      <div class="price-wrapper">
        <p class="price">$${response[i].price}</p>
        <img src="https://odinkeane.github.io/web-developer/practical6/hot.svg">
      </div>
      `;
    } else {
      myContent[i].innerHTML = `
      <img src="${response[i].urlImage}">
      <h4>${response[i].name}</h4>
      <div class="price-wrapper">
        <p class="price">$${response[i].price}</p>
      </div>
      `;
    }
  }
}


function prevSlide() {
  slideIndex--;
  showSlides(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}
function autoPlay() {
  intervalId = setInterval(nextSlide, 8000);
}
function currentSlides(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}