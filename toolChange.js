recTool.addEventListener("click", function () {
    if (cTool == "recTool") {
        sizeBoxes[2].style.display = "flex";
    } else {
        cTool = "recTool";
        tool.strokeStyle = "black";
        tool.lineWidth = rectSize;
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
        tool.lineWidth = lineSize;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})
pencilTool.addEventListener("click", function () {
    if (cTool == "pencilTool") {
        sizeBoxes[0].style.display = "flex";
    } else {
        cTool = "pencilTool";
        tool.strokeStyle = "black";
        tool.lineWidth = pencilSize;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})
eraserTool.addEventListener("click", function () {

    if (cTool == "eraserTool") {
        sizeBoxes[1].style.display = "flex";
    } else {
        cTool = "eraserTool";
        tool.strokeStyle = "white";
        tool.lineWidth = eraserSize;
        sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    }
})

// size change
// event bubbling

sizeBoxes.forEach(function(sizeBox){
    sizeBox.addEventListener("click",function(e){
        let options = ["size1","size2","size3","size4"];
        let clicked = e.target;
        let size = clicked.classList[1];
        
        if(options.includes(size)){
            if(size == "size1"){
                setSizeByTool(5);
            }else if(size == "size2"){
                setSizeByTool(10);
            }else if(size == "size3"){
                setSizeByTool(20);
            }else{
                setSizeByTool(30);
            }
        }
        
    })
})
function setSizeByTool(size){

    tool.lineWidth = size;
    if(cTool == "pencilTool"){
        pencilSize = size;
    }else if(cTool == "eraserTool"){
        eraserSize = size;
    }else if(cTool == "lineTool"){
        lineSize = size;
    }else if(cTool == "recTool"){
        rectSize = size;
    }
}