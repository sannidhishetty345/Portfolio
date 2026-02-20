const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gap = 40;

  for (let x = 0; x < canvas.width; x += gap) {
    for (let y = 0; y < canvas.height; y += gap) {
      const dx = mouse.x - x;
      const dy = mouse.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const offset = Math.min(20, 100 / dist);

      ctx.strokeStyle = "rgba(0, 200, 255, 0.3)";
      ctx.beginPath();
      ctx.moveTo(x + offset, y);
      ctx.lineTo(x, y + offset);
      ctx.stroke();
    }
  }

  requestAnimationFrame(drawGrid);
}

drawGrid();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
