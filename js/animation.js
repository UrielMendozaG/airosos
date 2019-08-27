var elipse = document.getElementsByClassName("elipse");
var elipse2 = document.getElementsByClassName("elipse2");
var elipse3 = document.getElementsByClassName("elipse3");

var opacity, scale, repeat = 0;

opacity = .1;
scale = 1.2; 
repeat = -1;

TweenMax.to(elipse, 2, { opacity: opacity, scale: scale,repeat:repeat}, 0.7);
TweenMax.to(elipse2, 2, { opacity: opacity, scale: scale,repeat:repeat}, 0.7);
TweenMax.to(elipse3, 2, { opacity: opacity, scale: scale,repeat:repeat}, 0.7);

