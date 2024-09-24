document.getElementById('celebrateButton').addEventListener('click', function() {
    createMangoConfetti();
});

function createMangoConfetti() {
    const confettiCount = 100;
    const body = document.querySelector('body');

    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        body.appendChild(confetti);

        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = '#ff9933';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    }
}

// Confetti CSS in styles.css

function createMangoBalloons() {
    const balloonCount = 10;
    const body = document.querySelector('body');

    for (let i = 0; i < balloonCount; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        body.appendChild(balloon);

        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
    }
}

document.addEventListener('DOMContentLoaded', createMangoBalloons);


document.addEventListener('mousemove', function(e) {
    let mango = document.createElement('div');
    mango.classList.add('mango-cursor');
    document.body.appendChild(mango);
    mango.style.left = `${e.pageX}px`;
    mango.style.top = `${e.pageY}px`;

    setTimeout(() => {
        mango.remove();
    }, 1000);  // Disappear after 1 second
});


function showCake() {
    document.body.classList.add('show-cake');
}

document.getElementById('celebrateButton').addEventListener('click', showCake);


// function createFirework(x, y) {
//     for (let i = 0; i < 20; i++) {
//         let firework = document.createElement('div');
//         firework.classList.add('firework');
//         document.body.appendChild(firework);

//         firework.style.left = `${x + (Math.random() * 100 - 50)}px`;
//         firework.style.top = `${y + (Math.random() * 100 - 50)}px`;

//         setTimeout(() => firework.remove(), 1000);
//     }
// }

document.addEventListener('click', function(e) {
    createFirework(e.pageX, e.pageY);
});


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

    setTimeout(() => heart.remove(), 10000); // Remove after floating up
}

setInterval(createHeart, 500);
