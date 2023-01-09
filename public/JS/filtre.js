const select = document.getElementById('filtre');

// Shoes list
const shoes = document.getElementsByClassName('shoes');
let shoesArray = []

for (let i = 0; i < shoes.length; i++) {
    shoe = shoes[i]

    shoePrice = shoe.firstElementChild.lastElementChild
    shoePrice = shoePrice.innerHTML
    shoePrice = shoePrice.slice(0, shoePrice.indexOf(" "))
    shoesArray.push({
        shoeId: shoe,
        shoePrice: shoePrice
    })
}

select.addEventListener('change', () => {
    let choix = select.value

    newShoesArray = shoesArray;
    newShoesArray = filterShoes(choix, newShoesArray)

    replaceShoes(newShoesArray)
})

function filterShoes(choixUser, newShoesArray) {
    if (choixUser == "1") {
        return newShoesArray.sort((a, b) => {
            // aPrice = Object.keys(a);
            // bPrice = Object.keys(b);
            return a.shoePrice - b.shoePrice;
        })
    } else if (choixUser == "2") {
        return newShoesArray.sort((a, b) => {
            // aPrice = Object.keys(a);
            // bPrice = Object.keys(b);
            return b.shoePrice - a.shoePrice;
        })
    }
}

function replaceShoes(newOrdenedList) {
    i = 0
    newOrdenedList.forEach((shoeObj) => {
        shoeHtmlName = shoeObj.shoeId
        shoeHtmlName.style.order = i;
        i++
    })
}