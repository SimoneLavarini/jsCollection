window.onmousemove = e => {
    const dot = document.getElementById("point");
    dot.animate({
        left: e.clientX + 'px',
        top: e.clientY + 'px'
    }, { duration: 400, fill: 'forwards' });
}

