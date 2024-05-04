document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenText = document.getElementById('hiddenText');
    let isHidden = false;

    toggleButton.addEventListener('click', function() {
        if (isHidden) {
            hiddenText.style.display = 'block';
            toggleButton.textContent = 'Hide Text';
        } else {
            hiddenText.style.display = 'none';
            toggleButton.textContent = 'Unhide Text';
        }
        isHidden = !isHidden;
    });
});
