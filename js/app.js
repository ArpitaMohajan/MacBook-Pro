function updateTotal() {
    const memoryTotal = parseFloat(memoryField.innerText);
    const storageTotal = parseFloat(storageField.innerText);
    const deliveryTotal = parseFloat(deliveryField.innerText);
    const grandTotal = memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('shipping').innerText = grandTotal + 1299;
    document.getElementById('shipping8').innerText = grandTotal + 1299;

}

// document.getElementById('shipping').innerText =
// grandTotal.innerText
// const tax = grandTotal / 20;
// const totalPrice = grandTotal + tax;
// totalPrice.innerText = tax
// total.innerText = grandTotal;

//


const memoryField = document.getElementById('shipping2')
const first = document.getElementById('first');
const last = document.getElementById('last')
first.addEventListener("click", function () {
    memoryField.innerText = "0";
    updateTotal();
})
last.addEventListener("click", function () {
    memoryField.innerText = "180";
    updateTotal();
})
// storage
const storageField = document.getElementById('shipping3')
const third = document.getElementById('third');
const design = document.getElementById('design');
const fourth = document.getElementById('fourth')
third.addEventListener("click", function () {
    storageField.innerText = "0";
    updateTotal();
})
design.addEventListener("click", function () {
    storageField.innerText = "100";
    updateTotal();
})
fourth.addEventListener("click", function () {
    storageField.innerText = "180";
    updateTotal();
})
// updateTotal()
const deliveryField = document.getElementById('shipping4')
const fifth = document.getElementById('fifth');

const sixth = document.getElementById('sixth')
fifth.addEventListener("click", function () {
    deliveryField.innerText = "0";
    updateTotal();
})

sixth.addEventListener("click", function () {
    deliveryField.innerText = "20";
    updateTotal();
})

// document.getElementById('shipping').addEventListener('click', function () {
//     const promoField = document.getElementById('promo');
//     const promoOffer = promoField.nodeValue;
//     if (promoOffer == 'stevekaku') {
//         input.disabled
//     }
// })
