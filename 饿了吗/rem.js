function fn() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 15 + 'px'
}
window.onload = fn;

window.onresize = fn;