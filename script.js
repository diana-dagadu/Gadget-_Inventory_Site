
let toggle = document.querySelector('.toggle');

function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

toggle.addEventListener('click',toggleMenu)