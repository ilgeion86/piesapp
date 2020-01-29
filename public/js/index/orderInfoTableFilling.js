function orderInfoTableFilling(name, price) {
    const productName = document.createTextNode(name)
    const productPrice = document.createTextNode(price)
    let node = document.querySelector("table#t-order-info tbody")
    let total_row = document.querySelector("tr.order-total-row")
    let $order_total_cost = document.querySelector("td.order-total-row_total-price")
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
        //Calculation of default price for one unit of product
    $4_column.textContent = parseInt($input.value) * price

    //Add button for remove row
    $5_column = document.createElement('td')
    $5_column.className = "btn-remove"
    $5_column.textContent = "X"

    //Filling row by data
    row.appendChild($1_column)
    row.appendChild($2_column)
    row.appendChild($3_column)
    row.appendChild($4_column)
    row.appendChild($5_column)

    //Inserting of row into the order info table
    node.insertBefore(row, total_row)

    //Recalculate order total price value
    $order_total_cost.textContent =
        parseFloat($order_total_cost.textContent) +
        parseFloat($4_column.textContent)

    //After that a row was added in table, use onchange() for input.total-amount
    changeTotalPrices($input, price, $4_column)

    //Event handing for a button remove of a row (click event)
    removeRowFromOrderInfo($order_total_cost)
}