
let body = document.querySelector('body');

sticky.addEventListener("click", function () {
    let sticky = document.createElement('div');
    sticky.setAttribute('class', 'sticky');
    sticky.innerHTML = `<div class="navbar">
            <div class="minimize"></div>
            <div class="close"></div>
        </div>
        <textarea spellcheck="false" cols="30" rows="10" class="textarea"></textarea>`;
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

