const count = document.getElementById("count");
const btn = document.getElementById('btn');
const wait = document.getElementById('wait');

let num = 20;

const interval = setInterval(() => {
    num--;
    count.textContent= num;
    if (num == 0) {
        clearInterval(interval);
        btn.textContent = "Get link";
        btn.classList.add('activated');
        count.remove();
        wait.textContent = 'Click below to get your link !'
    }
}, 1000);