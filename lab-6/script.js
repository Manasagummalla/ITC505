var x = document.lastModified;
document.getElementById('lastModified').textContent = x;

function flipCoin() {
    const resultDiv = document.getElementById('result');
    const outcome = Math.random() < 0.5 ? 'Head' : 'Tail';
    resultDiv.textContent = 'Result: ' + outcome;
}