optionsCont.addEventListener("click", e => {
    let iconEle = optionsCont.children[0];
    if (optionsFlag) {
        openTools();
    } else {
        closeTools();
    }
    optionsFlag = !optionsFlag;
})

function openTools() {
    let iconEle = optionsCont.children[0];
    iconEle.classList.remove("fa-bars");
    iconEle.classList.add("fa-times");
    toolbarCont.style.display = "flex";
}
function closeTools() {
    let iconEle = optionsCont.children[0];
    iconEle.classList.remove("fa-times");
    iconEle.classList.add("fa-bars");

    toolbarCont.style.display = "none";
}

// recTool.addEventListener("click", function () {
//     if (cTool == "recTool") {
//         sizeBoxes[2].style.display = "flex";
//     } else {
//         cTool = "recTool";
//         tool.strokeStyle = "black";
//         tool.lineWidth = rectSize;
//         sizeBoxes.forEach(sizeBox => {
//             sizeBox.style.display = "none";
//         })
//     }
// })
// lineTool.addEventListener("click", function () {
//     if (cTool == 'lineTool') {
//         sizeBoxes[3].style.display = "flex";
//     } else {
//         cTool = "lineTool";
//         tool.strokeStyle = "black";
//         tool.lineWidth = lineSize;
//         sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
//     }
// })
pencilTool.addEventListener("click", function () {
    if (cTool != "pencilTool") {
        cTool = "pencilTool";
    }
    
    tool.strokeStyle = "black";
    tool.lineWidth = pencilSize;
    sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    sizeBoxes[0].style.display = "flex";
})
eraserTool.addEventListener("click", function () {

    if (cTool != "eraserTool") {
        cTool = "eraserTool";
    }

    tool.strokeStyle = "white";
    tool.lineWidth = eraserSize;
    sizeBoxes.forEach(sizeBox => sizeBox.style.display = "none");
    sizeBoxes[1].style.display = "flex";
})

// size change
// event bubbling

sizeBoxes.forEach(function (sizeBox) {
    sizeBox.addEventListener("click", function (e) {
        let options = ["size1", "size2", "size3", "size4"];
        let clicked = e.target;
        let size = clicked.classList[1];

        if (options.includes(size)) {
            if (size == "size1") {
                setSizeByTool(5);
            } else if (size == "size2") {
                setSizeByTool(10);
            } else if (size == "size3") {
                setSizeByTool(20);
            } else {
                setSizeByTool(30);
            }
        }

    })
})
function setSizeByTool(size) {

    tool.lineWidth = size;
    if (cTool == "pencilTool") {
        pencilSize = size;
    } else if (cTool == "eraserTool") {
        eraserSize = size;
    } else if (cTool == "lineTool") {
        lineSize = size;
    } else if (cTool == "recTool") {
        rectSize = size;
    }
}

// upload tool
uploadTool.addEventListener("click", (e) => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();
    input.addEventListener("change", (e) => {
        let file = input.files[0];
        let url = URL.createObjectURL(file);

        let sticky = document.createElement('div');
        sticky.setAttribute('class', 'sticky');
        sticky.classList.add("upload");
        sticky.innerHTML = `<div class="navbar">
            <div class="minimize"></div>
            <div class="close"></div>
        </div>
        <img src="${url}" class="upload-img">`
        body.appendChild(sticky);

        let minimize = sticky.querySelector('.minimize');
        let textarea = sticky.querySelector('.textarea');
        let close = sticky.querySelector('.close');

        minimize.addEventListener('click', () => {
            if (textarea.style.display == "none") {
                textarea.style.display = "block";
            } else {
                textarea.style.display = "none";
            }

        })
        close.addEventListener('click', () => {
            sticky.remove();
        })
    })
})

// download tool
downloadTool.addEventListener("click", (e) => {
    let url = canvasBoard.toDataURL();

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.png"
    a.click();
})

// undo

undo.addEventListener("click", (e) => {

    if (track > 0) track--;
    // handleUndoRedo();
    console.log(track);
    let image = new Image();
    image.src = undoRedoTracker[track];
    image.onload = (e) => {
        tool.drawImage(image, 0, 0, canvasBoard.width, canvasBoard.height);
    }
})

redo.addEventListener("click", (e) => {
    if (track < undoRedoTracker.length) track++;
    // handleUndoRedo();
    let image = new Image();
    image.src = undoRedoTracker[track];
    image.onload = (e) => {
        tool.drawImage(image, 0, 0, canvasBoard.width, canvasBoard.height);
    }
})

function handleUndoRedo() {
    console.log(undoRedoTracker);


}