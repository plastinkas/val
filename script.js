
var currentSize = 16;

function moveButton() {
    resizeButton(); 

    var button = document.querySelector('.moving-button');
    
   
    var newX = Math.floor(Math.random() * window.innerWidth);
    var newY = Math.floor(Math.random() * window.innerHeight);
   
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function resizeButton() {
    var button = document.querySelector('.resizing-button');
    
   
    currentSize += 45;
    button.style.fontSize = currentSize + 'px';
}
function moveButton() {
    resizeButton(); 

    var button = document.querySelector('.moving-button');
    
    var newX, newY;
if (window.innerWidth <= 600) {
    // Якщо так, генеруємо координати в межах екрана
    newX = Math.floor(Math.random() * window.innerWidth);
    newY = Math.floor(Math.random() * window.innerHeight);
} else {
    // Якщо ні, генеруємо координати в межах екрана мінус область для мобільних
    newX = Math.floor(Math.random() * (window.innerWidth - 200));
    newY = Math.floor(Math.random() * (window.innerHeight - 200));
}

button.style.left = newX + 'px';
button.style.top = newY + 'px';
}

