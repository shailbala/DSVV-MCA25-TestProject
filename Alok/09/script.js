document.addEventListener("DOMContentLoaded", function() {
    const hoverButton = document.getElementById('hoverButton');
    const inputField = document.getElementById('inputField');
    const changeText = document.getElementById('changeText');
    const liveText = document.getElementById('liveText');

    hoverButton.addEventListener('mouseover', function() {
        alert('You hovered over the button!');
    });

    inputField.addEventListener('input', function() {
        const inputValue = inputField.value;
        liveText.textContent = inputValue;
        console.log('Input value:', inputValue);
    });

    changeText.addEventListener('dblclick', function() {
        const newText = prompt('Enter new text:');
        if (newText) {
            changeText.textContent = newText;
        }
    });
});
