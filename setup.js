let canvasBoard = document.querySelector('canvas');
    canvasBoard.height = window.innerHeight - 50;
    canvasBoard.width = window.innerWidth - 25;
let tool = canvasBoard.getContext('2d');
tool.strokeStyle = "black";
let boardTop = canvasBoard.getBoundingClientRect().top + 5;
let boardLeft = canvasBoard.getBoundingClientRect().left + 5;
let recTool = document.querySelector('#rect');
let lineTool = document.querySelector('#line');
let pencilTool = document.querySelector('#pencil');
let eraserTool = document.querySelector('#eraser');
let cTool = "pencilTool";
let sizeBoxes = document.querySelectorAll('.size-box');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let black = document.querySelector('.black');
let iX, iY;
let drawingMode = false;

let pencilSize = 5;
let lineSize = 5;
let eraserSize = 5;
let rectSize = 5;