let toogle_menu = document.querySelector(".grid-item__open-menu")
let grid_navigation_menu = document.querySelector(".grid-item_navigation-menu")
let grid_nav = document.querySelector(".grid-navigation")
console.log(toogle_menu)
window.addEventListener("resize", () => {
    if (window.screen.width >= 480) {
        toogle_menu.className = "grid-item__open-menu unactive"
        grid_navigation_menu.style = "display:inline"
    }
})
toogle_menu.addEventListener("click", () => {
    let attributes = toogle_menu.getAttribute("class").split(" ")
    attributes.find((e, i, attributes) => {
        if (e === "unactive") {
            toogle_menu.className = "grid-item__open-menu active"
            grid_navigation_menu.style = "display:inline"

        } else if (e === "active") {
            toogle_menu.className = "grid-item__open-menu unactive"
            grid_navigation_menu.style = "display:none"
        }
    })
})