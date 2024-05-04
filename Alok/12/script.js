document.addEventListener("DOMContentLoaded", () => {
    const triggerButton = document.getElementById('triggerButton');
    const eventDetails = document.getElementById('eventDetails');

    triggerButton.addEventListener('click', (event) => {
        const eventType = event.type;
        const eventTarget = event.target.nodeName;
        const eventX = event.clientX;
        const eventY = event.clientY;

        const details = `Event Type: ${eventType}, Target: ${eventTarget}, X: ${eventX}, Y: ${eventY}`;
        eventDetails.textContent = details;

        // Print one property in the console
        console.log(`Event Type: ${eventType}`);
    });
});
