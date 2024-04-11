const panels = document.querySelectorAll('.panel')
function openToggle() {
    panels.forEach(element => {
        element.classList.remove("open");
    });
    this.classList.toggle('open')
}
function openActiveToggle() {
    panels.forEach(element => {
        if (element.classList.contains("open")){
            element.classList.add("open-active")
        }
})
}
panels.forEach(panel => panel.addEventListener("click", openToggle))
panels.forEach(panel=>panel.addEventListener("transitionend", openActiveToggle))


const copyrightsDiv = document.createElement("div")
copyrightsDiv.innerHTML +=   '<div class="copyrights">Made by <a href="https://github.com/Khaled-Youssef/" target=\"_blank\"><img src="images/joe-dl-logo-w.png" alt="Khaled Youssef" srcset=""></a></div>'
document.querySelector('body').appendChild(copyrightsDiv, 'beforeend')