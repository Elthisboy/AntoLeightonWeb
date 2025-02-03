// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const showImageButton = document.getElementById('show-image-btn');
    const imageUrl = 'images/anto.jpg'; // Reemplaza con la URL de tu imagen

    function showImage() {
        // Almacenar la URL de la imagen en localStorage
        localStorage.setItem('imageToShow', imageUrl);
        
        // Redirigir a imagen.html
        window.location.href = 'imagen.html';
    }

    // Escuchar evento 'click'
    showImageButton.addEventListener('click', showImage);

    // Escuchar evento 'touchstart' para dispositivos táctiles
    showImageButton.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del touchstart
        showImage();
    });
});

    


// En imagen.html, cargar la imagen almacenada en localStorage
document.addEventListener('DOMContentLoaded', function() {
    const imageDisplay = document.getElementById('image-display');
    const imageUrl = localStorage.getItem('imageToShow');

    if (imageUrl) {
        imageDisplay.src = imageUrl;
    }
});
