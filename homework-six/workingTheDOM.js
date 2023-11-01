document.getElementById('title').textContent = "DOM Manipulation";

document.getElementById('container').style.backgroundColor = "lightblue";

var ul = document.querySelector('ul');
ul.innerHTML += '<li>Item 7</li>';

var item1 = document.querySelector('ul li:first-child');
item1.style.color = 'crimson';

var item3 = document.querySelector('ul li:nth-child(3)');
item3.style.backgroundColor = 'pink';

var item5 = document.querySelector('ul li:nth-child(5)');
item5.style.backgroundColor = 'yellow';

var item7 = document.querySelector('ul li:nth-child(7)');
item7.style.backgroundColor = 'lightGray';
item7.style.color = 'royalBlue';

var ul = document.querySelector('ul');
ul.innerHTML += '<li>Lucas</li>';

var item4 = document.querySelector('ul li:nth-child(4)');
item4.remove();

var button = document.getElementById('btn');
var italicElement = document.createElement('i');
italicElement.textContent = 'Click Me';
btn.style.backgroundColor = 'rebeccapurple';
btn.style.color = 'white';
btn.style.border = '5px solid white';
btn.textContent = '';
btn.appendChild(italicElement);
