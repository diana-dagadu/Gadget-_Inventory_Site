
let toggle = document.querySelector('.toggle');
// console.log(toggle);
function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

toggle.addEventListener('click', toggleMenu)


// Submit form and display success message

const messageHandler = (event) => {
    event.preventDefault()
    msgWrap.classList.add('show')
    setTimeout(() => {
        msgWrap.classList.remove('show');
        setTimeout(() => {
            window.location.href = "/addItem.html";
        }, 500)
    }, 1500)
}

// Adding item script

let addItemBtn = document.querySelector('.submit_btn')
addItemBtn.addEventListener("click", (e) => {
    let name = document.querySelector("#name").value
    let quantity = document.querySelector("#qtyAvailable").value
    let imageURL = document.querySelector("#image").value
    let category = document.querySelector("#category").value
    let description = document.querySelector("#description2").value

    if (name.trim() === '' ||
        imageURL.trim() === '' ||
        category.trim() === '' ||
        description.trim() === '' ||
        quantity.trim() === '' ||
        isNaN(quantity)) {
        alert('Please enter valid values')
    }
    else {
        const itemDetails = {
            name: name,
            quantity: quantity,
            imageURL: imageURL,
            category: category,
            description: description,
            editItemBtnClicked: false
        }
        if (localStorage.getItem('itemDetails')) {
            let productDetailsArray = JSON.parse(localStorage.getItem("itemDetails"));
            productDetailsArray.push(itemDetails);
            localStorage.setItem('itemDetails', JSON.stringify(productDetailsArray));
            messageHandler(e);
            // *****************************************

            
        }
        else {

            let productDetails = [itemDetails]
            console.log(productDetails)
            localStorage.setItem('itemDetails', JSON.stringify(productDetails));
            messageHandler(e);
        }
        // movieStore.push(itemDetails)
        // clearInputs()
    }
    
    
})
let msgWrap = document.querySelector('.msgWrap');
let submit_btn = document.querySelector('.submit_btn');

