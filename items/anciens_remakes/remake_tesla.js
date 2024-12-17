

// let actual_scroll = window.pageYOffset

// window.addEventListener("scroll", () => {
//     console.log(actual_scroll)
// })





// MENU
const menu = document.querySelector("#nav_menu")
menu.addEventListener("click", () => {
    document.body.style.overflow = "hidden"

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






    // pageUp

document.getElementById("pageUp").addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


    // first page scroll down

document.getElementById("first_page_scroll_svg").addEventListener("click", () => {
    document.getElementById("tesla_modely").scrollIntoView({
        behavior: 'smooth'
      });
})


    // scroll to top

window.addEventListener("scroll", () => {

    actual_scroll = window.pageYOffset

    if (actual_scroll > 200) {
        document.getElementById("top_page_scroll_svg").style.display = "initial"
    }
    else {
        document.getElementById("top_page_scroll_svg").style.display = "none"
    }
})

document.getElementById("top_page_scroll_svg").addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})




    // models performances

const model3_perf = document.getElementById("model3_perf")
model3_perf.addEventListener("click", () => {
    model3_perf.style.display = "none"

    const model3_perf_list = document.createElement("div")
    model3_perf_list.classList.add("model3_perf_list_class")
    document.body.appendChild(model3_perf_list)

    const model3_perf_text_line1 = document.createElement("p")
    model3_perf_text_line1.classList.add("all_model_perf_text_line1_class")
    model3_perf_text_line1.textContent = "Autonomy : 491 km"
    model3_perf_list.appendChild(model3_perf_text_line1)

    const model3_perf_text_line2 = document.createElement("p")
    model3_perf_text_line2.classList.add("all_model_perf_text_line2_class")
    model3_perf_text_line2.textContent = "0 à 100 km/h : 6,1s"
    model3_perf_list.appendChild(model3_perf_text_line2)

    const model3_perf_close = document.getElementById("tesla_model3")
    model3_perf_close.addEventListener("click", () => {
        model3_perf_list.remove()
        model3_perf.style.display = "flex"
    })
})

const modely_perf = document.getElementById("modely_perf")
modely_perf.addEventListener("click", () => {
    modely_perf.style.display = "none"

    const modely_perf_list = document.createElement("div")
    modely_perf_list.classList.add("modely_perf_list_class")
    document.body.appendChild(modely_perf_list)

    const modely_perf_text_line1 = document.createElement("p")
    modely_perf_text_line1.classList.add("all_model_perf_text_line1_class")
    modely_perf_text_line1.textContent = "Autonomy : 430 km"
    modely_perf_list.appendChild(modely_perf_text_line1)

    const modely_perf_text_line2 = document.createElement("p")
    modely_perf_text_line2.classList.add("all_model_perf_text_line2_class")
    modely_perf_text_line2.textContent = "0 à 100 km/h : 5,0s"
    modely_perf_list.appendChild(modely_perf_text_line2)

    const modely_perf_close = document.getElementById("tesla_modely")
    modely_perf_close.addEventListener("click", () => {
        modely_perf_list.remove()
        modely_perf.style.display = "flex"
    })
})

const models_perf = document.getElementById("models_perf")
models_perf.addEventListener("click", () => {
    models_perf.style.display = "none"

    const models_perf_list = document.createElement("div")
    models_perf_list.classList.add("models_perf_list_class")
    document.body.appendChild(models_perf_list)

    const models_perf_text_line1 = document.createElement("p")
    models_perf_text_line1.classList.add("all_model_perf_text_line1_class")
    models_perf_text_line1.textContent = "Autonomy : 604 km"
    models_perf_list.appendChild(models_perf_text_line1)

    const models_perf_text_line2 = document.createElement("p")
    models_perf_text_line2.classList.add("all_model_perf_text_line2_class")
    models_perf_text_line2.textContent = "0 à 100 km/h : 3,2s"
    models_perf_list.appendChild(models_perf_text_line2)

    const models_perf_close = document.getElementById("tesla_models")
    models_perf_close.addEventListener("click", () => {
        models_perf_list.remove()
        models_perf.style.display = "flex"
    })
})

const modelx_perf = document.getElementById("modelx_perf")
modelx_perf.addEventListener("click", () => {
    modelx_perf.style.display = "none"

    const modelx_perf_list = document.createElement("div")
    modelx_perf_list.classList.add("modelx_perf_list_class")
    document.body.appendChild(modelx_perf_list)

    const modelx_perf_text_line1 = document.createElement("p")
    modelx_perf_text_line1.classList.add("all_model_perf_text_line1_class")
    modelx_perf_text_line1.textContent = "Autonomy : 534 km"
    modelx_perf_list.appendChild(modelx_perf_text_line1)

    const modelx_perf_text_line2 = document.createElement("p")
    modelx_perf_text_line2.classList.add("all_model_perf_text_line2_class")
    modelx_perf_text_line2.textContent = "0 à 100 km/h : 3,9s"
    modelx_perf_list.appendChild(modelx_perf_text_line2)

    const modelx_perf_close = document.getElementById("tesla_modelx")
    modelx_perf_close.addEventListener("click", () => {
        modelx_perf_list.remove()
        modelx_perf.style.display = "flex"
    })
})