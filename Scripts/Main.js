document.addEventListener('DOMContentLoaded', () => {
    // Inicialización del set de iconos Lucide importados desde la CDN
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide CDN no se ha cargado correctamente.');
    }
});