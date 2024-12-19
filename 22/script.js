function showMessage(){
    console.log("Скрипт загружен!");
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = 'red';
}

function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }

    function logCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        const currentTime = `${hours}:${minutes}:${seconds}`;
        console.log(currentTime);
    } 

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');

    if (utmTerm) {
        h1Element.textContent = utmTerm;
    } else {
        h1Element.textContent = "Ваш текст H1 по умолчанию";
    }
}

showMessage();
resetBackgroundColor();
changeBackgroundColor();
toggleVisibility(content);
logCurrentTime();
updateH1FromUrl();

