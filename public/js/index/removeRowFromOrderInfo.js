function removeRowFromOrderInfo($order_total_price) {
    let x_btn = document.querySelector(".btn-remove")
    x_btn.className = "x-btn-remove"

    let row = x_btn.parentElement
    const product_total_price = row.querySelector(".total-price")

    let node = row.parentElement

    x_btn.addEventListener("click", function listenerFunc(e) { //Задаем имя функции события слушателя
        e.preventDefault()
        node.removeChild(row) //Удаляем элемент из DOM
        $order_total_price.textContent =
            parseFloat($order_total_price.textContent) - parseFloat(product_total_price.textContent)
        x_btn.removeEventListener("click", listenerFunc) //Удаляем событие слушателся по имени функции
    })
}