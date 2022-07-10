recTool.addEventListener("click", function () {
    if (cTool == "recTool") {
        sizeBoxes[2].style.display = "flex";
    } else {
        cTool = "recTool";
        tool.strokeStyle = "black";
        tool.lineWidth = 1;
        sizeBoxes.forEach(sizeBox => {
            sizeBox.style.display = "none";
        })
    }
})
lineTool.addEventListener("click", function () {
    if (cTool == 'lineTool') {
        sizeBoxes[3].style.display = "flex";
    } else {
        cTool = "lineTool";
        tool.strokeStyle = "black";
        tool.lineWidth = 1;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})
pencilTool.addEventListener("click", function () {
    if (cTool == "pencilTool") {
        sizeBoxes[0].style.display = "flex";
    } else {
        cTool = "pencilTool";
        tool.strokeStyle = "black";
        tool.lineWidth = 1;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})
eraserTool.addEventListener("click", function () {

    if (cTool == "eraserTool") {
        sizeBoxes[1].style.display = "flex";
    } else {
        cTool = "eraserTool";
        tool.strokeStyle = "white";
        tool.lineWidth = 20;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})