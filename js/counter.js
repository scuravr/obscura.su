async function updateCounter() {
    try {
        const response = await fetch('php/counter.php');
        const data = await response.json();
        displayCounter(data.count);
    } catch (error) {
        console.error('Error fetching counter:', error);
    }
}

function displayCounter(count) {
    const counterElement = document.getElementById('counter');
    counterElement.innerHTML = '';

    // カウンターを12桁にフォーマット
    const countStr = count.toString().padStart(12, '0');

    for (let i = 0; i < countStr.length; i++) {
        const digit = countStr[i];
        const img = document.createElement('img');
        img.src = `img/${digit}.png`;
        img.alt = digit;
        counterElement.appendChild(img);
    }
}

updateCounter();