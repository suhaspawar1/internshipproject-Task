let screen = document.getElementById('screen');

function clearScreen() {
    screen.innerText = '0';
}

function deleteLast() {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1);
    } else {
        screen.innerText = '0';
    }
}

function appendValue(value) {
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = 'Error';
    }
}