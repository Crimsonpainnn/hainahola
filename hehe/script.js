var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        if (response.ok) {
          button.textContent = "I LOVE YOU SANUU ";
        } else {
          console.error('Failed to send email');
          button.textContent = "I LOVE YOU SANUU ❤❤❤";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        button.textContent = "I LOVE YOU SANUU ❤❤❤";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgb(0, 10, 208)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // Speed up fading in and out of text
    if(frameNumber < 100){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Everyday day I cannot believe how lucky I am Pratiksha", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    if(frameNumber >= 100 && frameNumber < 200){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Everyday day I cannot believe how lucky I am Pratiksha", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 200){
        opacity = 0;
    }
    if(frameNumber > 200 && frameNumber < 350){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    if(frameNumber >= 350 && frameNumber < 450){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 450){
        opacity = 0;
    }

    if(frameNumber > 450 && frameNumber < 600){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    if(frameNumber >= 600 && frameNumber < 700){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 700){
        opacity = 0;
    }

    if(frameNumber > 700 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    if(frameNumber >= 1000 && frameNumber < 1100){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 1100){
        opacity = 0;
    }

    if(frameNumber > 1100 && frameNumber < 1400){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    if(frameNumber >= 1400 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 1500){
        opacity = 0;
    }

    if(frameNumber > 1500 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("I love you so much pratiksha kaluu, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.03; // Faster fade in
    }
    
    if(frameNumber >= 2000 && frameNumber < 2100){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 60));
        opacity = opacity - 0.03; // Faster fade out
    }

    if(frameNumber == 2100){
        opacity = 0;
    }

    if(frameNumber > 2100 && frameNumber < 2400){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day  mayaa <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.03; // Faster fade in

        button.style.display = "block";
    }

    // Reset the shadow effect after drawing the text
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);