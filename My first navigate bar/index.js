const togleBtn = document.querySelector(".toggle_btn");
const togleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

// Заставляем открывашку работать
togleBtn.addEventListener("click", event => {
    // Само открывание
    dropdownMenu.classList.toggle('open');
    // меняем иконку
    const isOpen = dropdownMenu.classList.contains('open');
    togleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
// иконки брались отсюда
// https://fontawesome.com/icons/xmark?f=classic&s=solid