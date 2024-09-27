document.getElementById('showMessageButton').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    message.classList.toggle('hidden');
    createBalloons();
});

function createBalloons() {
    const canvas = document.getElementById('balloonsCanvas');
    const ctx = canvas.getContext('2d');
    const balloons = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 30; i++) {
        balloons.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 500,
            r: Math.random() * 25 + 15,
            color: `hsl(${Math.random() * 360}, 70%, 80%)`,
            speed: Math.random() * 2 + 1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        balloons.forEach((balloon) => {
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.r, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.fill();

            balloon.y -= balloon.speed;

            if (balloon.y + balloon.r < 0) {
                balloon.y = canvas.height + Math.random() * 100;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}
