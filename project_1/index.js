const containerEl = document.querySelector(".container");

window.addEventListener ("mousemove",e => {
    containerEl.innerHTML = `
    <div class="mouse-event">
            ${e.clientX}
            <h4>Mouse X Prosition(px)</h4>
        </div>
        <div class="mouse-event">
            ${e.clientY}
            <h4>Mouse Y Prosition(px)</h4>
        </div>
    `
} )