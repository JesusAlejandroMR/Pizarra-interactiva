// CANVAS MOUSE

window.addEventListener('load', () => {
  const canvasM = document.getElementById('canvasClk');
  canvasM.width = window.innerWidth;
  canvasM.height = window.innerHeight;
  const canvasT = document.getElementById('canvasBrd');
  canvasT.width = window.innerWidth;
  canvasT.height = window.innerHeight;
});


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

//----------------------------------------------------   PARA DISPOSITIVOS MÓBILES   -------------------------------------------------------------------------------------------
// Establecer el color de dibujo y la anchura del lápiz
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

// Variables para almacenar la posición anterior del touch
var lastX, lastY;

// Función para dibujar una línea entre dos puntos
function drawLineMobil(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

// Función que se ejecuta cuando se toca la pantalla
function onTouchStart(e) {
  e.preventDefault(); // Evita el scroll en dispositivos móviles
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
}

// Función que se ejecuta cuando se mueve el dedo por la pantalla
function onTouchMove(e) {
  e.preventDefault(); // Evita el scroll en dispositivos móviles
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  drawLineMobil(lastX, lastY, currentX, currentY);
  lastX = currentX;
  lastY = currentY;
}

// Función que se ejecuta cuando se levanta el dedo de la pantalla
function onTouchEnd(e) {
  e.preventDefault(); // Evita el scroll en dispositivos móviles
  lastX = null;
  lastY = null;
}

// Agregar event listeners para los eventos touch
canvasMs.addEventListener("touchstart", onTouchStart);
canvasMs.addEventListener("touchmove", onTouchMove);
canvasMs.addEventListener("touchend", onTouchEnd);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CANVAS KEYBOARD 
const canvasKB = document.getElementById("canvasBrd");
const ctxKB = canvasKB.getContext("2d");

// Definir las propiedades de estilo de línea
let lineColor = "#00000"; // color negro por defecto
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
    xKB += 5;
  } else if (event.key === "ArrowLeft") {
    xKB -= 5;
  } else if (event.key === "ArrowUp") {
    yKB -= 5;
  } else if (event.key === "ArrowDown") {
    yKB += 5;
  }

  if (isDrawing === true) {
    drawLine(xKB - 5, yKB + 5, xKB, yKB);
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



var cKBoard = document.getElementById("canvasBrd");
var cMouse = document.getElementById("canvasClk");
var lblTitulo = document.getElementById("LblTitulo");
var customVar = document.getElementById("custom");

//BOTONES DE ACCIÓN
var botonMBoard = document.getElementById("btnMBoard");
botonMBoard.addEventListener("click", function () {
  lblTitulo.textContent ="KeyBoard-board";
  cKBoard.style.display = "block";
  cMouse.style.display = "none";
  customVar.style.display = "block";
});
var botonKBoard = document.getElementById("btnKBoard");
botonKBoard.addEventListener("click", function () {
  lblTitulo.textContent ="Mouse-board";
  cKBoard.style.display = "none";
  cMouse.style.display = "block";
  customVar.style.display = "none";
});
