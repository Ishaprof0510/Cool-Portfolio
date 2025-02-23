const circle = document.getElementById('circle');

circle.addEventListener('mouseenter', function () {
if (!circle.classList.contains('hover')) {
    (circle.classList.add('hover'))
}

} );

circle.addEventListener('mouseleave', function () {
    if (circle.classList.contains('hover')) {
        (circle.classList.remove('hover'))
    }
});

