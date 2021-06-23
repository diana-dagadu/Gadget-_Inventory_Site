let updateName = document.getElementById("name")
let updateQty = document.getElementById("qtyAvailable")
let updateImage = document.getElementById("image")
let updateCategory = document.getElementById("category")
let updateDescription = document.getElementById("description2")


let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"));
let currentlyEdittingItem;
localStorageProducts.forEach(item => {
    console.log(item.editItemBtnClicked)
    if (item.editItemBtnClicked) {
        currentlyEdittingItem = item;
    }
})
console.log(currentlyEdittingItem);
document.getElementById("name").value = currentlyEdittingItem.name;
document.getElementById("qtyAvailable").value = currentlyEdittingItem.quantity;
document.getElementById("image").value = currentlyEdittingItem.imageURL;
document.getElementById("category").value = currentlyEdittingItem.category;
document.getElementById("description2").value = currentlyEdittingItem.description;

let updateBtn = document.querySelector('submit_btn')

const updateHandler = () => {
    updateName.value
    updateQuantity.value
    updateCategory.value
    updateImage.value
    updateDescription.value
}

updateBtn.addEventListener('click', updateHandler )