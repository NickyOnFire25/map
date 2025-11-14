const c = document.getElementById("map");
const ctx = c.getContext("2d");

const pixelSize = 20;

// Beispiel-Grundriss (0=leer, 1=Wand, 2=Tür)
const map = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,2,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

function draw() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {

      if (map[y][x] === 1) ctx.fillStyle = "#000";      // Wand
      else if (map[y][x] === 2) ctx.fillStyle = "#c90"; // Tür
      else ctx.fillStyle = "#eee";                      // Leerfläche

      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      ctx.strokeStyle = "#999";
      ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}

draw();
