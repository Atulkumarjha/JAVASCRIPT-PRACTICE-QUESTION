//CREATE A BUTTON WITHOUT USING BUILD IN BUTTON TAG
let container=document.getElementById('container');
let button = document.createElement('button');
button.textContent = 'Click Me';
container.appendChild(button);
