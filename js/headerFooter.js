
const header = document.querySelector('.header')
//const footer = document.querySelector('#footer')

window.addEventListener('load', function () {
    header.innerHTML = `
    <div class="titleWrapper">
        <h1 class="myName">Love Erlandsson</h1>
        <p class="myTitle">Game Programmer</p>
    </div>
    <div class="navBar">
        <p class="navText">Home</p>
        <p class="navText">Projects</p>
        <p class="navText">About me</p>
    </div>`
})

