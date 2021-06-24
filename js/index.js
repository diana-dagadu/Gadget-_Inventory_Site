const colorHandler = (quantity) => {

    switch (true) {
        case (quantity == 0):
            return "red";
        case (0 < quantity && quantity < 21):
            return "orange";
        case (quantity > 20):
            return "green";
        default:
            return "green";
    }

    
}
const editItem = (index) => {
    console.log(index)
    let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"));
    localStorageProducts[index].editItemBtnClicked = true;
    localStorage.setItem("itemDetails", JSON.stringify(localStorageProducts));
}
const displayItems = () => {
    let itemCode = "";

    let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"))
    // console.log(localStorageProducts)
    const prod = document.getElementById('products')


    if (localStorageProducts) {
        for (let i = 0; i < localStorageProducts.length; i++) {
            // console.log(i)

            // itemTD.innerHTML
            itemCode += `
            <tr class="dede">
        <td><img src="${localStorageProducts[i].imageURL}"></td>
            <td>${localStorageProducts[i].name}</td>
            <td>${localStorageProducts[i].description}</td>
            <td class="cat">${localStorageProducts[i].category}</td>
            <td class="num"> <div class=${colorHandler(localStorageProducts[i].quantity)}>${localStorageProducts[i].quantity}</div></td>
            <td><a onclick="editItem(${i});" href="../html/updateItem.html"><div class="iconDiv1"><span class="updateIcon1"><i class="zmdi zmdi-edit"></i></span></div></a>
                <div onclick="deleteItemHandler(${i})" class="iconDiv2"><span class="updateIcon2"><i class="zmdi zmdi-delete"></i></span></div></span></td>
                </tr>
    `

        }
        prod.innerHTML = itemCode;
    }

    

}
displayItems();

const updateItem = () => {
    let noi = document.getElementById('noi');
    let numberOfItems = localStorage.getItem("itemDetails") ? (JSON.parse(localStorage.getItem("itemDetails")).length) : 0;
    noi.innerText = numberOfItems > 0 ? numberOfItems : '0';
    // if (localStorage.getItem("itemDetails")) {
    //     noi.innerText = (JSON.parse(localStorage.getItem("itemDetails"))).length;
    // }
    // else noi.innerText = '0';
}

const countOutOfStock = () => {
    let items = JSON.parse(localStorage.getItem("itemDetails"));
    let availableItems = [];
    if (items) {
        items.forEach(item => {
            if (parseInt(item.quantity) > 0) {
                availableItems.push(item);
            }
        });
        document.getElementById("itemsInStock").innerText = availableItems.length;
    }
    else {
        document.getElementById("itemsInStock").innerText = '0';
    }

}


let deleteIcons = document.querySelectorAll('.iconDiv2')
// console.log(deleteIcons);

let modal = document.querySelector("#delete-modal")
let backdrop = document.querySelector("#backdrop")
let cancelBtn = modal.querySelector(".btn1--passive")
let delBtn = modal.querySelector(".btn1--danger")

let clickedItemIndex

const deleteItemHandler = (index) => {
   
    clickedItemIndex = index
}


const deleteHandler = (index) => {
    let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"))
    // console.log(localStorageProducts);
    localStorageProducts.splice(index, 1);
    localStorage.setItem('itemDetails', JSON.stringify(localStorageProducts));
    displayItems();
    updateItem();
    countOutOfStock();
    window.location.href = "../index.html";


}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible")
    modal.classList.add("visible")
}

const hideBackdrop = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")
    // deleteHandler(clickedItemIndex)
    // console.log(clickedItemIndex);
}
const hideBackdrop2 = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")
    deleteHandler(clickedItemIndex)
    // console.log(clickedItemIndex);
}

cancelBtn.addEventListener("click", hideBackdrop)
delBtn.addEventListener("click", hideBackdrop2)
backdrop.addEventListener("click", hideBackdrop)

for(let deleteIcon of deleteIcons) {
    deleteIcon.addEventListener("click", toggleBackdrop)
    
}
// ToggleHandler

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

updateItem();
countOutOfStock();
