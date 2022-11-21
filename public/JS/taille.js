let prix = document.getElementById('price');
const select = document.getElementById('taille');

function changePrice(prix, select) {
    let prixInt = parseInt(prix.innerHTML);

    if (select.value == 1) {
        prixInt += 0;
    } else if (select.value == 2) {
        prixInt += 15;
    } else if (select.value == 3) {
        prixInt += 30;
    } else if (select.value == 4) {
        prixInt += 45;
    } else if (select.value == 5) {
        prixInt += 60;
    } else if (select.value == 6) {
        prixInt += 75;
    } else if (select.value == 7) {
        prixInt += 90;
    } else if (select.value == 8) {
        prixInt += 105;
    } else {
        prixInt += 0;
    }

    prix.innerHTML = prixInt;
}

select.addEventListener('change', changePrice(prix, select));