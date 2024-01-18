document.addEventListener('DOMContentLoaded', function() {
    const storedColor = localStorage.getItem('backgroundColor');

    const colorInput = document.getElementById('colorInput');
    colorInput.value = storedColor || '#ffffff';
    document.body.style.setProperty('--primary-color', colorInput.value);

    const colorForm = document.getElementById('colorForm');
    colorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedColor = colorInput.value;

        document.body.style.setProperty('--primary-color', selectedColor);

        localStorage.setItem('backgroundColor', selectedColor);
    });
});
