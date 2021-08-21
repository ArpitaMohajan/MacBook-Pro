
// function updateTotal(isIncreasing) {
//     const productInput = document.getElementById('first');
//     let productNumber = productInput.value;
//     if (isIncreasing == true) {
//         productNumber = parseInt(productNumber) + 1;
//     }
//     else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;

//     productInput.value = productNumber;
//     // update case Total(ata h5 tai ata k ami text dibo innerText dibo input hole to .value liktam tai)
//     const caseTotal = document.getElementById(product + '-total');
//     caseTotal.innerText = productNumber * price;
//     // calculate total k call korttesi
//     calculateTotal()
// }
// function getInputValue(product) {
//     const productInput = document.getElementById(product + '-number');
//     // const phoneNumber = phoneInput.value;
//     const productNumber = parseInt(productInput.value);
//     return productNumber
//     // ata return korssi karon aikhne function k call kora hoise tai r jodi ami result nia kaj korttam tokhn return korbbo na
// }
// function calculateTotal() {
//     // const phoneInput = document.getElementById('phone-number');
//     // // const phoneNumber = phoneInput.value;
//     // const phoneNumber = parseInt(phoneInput.value);
//     const phoneTotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 10;
//     const totalPrice = subTotal + tax;
//     // update on html
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total-price').innerText = totalPrice;

// }
// // phone increase decrease events
// document.getElementById('phone-plus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, true)
// })
// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, false)

// })




// // handle case increase decrease event
// document.getElementById('case-plus').addEventListener('click', function () {
//     // const productInput = document.getElementById('case-number');
//     // const productNumber = productInput.value;
//     // productInput.value = parseInt(productNumber) + 1;
//     /* console.log(productNumber); */
//     updateProductNumber('case', 59, true);
// })
// document.getElementById('case-minus').addEventListener('click', function () {
//     // const productInput = document.getElementById('case-number');
//     // const productNumber = productInput.value;
//     updateProductNumber('case', 59, false);

// })

// memory
// updateTotal()
// function updateTotal(memory,store,isIncreasing) {
//     const productInput = document.getElementById('first');

// }
const total = parseInt(document.getElementById('shipping'))
function updateTotal() {
    const memoryTotal = parseInt(memoryField.innerText);
    const storageTotal = parseInt(storageField.innerText);
    const deliveryTotal = parseInt(deliveryField.innerText);
    const grandTotal = memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('shipping').innerText = grandTotal;
    // grandTotal.innerText
    // const tax = grandTotal / 20;
    // const totalPrice = grandTotal + tax;
    // totalPrice.innerText = tax
    // total.innerText = grandTotal;

}
// const memoryTotal

















// function getMain() {
//     const shippingTotal = document.getElementById('shipping');
//     const mainTotal = shippingTotal.innerText;
//     total.innerText = grandTotal + mainTotal;
//     return total.innerText;
// }


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
