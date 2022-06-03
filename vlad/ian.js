//body
let color = document.getElementsByTagName('*')
for (let i=0, max = color.length; i<max; i++){
    document.getElementsByTagName('*')[i].style.backgroundColor = 'blue'
}
console.log(color);

// change title
document.getElementsByTagName('h1')[0].innerText = 'Ian';

// change list items characteristics
document.getElementsByTagName('li')[2].innerText = 'rich';

for (let i=0; i<3; i++){
    document.getElementsByTagName('li')[i].style.fontSize = '20px';
    document.getElementsByTagName('li')[i].style.color =    'grey';
    document.getElementsByTagName('li')[i].style.fontFamily = 'Comic sans MS , serif';
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
document.getElementsByTagName('img')[0].src='resources/ian.jpg'