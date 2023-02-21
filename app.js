const billTotal = document.getElementById('total-bill');
const numberSplit = document.getElementById('number-split');
const tipPercentage = document.getElementById('tip-percentage');
const finalSplit = document.querySelector('.final-split');
const tipSplit = document.querySelector('.tip-split');
const grandTotal = document.querySelector('.grand-total');
const submitBtn = document.querySelector('.submit');

function grandTotalBill(billTotal, numberSplit, tipPercentage) {
    let priceShare = (parseFloat(billTotal.value) / parseFloat(numberSplit.value));
    let finalTip = (parseFloat(tipPercentage.value) / 100) * parseFloat(priceShare);
    let gTotal = priceShare + finalTip
    return { gTotal, finalTip, priceShare };
}

function renderChanges({ gTotal, finalTip, priceShare }) {
    finalSplit.textContent = "Your share of the bill is $" + priceShare.toFixed(2);  
    tipSplit.textContent = "Your share of the tip is $" + finalTip.toFixed(2);
    grandTotal.textContent = "Your Grand Total is $" + gTotal.toFixed(2); 
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
    const { gTotal, finalTip, priceShare } = grandTotalBill(billTotal, numberSplit, tipPercentage);
    renderChanges({ gTotal, finalTip, priceShare}); 
})
6