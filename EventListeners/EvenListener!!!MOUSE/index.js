// eventListener = click, mouseover, mouseout

const myBox = document.getElementById("myBox");

function itsOk(event){
    setTimeout(() => {event.target.style.backgroundColor = "lightgreen";
                      event.target.textContent = "Click Me 😀";
                      touched = false;     
                     }, 3000);
}

let touched = false;
let flag = false;

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😫";
    touched = true;
    itsOk(event);
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Don't do it 😧";
})


myBox.addEventListener("mouseout", event => {
     if (touched === true) {
         window.removeEventListener("mouseout", handleMouseClick);
         touched = false;
     }
     else{
        event.target.style.backgroundColor = "lightgray";
        event.target.textContent = "Uw scared 😒";
        itsOk(event);
    }
})


/// ТАкже можно сделать это все, привязав к какой-либо кнопке эти ивентф:
// myButton.addEventListener("click", event => {
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent = "OUCH! 😫";
//     touched = true;            //но приколы меняем непосредственно
//     itsOk(event);                //в самом div
// });