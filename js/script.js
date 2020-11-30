const nav = document.querySelector("nav");
const toggle = document.querySelector("#nav-toggle");

const toggleDisplay =  (element) => {
    if (element.style.display.match("block")) {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

toggle.onclick = () => toggleDisplay(nav);

