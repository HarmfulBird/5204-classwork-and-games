const canvas = document.getElementById("inclass");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;
let x2 = 200;
let y2 = 400;
let count = 10;
let ammount = 100;


for (let i = 0; i < ammount; i++){

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    if(x == 200 && y >= 200 && y < 400){
        y += count;
    }
    else if (y == 400 && x >= 200 && x <400){
        x += count;
    }
    else if (x == 400 && y <= 400 && y >200){
        y -= count;
    }
    else if (y == 200 && x <= 400 && x > 200){
        x -= count;
    }


    if(x2 == 200 && y2 >= 200 && y2 < 400){
        y2 += count;
    }
    else if (y2 == 400 && x2 >= 200 && x2 <400){
        x2 += count;
    }
    else if (x2 == 400 && y2 <= 400 && y2 >200){
        y2 -= count;
    }
    else if (y2 == 200 && x2 <= 400 && x2 > 200){
        x2 -= count;
    }


    console.log(x + " " + y);
    console.log("2: " + x2 + " " + y2);
}


let x3 = 500;
let y3 = 200;
let x4 = 500;
let y4 = 400;

for (let i = 0; i < 100; i++){

    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.stroke();
    
    if(x3 == 500 && y3 >= 200 && y3 < 400){
        y3 += 10;
    }
    else if (y3 == 400 && x3 >= 500 && x3 < 700){
        x3 += 10;
    }
    else if (x3 == 700 && y3 <= 400 && y3 >200){
        y3 -=10;
    }
    else if (y3 == 200 && x3 <= 700 && x3 > 500){
        x3 -= 10;
    }


    if(x4 == 500 && y4 >= 200 && y4 < 400){
        y4 += 10;
    }
    else if (y4 == 400 && x4 >= 500 && x4 < 700){
        x4 += 10;
    }
    else if (x4 == 700 && y4 <= 400 && y4 >200){
        y4 -=10;
    }
    else if (y4 == 200 && x4 <= 700 && x4 > 500){
        x4 -= 10;
    }


    console.log(x3 + " " + y3);
    console.log("2: " + x4 + " " + y4);
}
