
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

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

    footer.innerHTML = `
    <h2>Contact me</h2>
    <div class="footerContactWrapper">
        <div>
            <div class="flex">
                <p class="contactInfo">Mail:</p>
                <p class="infoText">love.erlandsson@hotmail.com</p>
            </div>
            <div class="flex">
                <p class="contactInfo">Phone:</p>
                <p class="infoText">+46 (0)72 557 07 57</p>
            </div>
        </div>
        <div class="contactLinks">
            <img src="Assets/Icons/square-linkedin-brands-solid.png" class="linkIcon">
            <img src="Assets/Icons/envelope-regular.png" class="linkIcon">
            <img src="Assets/Icons/itch-io-brands-solid.png" class="linkIcon">
        </div>
    </div>`
})

