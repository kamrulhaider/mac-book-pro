
// total price calculation
function totalPrice() {

    // main price conversion
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceConvert = parseFloat(bestPrice);

    // memory price conversion
    const memoryPrice = document.getElementById('memory-field').innerText;
    const memoryPriceConvert = parseFloat(memoryPrice);

    // storage price conversion
    const storagePrice = document.getElementById('storage-field').innerText;
    const storagePriceConvert = parseFloat(storagePrice);

    // delivery price conversion
    const deliveryPrice = document.getElementById('delivery-field').innerText;
    const deliveryPriceConvert = parseFloat(deliveryPrice);

    // final output
    const finalPrice = bestPriceConvert + memoryPriceConvert + storagePriceConvert + deliveryPriceConvert;
    document.getElementById('total-price').innerText = finalPrice;
    document.getElementById('final-total').innerText = finalPrice;
};

// coupon calculatin
function couponCode() {
    const coupon = document.getElementById('coupon-field');
    if (coupon.value === 'stevekaku') {
        const discount = document.getElementById('total-price').innerText;
        const discountConvert = parseFloat(discount);
        document.getElementById('final-total').innerText = discountConvert - (discountConvert * 0.2);
    }
    coupon.value = '';
};

// click handle by event bubble 
document.getElementById('buttons').addEventListener('click', function (events) {

    // memory button events
    if (events.target.innerText == '8GB unified memory') {
        const memoryField = document.getElementById('memory-field');
        memoryField.innerText = 0;
        totalPrice();
    }
    else if (events.target.innerText == '16GB unified memory') {
        const memoryField = document.getElementById('memory-field');
        memoryField.innerText = 180;
        totalPrice();
    }

    // storage button events
    else if (events.target.innerText == '256GB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 0;
        totalPrice();
    }
    else if (events.target.innerText == '512GB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 100;
        totalPrice();
    }
    else if (events.target.innerText == '1TB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 180;
        totalPrice();
    }

    // delivery button events
    else if (events.target.innerText == 'Friday, Aug 25 FREE Prime delivery') {
        const storageField = document.getElementById('delivery-field');
        storageField.innerText = 0;
        totalPrice();
    }
    else if (events.target.innerText == 'Friday, Aug 21 delivery charge $20') {
        const storageField = document.getElementById('delivery-field');
        storageField.innerText = 20;
        totalPrice();
    }
});