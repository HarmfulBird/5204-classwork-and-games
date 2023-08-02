const content1 = `
    <h1>Conner</h1>

    <div class="image">
        <img src="/assets/exercise2/tauranga-port-study-with-new-zealand.jpg" alt="Hometown" width="auto" height="200px">
    </div>

    <h1>Tauranga</h1>
    <h2>Bay Of Plenty</h2>
    <h2>New Zealand</h2>
`
const content2 = `
    <h1>HarmlessBird</h1>

    <div class="image">
        <img src="/assets/exercise2/4e4195aa-b9ca-42cd-923f-e8a65c8c5c7b.jpg" alt="Hometown" width="auto" height="200px">
    </div>

    <h1>Auckland</h1>
    <h2>Auckalnd</h2>
    <h2>New Zealand</h2>
`
const content3 = `
    <h1>Name 3</h1>

    <div class="image">
        <img src="/assets/exercise2/hamilton-aerial-waikato.jpg" alt="Hometown" width="auto" height="200px">
    </div>

    <h1>Hamilton</h1>
    <h2>Waikato</h2>
    <h2>New Zealand</h2>
    `

const screens = [content1, content2, content3];
var select = screens[0];

var i = 0;

function next(){
if (i === 2){
    i = 0;
}
else {
    i = i + 1;
}
select = screens[i];
document.getElementById("app120").innerHTML = select;
}

document.getElementById("app120").innerHTML = select;