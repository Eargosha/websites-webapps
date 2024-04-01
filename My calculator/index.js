// CaLcUlAtOr

const display = document.getElementById("display");

function appndToDisplay(input) {
    // if (display.value.length > 4){
    //     display.value += '\n' + input;
    // }
    // else{ хуйня, что должна была переносить дисплей на новую сттроку, но я проебался с
    //       тем, что сделал input, а менять его не хочется, так как весь код написан на .value...
        display.value += input;
    //}
}

function clearDisplay(){

    display.value = "";
}

function calculate(){
    try{
//         const found0 = display.value.indexOf("0");

//         let foundDiv = display.value.indexOf("0")-1;
// /*Ебаная ссанина, не знаю как сделать оптимизированней проверку деления на 0*/
//         if(found0 - foundDiv == 1 && found0 != 0){
//             throw new Error("You can't divide by zero!");
//         }
        display.value = eval(display.value);

    } /*ловит и просто ошибку, если eval() не может скушать правильно выражение*/
    catch(error){
        display.value = "error";
    }
}

function clearElementOnDisplay(){
    display.value = display.value.replace(display.value.charAt(display.value.length-1), "");

    // try{
    //    display.value.charAt(display.value,length()) = "";
    // }
    // catch{
    //     display.value = "enter value";
    // }
}