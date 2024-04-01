
function generateRandomPassword(){
    const passwordLength = document.getElementById("len").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSimbols = document.getElementById("includeSimbols").checked;
   
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";
    // тут добавляем символы, что разрешил пользователь выбирая чекбоксы
    // тернарный оператор
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSimbols ? symbolsChars : "";

    if(allowedChars.length === 0) { //если не выбрали галочек
        password = "At least 1 set of characters must be selected";
    }
    if (passwordLength <= 0 || passwordLength > 9999) { //если беды с длинной
        password = "Password length must be above 1 and less 9999";
    }

    for(let i = 0; i < passwordLength; i++){    // гадаем рандомный интекс и выбираем его в пароль по символу
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("passwordHolder").innerHTML = password; 
}
