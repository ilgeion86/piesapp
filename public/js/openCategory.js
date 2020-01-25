function openCategory(categoryName) {
    let node = document.querySelector("div.grid-item-6")
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }

    let xhr = new XMLHttpRequest()
    xhr.open('GET', `/products/${categoryName}`, true) // /products/:id
    xhr.responseType = 'json'
    xhr.send(null)
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert("Возникли проблемы с загрузкой данных. Повторите действие позже")
        } else {
            let res = JSON.parse(xhr.response)
            let length = Object.keys(res).length
            for (let i = 0; i < length; i++) {
                const $1_div = document.createElement('div')
                const $2_div = document.createElement('div')
                const $3_div = document.createElement('div')
                $1_div.className = "product border text-center"
                $2_div.className = "p-name"
                let product_name = res[i]["name"]
                let product_price = res[i]["price"]
                $2_div.appendChild(document.createTextNode(product_name))
                $3_div.appendChild(document.createTextNode(product_price))

                $1_div.appendChild($2_div)
                $1_div.appendChild($3_div)

                $1_div.onclick = () => {
                    console.log("clicked")
                    tableFilling(product_name, product_price)
                }
                node.appendChild($1_div)
            }


        }
    }

}

function tableFilling(name, price) {
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
    $4_column.textContent = $input.value * price

    row.appendChild($1_column)
    row.appendChild($2_column)
    row.appendChild($3_column)
    row.appendChild($4_column)
    $order_total_price.textContent = parseFloat($order_total_price.textContent) + parseFloat($4_column.textContent)
    node.insertBefore(row, total_row)
    console.log(name, price)
}

function clickMinus(number) {

}

function clickPlus(number) {

}