const select = document.getElementById('filtre');

// Shoes list
const shoes = document.getElementsByClassName('shoes');
let shoesArray = {}

shoes.forEach(shoe => {
    shoePrice = shoe.firstChild.lastChild.nodeName.value
    shoesArray[shoe] = shoePrice
});

select.addEventListener('change', () => {
    let choix = select.value

})

function filterShoes(select) {
    if (select.value === 1) {

    } else if (select.value === 2) {

    }
}