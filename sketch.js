var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var b6=0;

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b1=1;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon2');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b2=1;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon3');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b3=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon4');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b4=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon5');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b5=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon6');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b6=1;    });
});

var r1=0;
var cake=0;
var cal=0;
function preload() {
  k = loadImage('https://thumbs.dreamstime.com/b/cyberpenguin-ai-generated-artificial-intelligence-generated-image-penguin-laptop-cyberpenguin-hacking-picture-311001881.jpg');
}
function setup() {
  createCanvas(1345, 640);
  alert("lol :p \nYou can release your frustration by popping the balloons and see what happens ;)");

}

function draw() {
  background(211, 215, 226);
fill(255)




noStroke();
fill(211, 215, 226);

if(b1&&b2&&b3&&b4&&b5&&b6){
image(k,383,260,600,344);
if(cake==0){
alert("Do you know if this pengu is you last weekend, or me hacking you with this april fool? \nif yes click on the blue circle at the bottom to go to get the prize, if not click on the red circle to see the answer");
cake++;}
}}


textSize(30);
fill(102, 171, 249);


