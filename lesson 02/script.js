var element = document.getElementById('button');

element.addEventListener('click', function() {
    // Add animation classes.
    element.classList.add('animated', 'shake');

    // On animation end.
    element.addEventListener('animationend', function() {
        element.classList.remove('animated', 'shake');
    });
});