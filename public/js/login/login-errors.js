function showErr(message) {
    const error = message
    let text
    switch (error) {
        case "Missing credentials":
            text = document.createTextNode("Небыли введены данные.")
            break;
        case "Incorrect password":
            text = document.createTextNode("Некорректный пароль.")
            break;
        case "User with that name does not exist":
            text = document.createTextNode("Пользователь с таким именем не существует")
            break;
        default:
            text = document.createTextNode(error)
            break;
    }
    const node = document.querySelector("div.container-error")
    const elt = document.createElement("p")
    if (text.length != 0) {
        elt.className = "alert"
        elt.appendChild(text)
        node.appendChild(elt)
    }
}