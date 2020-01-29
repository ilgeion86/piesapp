/**
 * Element input with className total-amount 
 * is creating in file orderInfoTableFilling.js 
 */


function changeTotalPrices(input, price, productTotalPrice) {
    let oldInputValue = input.value
        /**
         * @todo Must I add a function to remove the event listener
         */
    input.addEventListener("change", function inputChanger() {
        let productCount = input.value
        if (productCount < 1) {
            input.value = 1
            productCount = input.value
            calculateProductCost(productCount, price, productTotalPrice)
            alert("Количество товара в заказа должно быть больше нуля")
        } else {
            calculateProductCost(productCount, price, productTotalPrice)
        }
    })


}

function calculateProductCost(productCount, price, productTotalPrice) {
    let product_cost = productCount * price
    productTotalPrice.textContent = product_cost
    refreshOrderTotalCost()
}

function refreshOrderTotalCost() {
    let node = document.querySelectorAll("table tr.order-row td.total-price")
    let orderTotalCost = document.querySelector("table tr.order-total-row td.order-total-row_total-price")
    orderTotalCost.textContent = 0
    Array.prototype.slice.apply(node).map((elt) => {
        orderTotalCost.textContent =
            parseFloat(elt.textContent) +
            parseFloat(orderTotalCost.textContent)
    })


}