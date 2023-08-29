const canvas = document.getElementById("inclass");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "pink";
ctx.fillRect(20, 20, 100, 75);

ctx.fillRect(150, 20, 100, 5);

ctx.beginPath();
ctx.moveTo(20, 150);
ctx.lineTo(450, 20);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

