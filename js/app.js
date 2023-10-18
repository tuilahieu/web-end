window.onload = () => {
  document.querySelector(".loading").remove();
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".menu");
  const toggleClose = document.querySelector(".menu-close");
  toggle.addEventListener("click", handleToggleMenu);
  toggleClose.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu.classList.toggle("is-show");
  }

  // các hàm để quản lí

  function renderToDOM(selector, html, pos = "beforeend") {
    document.querySelector(selector).insertAdjacentHTML(`${pos}`, html);
  }

  function renderDestinationHTML({
    img = "./images/default.jpeg",
    title = "Canh dep Viet Nam",
    place = 0,
  }) {
    return `
      <div class="destination-item">
          <div class="destination-image">
              <img src=${img} alt="" />
          </div>
          <div class="destination-content">
              <h3 class="destination-title">${title}</h3>
              <h4 class="destination-place text text--small">
              ${place} place${place > 1 ? "s" : ""} to visit
              </h4>
          </div>
      </div>`;
  }

  function renderOfferHTML({
    img = "./images/default.jpeg",
    tour = "",
    cost = 0,
    title = "",
    location = "",
    rate = 0,
  }) {
    return `
      <div class="offer-item">
        <div class="offer-image">
          <img
            src=${img}
            alt=""
          />
        </div>
        <div class="offer-content">
          <div class="offer-top">
            <div class="offer-tour text--secondary">${tour}</div>
            <div class="offer-price text--primary">
              <strong>${cost}$</strong><span>/person</span>
            </div>
          </div>
          <h3 class="offer-title">${title}</h3>
          <div class="offer-bottom">
            <div class="offer-location">
              <ion-icon name="location"></ion-icon>
              <span>${location}</span>
            </div>
            <div class="offer-rating text--secondary">
              <ion-icon name="star"></ion-icon>
              <span>${rate}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderLastestBlogHTML({
    title = "",
    author = "",
    img = "./images/default.jpeg",
  }) {
    return `
        <div>
          <a href="#" class="blog-image">
            <img
              src=${img}
              alt=""
            />
            <div class="play">
              <ion-icon name="play"></ion-icon>
            </div>
          </a>
          <h3>
            <a href="#" class="blog-title"
              >${title}</a
            >
          </h3>
          <div class="blog-by">
            <span>By:</span>
            <a href="#" class="blog-author">@${author}</a>
          </div>
        </div>
        
    `;
  }

  function renderBlogHTML({
    title = "",
    author = "",
    img = "./images/default.jpeg",
  }) {
    return `
      <div class="blog-item">
        <div class="blog-item-content">
          <h4>
            <a href="#" class="blog-item-title"
              >${title}</a
            >
          </h4>
          <h5 class="blog-item-author">@${author}</h5>
        </div>
        <a href="#" class="blog-item-image">
          <img
            src=${img}
            alt=""
          />
        </a>
    </div>
    `;
  }

  // render Desinations
  for (let i = 0; i < virtualDatabase.destinations.length; i++) {
    renderToDOM(
      ".destination-list",
      renderDestinationHTML(virtualDatabase.destinations[i])
    );
  }

  // render Offers
  for (let i = 0; i < virtualDatabase.offers.length; i++) {
    renderToDOM(".offer-list", renderOfferHTML(virtualDatabase.offers[i]));
  }
  $(".offer-list").slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerMode: true,
    slidesToScroll: -1,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  // render Blogs
  renderToDOM(
    ".layout.blog-main",
    renderLastestBlogHTML(virtualDatabase.blogs[0]),
    "afterbegin"
  );

  for (let i = 1; i < virtualDatabase.blogs.length; i++) {
    renderToDOM(".blog-list", renderBlogHTML(virtualDatabase.blogs[i]));
  }
};
