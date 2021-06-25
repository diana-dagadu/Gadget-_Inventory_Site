
let storeItems = []
const onLoadMethod = () => {
    if (!localStorage.getItem("itemDetails")) {
        storeItems = [
            {
                name: `Samsung Galaxy Note 9`,
                quantity: 23,
                imageURL: `/images/samsung_note_9_phone.png`,
                category: `Phone`,
                description: `128GB, Lavender Purple - Fully Unlocked (Renewed)`,

            },
            {
                name: `Lenovo Flex 5`,
                quantity: 28,
                imageURL: `/images/lenovo_laptop.png`,
                category: `Laptop`,
                description: `14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500UProcessor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics `,
               
            },
            {
                name: `MARVUE Pad M20 Tablet`,
                quantity: 17,
                imageURL: `/images/marvue_tablet.png`,
                category: `Tablet`,
                description: `10.1 Inch Tablet Android 10 Tablets, 2GB RAM 32GB Storage, 8MP+5MP Dual Camera,
                                    Wi-Fi, Bluetooth, HDMI, FM, GPS, 6000mAh Battery`,
             
            },
            {
                name: `SAMSUNG Galaxy S20 FE`,
                quantity: 0,
                imageURL: `/images/samsungfe_phone.png`,
                category: `Phone`,
                description: `14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500UProcessor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera
                                    30X Space Zoom Night Mode, Cloud Navy`,
             
            },
            {
                name: `Acer Aspire 5 Slim Laptop`,
                quantity: 13,
                imageURL: `/images/Acer_Laptop.png`,
                category: `Laptop`,
                description: `15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB
                                    SSD, Backlit Keyboard, Silver`,
              
            },
            {
                name: `Windows Tablet 10in`,
                quantity: 39,
                imageURL: `/images/windows_tablet.png`,
                category: `Tablet`,
                description: `Ultra Slim Windows 10 Tablet PC - 4GB RAM 64GB Storage, 5MP and 2MP Cameras,
                                    1280x800 IPS HD Display, Black`,

            },
            {
                name: `Apple iPhone 12 Pro Max`,
                quantity: 0,
                imageURL: `/images/iPhone-12-Pro-Max.png`,
                category: `Phone`,
                description: `128GB, Graphite) [Locked] + Carrier Subscription`,

            },
            {
                name: `LG G7 ThinQ`,
                quantity: 9,
                imageURL: `/images/LG_phone.png`,
                category: `Phone`,
                description: `LM-G710TM TMobile 64GB Android Smartphone (Renewed) (Platinum Gray)`,

            },
           
        ]

        localStorage.setItem(`itemDetails`, JSON.stringify(storeItems))
        console.log(storeItems);
    }
}
onLoadMethod()


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
                // console.log(item.quantity)
                // console.log(availableItems.reduce((a,b) => a+b,0))
                let sum = (availableItems.reduce((a, b) => a + b, 0))
                console.log(sum)
                availableItems.push(item.quantity);
            }
        });
        // document.getElementById("itemsInStock").innerText = availableItems.length;
        let sum = (availableItems.reduce((a, b) => a + b, 0))
        console.log(sum)
        document.getElementById("itemsInStock").innerText = sum;
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
