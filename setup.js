let canvasBoard = document.querySelector('canvas');
    canvasBoard.height = window.innerHeight -15;
    canvasBoard.width = window.innerWidth - 25;
let tool = canvasBoard.getContext('2d');
tool.strokeStyle = "black";
tool.lineWidth = 5;
let boardTop = canvasBoard.getBoundingClientRect().top + 5;
let boardLeft = canvasBoard.getBoundingClientRect().left + 5;

let recTool = document.querySelector('#rect');
let lineTool = document.querySelector('#line');
let pencilTool = document.querySelector('#pencil');
let eraserTool = document.querySelector('#eraser');
let sticky = document.querySelector('#sticky');

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

let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let toolbarCont = document.querySelector(".toolbar");

let uploadTool = document.querySelector("#upload");
let downloadTool = document.querySelector('#download');
let undoRedoTracker = [];
let track = 0;

let undo = document.querySelector('#undo');
let redo = document.querySelector('#redo');