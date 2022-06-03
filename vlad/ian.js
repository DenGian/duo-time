//body
let color = document.getElementsByTagName('*');
for (let i=0, max = color.length; i<max; i++){
    document.getElementsByTagName('*')[i].style.backgroundColor = 'darkblue';
}
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

 // image
document.getElementsByTagName('img')[0].src='resources/ian.jpg';

// sport
document.getElementsByTagName('h5')[2].innerText = 'Football';
document.getElementsByTagName('img')[3].src='resources/football.png';

// character
document.getElementsByTagName('h5')[3].innerText = 'Stewie';
document.getElementsByTagName('img')[4].src='resources/stewie.gif';

// challenge
let video = document.createElement('iframe');
let challenge  = document.getElementsByClassName('challangebox')[0]

video.src = 'https://player.vimeo.com/video/148751763';
video.title = 'jebaited';
video.style.width = '100%';
video.style.height = '100%';
challenge.appendChild(video)