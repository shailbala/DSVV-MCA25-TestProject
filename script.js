function moveToNext(event, nextElementId) {
    if (event.key === 'Enter') {
        document.getElementById(nextElementId).focus();
    }
}
function sortNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    let sortedNumbers;

    if (num1 <= num2 && num1 <= num3) {
        sortedNumbers = [num1];
        if (num2 <= num3) {
            sortedNumbers.push(num2, num3);
        } else {
            sortedNumbers.push(num3, num2);
        }
    } else if (num2 <= num1 && num2 <= num3) {
        sortedNumbers = [num2];
        if (num1 <= num3) {
            sortedNumbers.push(num1, num3);
        } else {
            sortedNumbers.push(num3, num1);
        }
    } else {
        sortedNumbers = [num3];
        if (num1 <= num2) {
            sortedNumbers.push(num1, num2);
        } else {
            sortedNumbers.push(num2, num1);
        }
    }

    document.getElementById('output').innerText = `Sorted numbers: ${sortedNumbers.join(', ')}`;
}
