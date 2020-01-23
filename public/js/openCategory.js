function openCategory(categoryName) {
    let node = document.querySelector("div.grid-item-6")
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
    switch (categoryName) {
        case 1:
            let xhr = new XMLHttpRequest()
            xhr.open('GET', "/products", true) // /products/:id
            xhr.responseType = 'json'
            xhr.send(null)
            xhr.onload = () => {
                if (xhr.status != 200) {
                    alert("Problems with loading products")
                } else {
                    let res = JSON.parse(xhr.response)
                    let length = Object.keys(res).length
                    for (let i = 0; i < length; i++) {
                        const _div = document.createElement('div')
                        _div.className = "product border text-center"
                        _div.appendChild(document.createTextNode(res[i]["name"] + "TEST"))
                        node.appendChild(_div)
                    }


                }
            }



            break
        case 2:
            console.log(2)
            break
        case 3:
            console.log(3)
            break
        case 4:
            console.log(4)
            break
        case 5:
            console.log(5)
            break
        case 6:
            console.log(6)
            break
        default:
            console.log(7)
            break
    }
}