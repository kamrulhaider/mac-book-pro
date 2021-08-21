
// string conversion function
function convertString(text) {
    const mainText = document.getElementById(text).innerText;
    const convertedText = parseFloat(mainText);
    return convertedText;
};

// total price calculation
function totalPrice(bestprice, memory, storage, delivery) {
    const finalPrice = bestprice + memory + storage + delivery;
    document.getElementById('total-price').innerText = finalPrice;
    document.getElementById('final-total').innerText = finalPrice;
}

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
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }
    else if (events.target.innerText == '16GB unified memory') {
        const memoryField = document.getElementById('memory-field');
        memoryField.innerText = 180;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }

    // storage button events
    else if (events.target.innerText == '256GB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 0;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }
    else if (events.target.innerText == '512GB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 100;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }
    else if (events.target.innerText == '1TB SSD storage') {
        const storageField = document.getElementById('storage-field');
        storageField.innerText = 180;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }

    // delivery button events
    else if (events.target.innerText == 'Friday, Aug 25 FREE Prime delivery') {
        const storageField = document.getElementById('delivery-field');
        storageField.innerText = 0;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }
    else if (events.target.innerText == 'Friday, Aug 21 delivery charge $20') {
        const storageField = document.getElementById('delivery-field');
        storageField.innerText = 20;
        const bestPrice = convertString('best-price');
        const memoryPrice = convertString('memory-field');
        const storagePrice = convertString('storage-field');
        const deliveryPrice = convertString('delivery-field');
        totalPrice(bestPrice, memoryPrice, storagePrice, deliveryPrice);
    }
});