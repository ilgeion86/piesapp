function orderInfoTableFilling(name, price) {
    const productName = document.createTextNode(name)
    const productPrice = document.createTextNode(price)
    let node = document.querySelector("table#t-order-info tbody")
    let total_row = document.querySelector("tr.order-total-row")
    let $order_total_price = document.querySelector("td.order-total-row_total-price")
    let row = document.createElement("tr")
    row.className = "order-row"

    let $1_column = document.createElement("td")
    $1_column.className = "order-column_name"
    $1_column.appendChild(productName)

    let $2_column = document.createElement("td")
    $2_column.className = "order-colimn_count"

    let $1_spanMinus = document.createElement('span')
    $1_spanMinus.textContent = "-1"
    $1_spanMinus.className = "click-minus border"

    let $2_spanPlus = document.createElement('span')
    $2_spanPlus.textContent = "+1"
    $2_spanPlus.className = "click-plus border"

    let $input = document.createElement("input")
    $input.className = "total-amount"
    $input.value = 1

    $2_column.appendChild($1_spanMinus)
    $2_column.appendChild($input)
    $2_column.appendChild($2_spanPlus)

    let $3_column = document.createElement('td')
    $3_column.className = "product-price"
    $3_column.appendChild(productPrice)

    let $4_column = document.createElement("td")
    $4_column.className = "total-price"
    $4_column.textContent = parseInt($input.value) * price

    $5_column = document.createElement('td')
    $5_column.className = "btn-remove"
    $5_column.textContent = "X"


    row.appendChild($1_column)
    row.appendChild($2_column)
    row.appendChild($3_column)
    row.appendChild($4_column)
    row.appendChild($5_column)

    node.insertBefore(row, total_row)
    $order_total_price.textContent =
        parseFloat($order_total_price.textContent) + parseFloat($4_column.textContent)
    removeRowFromOrderInfo($order_total_price)
}

function removeRowFromOrderInfo($order_total_price) {
    let e_btn = document.querySelector(".btn-remove")
    e_btn.className = "e-btn-remove"

    let row = e_btn.parentElement

    const product_total_price = row.querySelector(".total-price")

    let node = row.parentElement

    e_btn.addEventListener("click", function listenerFunc(e) { //Задаем имя функции события слушателя
        e.preventDefault()
        node.removeChild(row) //Удаляем элемент из DOM
        console.log(product_total_price.textContent)
        $order_total_price.textContent =
            parseFloat($order_total_price.textContent) - parseFloat(product_total_price.textContent)
        e_btn.removeEventListener("click", listenerFunc) //Удаляем событие слушателся по имени функции
    })
}