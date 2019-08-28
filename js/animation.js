//animation properties

var elipse = document.getElementsByClassName("elipse");

var opacity,
  scale,
  repeat = 0;

opacity = 0.1;
scale = 1.2;
repeat = -1;

TweenMax.to(elipse, 2, { opacity: opacity, scale: scale, repeat: repeat });

//scroll properties

new fullpage("#fullPage", {
  //navegacion
  autoScrolling: true,
  controlArrows: true,
  navigation: true,
  navigationPosition: "left",
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
