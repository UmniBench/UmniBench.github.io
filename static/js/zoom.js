// Image zoom functionality
document.addEventListener('DOMContentLoaded', function() {
    // Enable zoom on all images in the content area
    const images = document.querySelectorAll('.content-wrapper img, .case-example img');
    
    if (typeof mediumZoom !== 'undefined') {
        mediumZoom(images, {
            margin: 24,
            background: '#000000cc',
            scrollOffset: 0
        });
    }
});
