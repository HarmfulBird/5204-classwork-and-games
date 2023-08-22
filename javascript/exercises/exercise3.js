const content1 = `
    <img class="images" src="/assets/exercise3/MicrosoftTeams-image.png"></img>
`
const content2 = `
    <img class="images" src="/assets/exercise3/MicrosoftTeams-image2.png"></img> 
`
const content3 = `
    <img class="images" src="/assets/exercise3/MicrosoftTeams-image3.png"></img>
`

const screens = [content1, content2, content3];
var select = screens[0];

var i = 0;

document.querySelector("button").addEventListener("click", next);

function next(){
if (i === 2){
    i = 0;
}
else {
    i = i + 1;
}
select = screens[i];
document.querySelector("#images130").innerHTML = select;
}

document.querySelector("#images130").innerHTML = select;