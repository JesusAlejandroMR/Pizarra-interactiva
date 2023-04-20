// CANVAS MOUSE

const canvasMs = document.getElementById('canvasClk');
const ctx = canvasMs.getContext('2d');
let dibujando = false;
let x, y;

canvasMs.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    dibujando = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvasMs.addEventListener('mousemove', e => {
    if (dibujando) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvasMs.addEventListener('mouseup', e => {
    if (dibujando) {
        dibujando = false;
        ctx.closePath();
    }
});

canvasMs.addEventListener('mousemove', e => {
    if (dibujando) {
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
});



// CANVAS KEYBOARD 
const canvasKB = document.getElementById("canvasBrd");
const ctxKB = canvasKB.getContext("2d");

// Definir las propiedades de estilo de línea
let lineColor = "#FFA844"; // color negro por defecto
let lineWidth = 5; // grosor de línea por defecto
let lineCap = "round"; // estilo de extremo de línea por defecto

let isDrawing = true;
let xKB = 0;
let yKB = 0;

// Función para actualizar las propiedades de estilo en el contexto del canvas
function updateLineStyle() {
  ctxKB.strokeStyle = lineColor;
  ctxKB.lineWidth = lineWidth;
  ctxKB.lineCap = lineCap;
}

// Función para dibujar una línea con las propiedades de estilo actuales
function drawLine(x1, y1, x2, y2) {
  ctxKB.beginPath();
  ctxKB.moveTo(x1, y1);
  ctxKB.lineTo(x2, y2);
  ctxKB.stroke();
  ctxKB.closePath();
}

// Evento para detectar cuando el usuario presiona una tecla
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    xKB += 10;
  } else if (event.key === "ArrowLeft") {
    xKB -= 10;
  } else if (event.key === "ArrowUp") {
    yKB -= 10;
  } else if (event.key === "ArrowDown") {
    yKB += 10;
  }

  if (isDrawing === true) {
    drawLine(xKB - 10, yKB + 10, xKB, yKB);
  }
});

// Evento para detectar cuando el usuario selecciona un nuevo estilo de línea
document.addEventListener("change", (event) => {
  if (event.target.id === "colorPicker") {
    lineColor = event.target.value;
  } else if (event.target.id === "lineWidth") {
    lineWidth = event.target.value;
  } else if (event.target.id === "lineCap") {
    lineCap = event.target.value;
  }
  updateLineStyle();
});




//BOTONES DE ACCIÓN
var boton = document.getElementById("btnMBoard");
boton.addEventListener("click", function () {
    console.log('On melancholy hill');
});
var boton = document.getElementById("btnKBoard");
boton.addEventListener("click", function () {
    console.log('Feel good inc');
});
