








const menu = document.querySelector("#nav_menu")
menu.addEventListener("click", () => {

    const menuDiv = document.createElement("div")
    menuDiv.classList.add("nav_menu_class")
    document.body.appendChild(menuDiv)

    const fondNoir = document.createElement("div")
    fondNoir.classList.add("fond_noir_class")
    document.body.appendChild(fondNoir)

    const menuDivCross = document.querySelector("#nav_menu_cross")
    menuDivCross.style.display = "initial"

    document.querySelector("#nav_menu_list").style.display = "initial"

    document.querySelector("#nav_menu_list_li").style.display = "initial"
    
    document.querySelector("#nav_menu_list_position").style.display = "flex"


    const menuListDivPosition = document.querySelector("#nav_menu_list_position")
    menuListDivPosition.addEventListener("click", () => {
        document.querySelector("#nav_menu_list_position").style.display = "none"

        document.querySelector("#nav_menu_list_li").style.display = "none"
        document.querySelector("#nav_menu_back").style.display = "flex"

        document.querySelector("#nav_menu_list_li_position").style.display = "initial"
    })

    const navMenuBack = document.querySelector("#nav_menu_back")
    navMenuBack.addEventListener("click", () => {
        document.querySelector("#nav_menu_list_position").style.display = "flex"

        document.querySelector("#nav_menu_list_li").style.display = "initial"
        document.querySelector("#nav_menu_back").style.display = "none"

        document.querySelector("#nav_menu_list_li_position").style.display = "none"
    })


    // closing menu

    menuDivCross.addEventListener("click", () => {
        document.body.style.overflow = "initial"
        menuDivCross.style.display = "none"
        menuDiv.remove()
        fondNoir.remove()
        document.querySelector("#nav_menu_list").style.display = "none"
        document.querySelector("#nav_menu_list_li").style.display = "none"
        document.querySelector("#nav_menu_back").style.display = "none"

        document.querySelector("#nav_menu_list_li_position").style.display = "none"
    })

    fondNoir.addEventListener("click", () => {
        document.body.style.overflow = "initial"
        menuDivCross.style.display = "none"
        menuDiv.remove()
        fondNoir.remove()
        document.querySelector("#nav_menu_list").style.display = "none"
        document.querySelector("#nav_menu_list_li").style.display = "none"
        document.querySelector("#nav_menu_back").style.display = "none"

        document.querySelector("#nav_menu_list_li_position").style.display = "none"
    })
})