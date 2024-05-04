document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('box');
    const form = document.getElementById('form');

    // Click Event
    box.addEventListener('click', () => {
        alert('You clicked the box!');
    });

    // Mouse Hover Events
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'lightgreen';
    });

    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'lightblue';
    });

    // Form Submit Event
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['name'].value;
        alert(`Form submitted! Hello, ${name}!`);
    });
});
