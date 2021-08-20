// fuction for configure product
function productConfigure(outputId,value){
    const cost = document.getElementById(outputId);
    cost.innerText = value;
}

// function for all the cost and charge total price calcultion
function calculateTotal(){
   let bestPrice = document.getElementById('best-price').innerText;
   let memoryCost = document.getElementById('memory-cost').innerText;
   let storageCost = document.getElementById('storage-cost').innerText;
   let deliveryCharge = document.getElementById('delivery-charge').innerText;
   bestPrice = parseFloat(bestPrice);
   memoryCost = parseFloat(memoryCost);
   storageCost = parseFloat(storageCost);
   deliveryCharge = parseFloat(deliveryCharge);
   const total = bestPrice + memoryCost + storageCost + deliveryCharge;
   document.getElementById('total-price').innerText = total;
   document.getElementById('total').innerText = total;
}

// add event handler to 8GB memory button
document.getElementById('memory-8gb').addEventListener('click', function(){
    productConfigure('memory-cost',0);
    calculateTotal();
})


// add event handler to 16GB memory button
document.getElementById('memory-16gb').addEventListener('click', function(){
    productConfigure('memory-cost',180);
    calculateTotal();
})


// add event handler to 256GB storage button
document.getElementById('ssd-256gb').addEventListener('click', function(){
    productConfigure('storage-cost',0);
    calculateTotal();
})

// add event handler to 512GB storage button
document.getElementById('ssd-512gb').addEventListener('click', function(){
    productConfigure('storage-cost',100);
    calculateTotal();
})

// add event handler to 1TB storage button
document.getElementById('ssd-1tb').addEventListener('click', function(){
    productConfigure('storage-cost',180);
    calculateTotal();
})

// add event handler to free delivery button
document.getElementById('aug-25').addEventListener('click', function(){
    productConfigure('delivery-charge',0);
    calculateTotal();
})

// add event handler to $20 charge delivery button
document.getElementById('aug-21').addEventListener('click', function(){
    productConfigure('delivery-charge',20);
    calculateTotal();
})


// add promo code 
document.getElementById('promo-btn').addEventListener('click', function(){
    let promo = document.getElementById('promo-input');
    let price = document.getElementById('total');
    let priceAmount = parseFloat(total.innerText);
    if(promo.value.toLowerCase() == 'stevekaku'){
        let discount  = (priceAmount / 100) * 20;
        let priceAfterDiscount = priceAmount - discount;
        price.innerText = priceAfterDiscount.toFixed(2);
        promo.value = '';
        promo.setAttribute('disabled', true);
        document.getElementById('promo-btn').setAttribute('disabled', true);
    }
    else{
        promo.value = "Code Dosn't Match";
    }
})
