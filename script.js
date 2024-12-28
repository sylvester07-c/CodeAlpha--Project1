const images = [
    "pexels-alexandr-meadow-1505505-29715958.jpg",
    "pexels-cottonbro-6182887.jpg",
    "pexels-efrem-efre-2786187-29551244.jpg",
    "pexels-est1307-250177.jpg",
    "pexels-george-dolgikh-551816-1303090.jpg",
    "pexels-jameel-754430.jpg"
];

let currentIndex = 0;

// Open lightbox and show the clicked image
function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox').style.display = 'block';
    showImage(currentIndex);
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Show the image in the lightbox
function showImage(index) {
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[index];
}

// Change to the next or previous image
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else {
        showImage(currentIndex);
    }
};

 