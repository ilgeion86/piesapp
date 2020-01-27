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
                    orderInfoTableFilling(product_name, product_price)
                }
                node.appendChild($1_div)
            }


        }
    }

}


function clickMinus(number) {

}

function clickPlus(number) {

}