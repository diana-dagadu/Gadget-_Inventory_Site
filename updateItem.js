let updateName = document.getElementById("name")
let updateQty = document.getElementById("qtyAvailable")
let updateImage = document.getElementById("image")
let updateCategory = document.getElementById("category")
let updateDescription = document.getElementById("description2")
let msgWrap = document.querySelector('.msgWrap');


let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"));
let currentlyEdittingItem = {
    name: "",
    quantity: "",
    imageURL: "",
    category: "",
    description: ""
};
localStorageProducts.forEach(item => {
    if (item.editItemBtnClicked) {
        currentlyEdittingItem = item;
    }
})
document.getElementById("name").value = currentlyEdittingItem.name;
document.getElementById("qtyAvailable").value = currentlyEdittingItem.quantity;
document.getElementById("image").value = currentlyEdittingItem.imageURL;
document.getElementById("category").value = currentlyEdittingItem.category;
document.getElementById("description2").value = currentlyEdittingItem.description;

let updateBtn = document.querySelector('#update')

const updateHandler = (e) => {
    currentlyEdittingItem.name =  updateName.value
    currentlyEdittingItem.quantity =  updateQty.value
    currentlyEdittingItem.imageURL = updateImage.value
    currentlyEdittingItem.category = updateCategory.value
    currentlyEdittingItem.description = updateDescription.value
    currentlyEdittingItem.editItemBtnClicked = false;
    
    localStorage.setItem("itemDetails", JSON.stringify(localStorageProducts));
    messageHandler(e)
}

updateBtn.addEventListener('click', (e) => {
    updateHandler(e);
})  


const messageHandler = (event) => {
    event.preventDefault()
    msgWrap.classList.add('show')
    setTimeout(() => {
        msgWrap.classList.remove('show');
        setTimeout(() => {
            window.location.href = "/updateItem.html";
        }, 500)
    }, 1000)
}


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