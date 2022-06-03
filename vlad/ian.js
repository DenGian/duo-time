// reset button part 1
let oldPage = document.body.innerHTML;
reset()

//body
let color = document.getElementsByTagName('*');
for (let i=0, max = color.length-2; i<max; i++){
    document.getElementsByTagName('*')[i].style.backgroundColor = 'darkblue';
    document.getElementsByTagName('button')[0].style.backgroundColor = 'darkred'
}
for(let i=0;i<5;i++){
    document.getElementsByClassName('card-title')[i].style.textAlign = 'center'
    document.getElementsByClassName("card mb-3")[i].style.textAlign = 'center'
}
// first try
 /*   if(i !== 73){
        document.getElementsByTagName('*')[i].style.backgroundColor = 'darkblue';
    }
    else{
        document.getElementsByTagName('button')[0].style.backgroundColor = 'red'
    }
}*/
console.log(color);

// change title
document.getElementsByTagName('h1')[0].innerText = 'Ian';

// change list items characteristics
document.getElementsByTagName('p')[2].innerText = 'Helpful';

for (let i=0; i<3; i++){
     document.getElementsByTagName('li')[i].style.color = 'grey';
     document.getElementsByTagName('p')[i].style.fontFamily = 'Comic sans MS , serif';
}
/*
I was stupid here
document.getElementsByTagName('li')[0].style.fontSize = '40px';
document.getElementsByTagName('li')[0].style.color = 'grey';
document.getElementsByTagName('li')[0].style.fontFamily = 'Comic sans MS , serif';
document.getElementsByTagName('li')[1].style.fontSize = '40px';
document.getElementsByTagName('li')[1].style.color = 'grey';
document.getElementsByTagName('li')[1].style.fontFamily = 'Comic sans MS , serif';
document.getElementsByTagName('li')[2].innerText = 'rich';
document.getElementsByTagName('li')[2].style.fontSize = '40px';
document.getElementsByTagName('li')[2].style.color = 'grey';
document.getElementsByTagName('li')[2].style.fontFamily = 'Comic sans MS , serif';
 */

 // profile image
document.getElementsByTagName('img')[0].src='resources/ian.jpg';

// color
let antwerp = document.createElement('p')
antwerp.innerText = 'Rood en wit, de liefde volle kleuren'
document.getElementsByClassName('col-md-4')[0].appendChild(antwerp)
antwerp.style.backgroundColor= 'transparent'
document.getElementsByTagName('img')[1].src='resources/color.png';

// spirit animal
let animal = document.createElement('p')
animal.innerText = 'That much of a spirit animal that I am too lazy to write stuff'
document.getElementsByClassName('col-md-4')[1].appendChild(animal)
animal.style.backgroundColor= 'transparent'

// sport
document.getElementsByTagName('h5')[2].innerText = 'Football';
document.getElementsByTagName('img')[3].src='resources/football.png';
let sport = document.createElement('p')
sport.innerText = 'Look Messi better'
document.getElementsByClassName('col-md-4')[2].appendChild(sport)
sport.style.backgroundColor= 'transparent'

// character
document.getElementsByTagName('h5')[3].innerText = 'Stewie';
document.getElementsByTagName('img')[4].src='resources/stewie.gif';
let character = document.createElement('p')
/*character.innerText = 'no inspiration'
document.getElementsByClassName('col-md-4')[3].appendChild(character)
character.style.backgroundColor= 'transparent'*/

// challenge
let video = document.createElement('iframe');
let challenge  = document.getElementsByClassName('challangebox')[0]

video.src = 'https://player.vimeo.com/video/148751763';
video.title = 'jebaited';
video.style.width = '100%';
video.style.height = '100%';
challenge.appendChild(video)

// reset part 2
let newPage = document.body.innerHTML
let old = false

function reset (){
    let button = document.createElement('button')
    document.body.appendChild(button)
    button.innerText = 'Other Page'
    button.style.position = 'fixed'
    button.style.width = 'auto'
    button.style.height = 'auto'
    button.style.borderRadius = '45px'
    button.style.right = '30px'
    button.style.top = '40px'
    button.style.backgroundColor = 'darkred'
    button.addEventListener('click', ()=>{
        if (old === false){
            document.body.innerHTML= newPage
        }
        else {
            document.body.innerHTML = oldPage
            document.body.removeAttribute('style')
        }
        old=!old
        reset()
    })
}