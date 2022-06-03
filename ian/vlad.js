//changed the title
document.getElementById(`h1`).innerHTML = "Vlad CEO of Knights of The Pink Unicorns";

//changed the main picture and styled it
document.getElementsByClassName(`pf`)[0].src = "./images/raydonovan.jpg";
document.getElementsByClassName(`pf`)[0].style.width = `25vw`;
document.getElementsByClassName(`pf`)[0].style.height = `50vh`;

//changed the list
document.getElementsByTagName(`li`)[0].innerHTML = "Funny";
document.getElementsByTagName(`li`)[1].innerHTML = "Smart";
document.getElementsByTagName(`li`)[2].innerHTML = "Very friendly";

//changed the favourite color  and the image
document.getElementsByTagName(`p`)[1].innerText = "Favourite color: blue"
document.getElementsByTagName(`p`)[2].innerText = "";
document.getElementsByClassName(`color`)[1].src = "./images/blue.jpg";

//changed the  spirit animal text and image
document.getElementsByTagName(`p`)[3].innerText = "My spirit animal:";
document.getElementsByTagName(`p`)[4].innerText = "";
document.getElementsByTagName(`p`)[5].innerText = "";
document.getElementsByClassName(`spiritAnimal`)[0].src = "./images/eagle.jpg";

//changed the favourite sport text and image
document.getElementsByClassName(`sportP`)[0].src = "./images/worlds.jpg";
document.getElementsByTagName(`p`)[6].innerText = "Favourite Sport: League of Legends (E-sport)";
document.getElementsByTagName(`p`)[7].innerText = "";
document.getElementsByTagName(`p`)[8].innerText = "";

//changed the favourite fictional character text and the image + styling for the image
document.getElementsByTagName(`p`)[9].innerText = "Favourite fictional character:";
document.getElementsByClassName(`fictionalC`)[0].src = "./images/garen.jpg";
document.getElementsByClassName(`fictionalC`)[0].style.height = `60vh`;
document.getElementsByClassName(`fictionalC`)[0].style.width = `20vw`;

//changed the favourite celebrity text, image and styling
document.getElementsByTagName(`p`)[10].innerText = "Favourite celebrity";
document.getElementsByTagName(`p`)[11].innerText = "";
document.getElementsByClassName(`celebrity`)[0].src = "./images/captain.jpg"
document.getElementsByClassName(`celebrity`)[0].style.height = `60vh`;
document.getElementsByClassName(`celebrity`)[0].style.width = `35vw`;

//changed the background color of the body
document.body.style.backgroundColor = "Black";

//changed all the text color
document.body.style.color = "white";
document.body.style.fontSize = "2vw";

//challenge
let keypresses = [];
document.addEventListener("keydown", e => {
    console.log(keypresses)
    keypresses.push(e.key);
    document.getElementsByClassName(`challengeBoxSolution`)[0].innerHTML = keypresses;
})

const btn = document.createElement(`button`);
document.body.appendChild(btn);
btn.innerHTML = "Reset";
btn.type = "reset";
btn.name = "resetBtn"
btn.style.width = "8vw";
btn.style.height = "6vh";
btn.style.fontSize = "2vw";
btn.style.backgroundColor = "red";
btn.style.color = "white";

btn.onclick = function () {
    document.getElementsByClassName(`challengeBoxSolution`)[0].innerHTML = "";
    keypresses = [];
}
