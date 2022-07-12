canvasBoard.addEventListener("mousedown", function (e) {

    if (cTool == 'pencilTool' || cTool == 'eraserTool') {
        drawingMode = true;
        tool.beginPath();
        iX = e.clientX - boardLeft;
        iY = e.clientY - boardTop;
        tool.moveTo(iX, iY);
    } else {
        iX = e.clientX - boardLeft;
        iY = e.clientY - boardTop;
    }

})

canvasBoard.addEventListener("mouseup", function (e) {

    let fX = e.clientX - boardLeft;
    let fY = e.clientY - boardTop;
    let height = fY - iY;
    let width = fX - iX;
    if (cTool == 'recTool') {
        tool.strokeRect(iX, iY, width, height);
    } else if (cTool == "lineTool") {
        tool.beginPath();
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke();
    } else if (cTool == "pencilTool" || cTool == 'eraserTool') {
        drawingMode = false;
    }
    let url = canvasBoard.toDataURL();
    undoRedoTracker.push(url);
    track = undoRedoTracker.length-1;
    // console.log(undoRedoTracker);
})
canvasBoard.addEventListener("mousemove", function (e) {

    if (drawingMode == false) return;
    if (cTool == 'pencilTool' || cTool == "eraserTool") {
        let fX = e.clientX - boardLeft;
        let fY = e.clientY - boardTop;

        tool.lineTo(fX, fY);
        tool.stroke();

    }
})
