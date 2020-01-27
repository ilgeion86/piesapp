function removeRowFromOrderInfo($order_total_price) {
    let e_btn = document.querySelector(".btn-remove")
    e_btn.className = "e-btn-remove"

    let row = e_btn.parentElement

    const product_total_price = row.querySelector(".total-price")

    let node = row.parentElement

    e_btn.addEventListener("click", function listenerFunc(e) { //Задаем имя функции события слушателя
        e.preventDefault()
        node.removeChild(row) //Удаляем элемент из DOM
        $order_total_price.textContent =
            parseFloat($order_total_price.textContent) - parseFloat(product_total_price.textContent)
        e_btn.removeEventListener("click", listenerFunc) //Удаляем событие слушателся по имени функции
    })
}