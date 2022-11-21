let prix = document.getElementById('price');
const prixIH = document.getElementById('price').textContent;
const select = document.getElementById('taille');
const basicSelectValue = parseInt(prix.innerHTML);

function changePrice() {
    let prixInt = parseInt(prixIH);
    const selectV = document.getElementById('taille').value;

    if (selectV == 1) {
        prixInt = basicSelectValue;
    } else if (selectV == 2) {
        prixInt = (basicSelectValue + 15);
    } else if (selectV == 3) {
        prixInt = (basicSelectValue + 30);
    } else if (selectV == 4) {
        prixInt = (basicSelectValue + 45);
    } else if (selectV == 5) {
        prixInt = (basicSelectValue + 60);
    } else if (selectV == 6) {
        prixInt = (basicSelectValue + 75);
    } else if (selectV == 7) {
        prixInt = (basicSelectValue + 90);
    } else if (selectV == 8) {
        prixInt = (basicSelectValue + 105);
    } else {
        prixInt = basicSelectValue;
    }

    document.getElementById('price').textContent = prixInt;
}

select.addEventListener('change', () => changePrice());