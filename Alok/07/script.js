document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const elementContainer = document.getElementById('elementContainer');
    let count = 0;

    addButton.addEventListener('click', function() {
        const newElement = document.createElement('div');
        newElement.classList.add('element');
        newElement.textContent = `Element ${count + 1}`;
        elementContainer.appendChild(newElement);
        count++;
    });

    deleteButton.addEventListener('click', function() {
        const elements = document.querySelectorAll('.element');
        if (elements.length > 0) {
            const lastElement = elements[elements.length - 1];
            elementContainer.removeChild(lastElement);
            count--;
        } else {
            alert('No elements to delete!');
        }
    });
});
