document.getElementById("burger-btn").addEventListener("click", function () {
    document.querySelector(".header__navbar").classList.toggle("open");
});

const clockContainer = document.querySelector('.header__clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleDateString('uk');
}
setInterval(updateClock, 1000);
updateClock();

const headerText = document.querySelector('.header__title');
const greetings = [
    'Hi Team!',
    'Hi Friends!',
    'Hello everybody!',
];
function getRandomEl(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}
headerText.innerText = getRandomEl(greetings);