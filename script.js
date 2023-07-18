let header = document.querySelector("header")
let link_s = document.querySelectorAll("header a")
let top_button = document.getElementById("top")
let logo = document.getElementById("logo")
let dialog = logo.firstElementChild;
let pageTitle = document.querySelector(".wrapper").firstElementChild
let hidden_div = document.querySelector(".hidden_div")
let exercises = document.querySelectorAll(".exercise")
let close_btn = document.querySelector(".close_btn")


window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "white"
        header.style.borderBottomColor = "black"
        for (const link of link_s) {
            link.style.color = "black"
        }

    } else {
        header.style.backgroundColor = "transparent"
        header.style.borderBottomColor = "transparent"
        for (const link of link_s) {
            link.style.color = "whitesmoke"
        }
    }
}

top_button.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

pageTitle.onclick = function () {
    hidden_div.hidden = false
}


close_btn.onclick = function () {
    hidden_div.hidden = true
}


exercises[0].onclick = function () {
    alert("Розробник: Бабіч Михайло ІС-12")
}
exercises[1].onclick = function () {
    FuncString()
}
exercises[2].onclick = function () {
    logo.lastElementChild.innerHTML = prompt("Ви можете змінити текст логотипу цього сайту", "MouseMasters")
}
exercises[3].onclick = function () {
    FuncOuter()
}
exercises[4].onclick = function () {
    ChangeColor()
}
exercises[5].onclick = function () {
    alert(`Текст логотипу: "${logo.lastElementChild.firstChild.nodeValue}"`)
}
exercises[6].onclick = function () {
    NewElement()
}
exercises[7].onclick = function () {
    DeleteElemnts()
}

if (pageTitle.textContent == "MouseMasters") {
    pageTitle.classList.add("home");
} else if (pageTitle.textContent == "Razer") {
    pageTitle.classList.add("razer");
} else if (pageTitle.textContent == "Logitech") {
    pageTitle.classList.add("logitech");
} else if (pageTitle.textContent == "Xtrfy") {
    pageTitle.classList.add("xtrfy");
}

function FuncString() {
    let f_string = prompt("Введіть перший рядок для порівняння");
    let s_string = prompt("Введіть другий рядок для порівняння");
    if (f_string > s_string) {
        alert(`Перший рядок "${f_string}" більше за другий "${s_string}"`)
    } else if (f_string < s_string) {
        alert(`Перший рядок "${f_string}" менше за другий "${s_string}"`)
    } else {
        alert(`Перший рядок "${f_string}" дорівнює другому "${s_string}"`)
    }
}

function FuncOuter() {
    let selector = prompt("Напишіть селектор CSS елемента, якого ви хочите подивитися код");
    let variables = document.querySelectorAll(selector);
    for (let variable of variables) {
        alert(variable.outerHTML);
    }
}
function ChangeColor() {
    document.body.style.backgroundColor = "yellow";
    setTimeout(() => document.body.style.background = "", 3000);
}
function NewElement() {
    let new_element = document.createElement('p');
    new_element.innerHTML = "Новий елемент"
    hidden_div.firstElementChild.firstElementChild.prepend(new_element)
}

function  DeleteElemnts(){
    let new_elements = document.querySelectorAll(".hidden_div_body div p")
    for (const element of new_elements) {
        element.remove()
    }
}