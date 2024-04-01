// eventListener = events: keydown, keyup, keypress(not all bw)
// document.addEventListener(event, callback)
// keydown - ловит нажатие любой клавиши
// там в его пропертис есть описание какая

const myBox = document.getElementById("myBox");


const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
    myBox.textContent = "✨";
    myBox.style.backgroundColor = "white";
});

document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`);
    myBox.textContent = "🎈";
    myBox.style.backgroundColor = "hsla(161, 49%, 78%, 0.767)";
});

document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch (event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    } 
});

