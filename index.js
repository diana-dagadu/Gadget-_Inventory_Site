const displayItems = () => {
    let itemCode = "";

    let localStorageProducts = JSON.parse(localStorage.getItem("itemDetails"))
    console.log(localStorageProducts)
    const prod = document.getElementById('products')

    for (let i = 0; i < localStorageProducts.length; i++) {
        console.log(localStorage)

        // itemTD.innerHTML
        itemCode += `
            <tr>
        <td><img src="${localStorageProducts[i].imageURL}"></td>
            <td>${localStorageProducts[i].name}</td>
            <td>${localStorageProducts[i].description}</td>
            <td class="cat">${localStorageProducts[i].category}</td>
            <td class="num"> <div class="red">${localStorageProducts[i].quantity}</div></td>
            <td><div class="iconDiv1"><span class="updateIcon1"><i class="zmdi zmdi-edit"></i></span></div>
                <div class="iconDiv2"><span class="updateIcon2"><i class="zmdi zmdi-delete"></i></span></div></span></td>
                </tr>
    `

    }
    prod.innerHTML = itemCode;
    console.log(pro)

}
displayItems();