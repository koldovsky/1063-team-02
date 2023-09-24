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

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const targetDate = new Date('2023-10-01T00:00:00Z');
    const difference = targetDate - now;
    if (difference <= 0) {
        countdownElement.innerText = 'Час минув!';
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        countdownElement.innerText = `Дні: ${days}, Години: ${hours}, Хвилини: ${minutes}, Секунди: ${seconds}`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();
