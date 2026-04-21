window.addEventListener("DOMContentLoaded", () => {

    const text = "Building real-world systems with code and hardware";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typedText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});