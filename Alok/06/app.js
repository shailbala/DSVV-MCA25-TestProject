function sortNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var smallest, middle, largest;
    if (num1 <= num2 && num1 <= num3) {
        smallest = num1;
        if (num2 <= num3) {
            middle = num2;
            largest = num3;
        } else {
            middle = num3;
            largest = num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        smallest = num2;
        if (num1 <= num3) {
            middle = num1;
            largest = num3;
        } else {
            middle = num3;
            largest = num1;
        }
    } else {
        smallest = num3;
        if (num1 <= num2) {
            middle = num1;
            largest = num2;
        } else {
            middle = num2;
            largest = num1;
        }
    }

    document.getElementById("sortedNumbers").innerHTML = "Sorted Numbers: " + smallest + ", " + middle + ", " + largest;
}