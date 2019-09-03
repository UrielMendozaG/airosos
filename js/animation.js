//animation properties

const elipse = document.querySelectorAll(".elipse");
const propiedades = document.querySelector("#propiedades");
const button = document.querySelector("#propiedades-button");
const lluviasection = document.querySelectorAll("#lluvia");

var opacity,
  scale,
  repeat = 0;

opacity = 0;
scale = 1.2;
repeat = -1;

TweenMax.to(elipse, 1, { opacity: opacity, scale: scale, repeat: repeat });

//on click event

elipse.forEach(elipse => {
  elipse.addEventListener("click", () => {
    //evento alerta con las propiedades
    propiedades.classList.add("propiedades");

    lluviasection.forEach(lluviasection => {
      lluviasection.classList.add("section-hide");
    });

    button.addEventListener("click", () => {
      propiedades.classList.remove("propiedades");

      lluviasection.forEach(lluviasection => {
        lluviasection.classList.remove("section-hide");
      });
    });
  });
});

//on hover
elipse.forEach(elipse => {
  elipse.addEventListener("mouseover", () => {
    let opacity_ = 1;
    let repeat_ = 0;
    let scale_ = 1;
    TweenMax.to(elipse, 0.1, {
      opacity: opacity_,
      scale: scale_,
      repeat: repeat_
    });
  });
});

//click out
elipse.forEach(elipse => {
  elipse.addEventListener("mouseout", () => {
    TweenMax.to(elipse, 1, { opacity: opacity, scale: scale, repeat: repeat });
  });
});

//scroll properties

new fullpage("#fullPage", {
  //navegacion
  autoScrolling: true,
  controlArrows: true,
  navigation: true,
  navigationPosition: "right",
  scrollingSpeed: 800,

  //diseño
  verticalCentered: false,
  paddingTop: "0",
  paddingBottom: "0",
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: false, fadeBackground: false }
});
