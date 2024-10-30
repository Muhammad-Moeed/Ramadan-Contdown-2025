function countdown() {
    const targetDate = new Date('Februrary 28, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "Ramadan has started!";
    }
}
const interval = setInterval(countdown, 1000);

const audio = document.getElementById('backgroundAudio');


audio.play().catch((error) => {
  
    console.log('Autoplay failed, waiting for user interaction.');
});


window.addEventListener('click', () => {
    audio.play().catch((error) => {
        console.log('Play failed on user click:', error);
    });
});