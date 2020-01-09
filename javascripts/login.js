const data = document.querySelectorAll('form input');
let inputs = Array.prototype.slice.call(data)

inputs.forEach((e) => {

    e.addEventListener('click', () => {
        e.removeAttribute('value')
    })
})