const sum = {
    summation: () => {
    const elements = document.getElementsByClassName("item-price");

    let prices = []
    for (let i=0; i < elements.length; i++) {
        if (elements[i].innerText > 0)
            prices.push(elements[i].innerText)
    }

    let amount = 0;
    for (let element of prices) {
        let price = parseFloat(element)
        amount += price;
    }

    document.getElementById("total-cart").innerHTML = amount.toFixed(2);
    }
}
  
document.addEventListener("DOMContentLoaded", sum.summation);