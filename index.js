var audio = new Audio('t.mp3');
var b = false;

addEventListener('click', () => {
    if (b)
        return;

    b = true;

    audio.play();

    window.setTimeout(() => {
        document.body.style.animationName="open";
    }, 21500);
});