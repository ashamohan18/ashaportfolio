const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw(e) {
    const x = e.clientX;
    const y = e.clientY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('mousemove', draw);

resizeCanvas();
