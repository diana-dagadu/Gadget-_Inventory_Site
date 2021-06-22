
let msgWrap = document.querySelector('.msgWrap');
let submit_btn = document.querySelector('.submit_btn');

console.log(msgWrap);
// console.log(submit_btn);


const submitHandler = (event) => {
    event.preventDefault()
    msgWrap.classList.add('show')
}


submit_btn.addEventListener('click',submitHandler)