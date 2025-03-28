const images = document.querySelectorAll("img, div");
images.forEach(img => {
    const bg = window.getComputedStyle(img).backgroundImage;
    if (bg && bg !== 'none') {
        console.log("Background Image:", bg);
    }
    if (img.src) {
        console.log("Image Source:", img.src);
    }
});