var str = "Hello, World!";
document.write("<ul>");

        
document.write("<li><b>String length - </b> Returns length of the string : " + str.length + "</li>");

document.write("<li><b>String charAt() - </b> Returns character at given index : " + str.charAt(9) + "</li>");

document.write("<li><b>String charCodeAt() - </b> Returns ASCII code of character at given index :" + str.charCodeAt(4) + "</li>");

document.write("<li><b>String [] - </b> Accessing character at index 6: " + str[7] + "</li>");

document.write("<li><b>String slice()  - </b> Extracts a part of a string and returns the extracted part in a new string : " + str.slice(2, 7) + "</li>");

document.write("<li><b>String substring()  - </b> Substring from index 2 to 7 : " + str.substring(2, 7) + "</li>");

document.write("<li><b>String substr()  - </b>  Substring of length 7 starting from index 2: " + str.substr(2, 9) + "</li>");

document.write("<li><b>String toUpperCase()</b> - Convert the string to uppercase: " + str.toUpperCase() + "</li>");

document.write("<li><b>String toLowerCase()</b> - Convert the string to lowercase: " + str.toLowerCase() + "</li>");


document.write("</ul>");



// **String concat()**
var str2 = " Welcome";
document.write("<h3> Sample String2 = \"Welcome\" </h3>");

document.write("<ul>");

document.write("<li><b>String concat()</b> - Concatenate two strings: " + str.concat(str2) + "</li>");

// **String trim()**
document.write("<li><b>String trim()</b> - Remove whitespace from both ends of the string: \"" + str.trim() + "\"</li>");

// **String trimStart()**
document.write("<li><b>String trimStart()</b> - Remove whitespace from the beginning of the string: \"" + str.trimStart() + "\"</li>");

// **String trimEnd()**
document.write("<li><b>String trimEnd()</b> - Remove whitespace from the end of the string: \"" + str.trimEnd() + "\"</li>");

// **String padStart()**
var num = "7";
document.write("<li><b>String padStart()</b> - Pad the string with another string until it reaches the specified length from the start: \"" + num.padStart(5, '0') + "\"</li>");

// **String padEnd()**
document.write("<li><b>String padEnd()</b> - Pad the string with another string until it reaches the specified length from the end: \"" + num.padEnd(5, '0') + "\"</li>");

// **String repeat()**
document.write("<li><b>String repeat()</b> - Repeat the string a specified number of times: " + str.repeat(2) + "</li>");

// **String replace()**
document.write("<li><b>String replace()</b> - Replace a specified value with another value in the string: \"" + str.replace('Hello', 'Hi') + "\"</li>");

// **String replaceAll()**
document.write("<li><b>String replaceAll()</b> - Replace all occurrences of a specified value with another value in the string: \"" + str.replaceAll('l', 'L') + "\"</li>");

// **String split()**
document.write("<li><b>String split()</b> - Split the string into an array of substrings based on a specified separator: " + str.split(',') + "</li>");

document.write("</ul>");


// Define a sample string
var str = "Hello, World! This is a sample string for demonstration.";
document.write("<h3> Sample String3 = \"Hello, World! This is a sample string for demonstration.\" </h3>");

document.write("<ul>");
// **String indexOf()**
document.write("<li><b>String indexOf()</b> - Index of the first occurrence of 'World': " + str.indexOf('World') + "</li>");

// **String lastIndexOf()**
document.write("<li><b>String lastIndexOf()</b> - Index of the last occurrence of 'is': " + str.lastIndexOf('is') + "</li>");

// **String search()**
document.write("<li><b>String search()</b> - Index of the first occurrence of 'sample': " + str.search('sample') + "</li>");

// **String match()**
var pattern = /is/g;
document.write("<li><b>String match()</b> - Matching substring(s) with pattern '/is/g': " + str.match(pattern) + "</li>");

// **String matchAll()**
var matchAllResults = str.matchAll(pattern);
document.write("<li><b>String matchAll()</b> - Matching substring(s) with pattern '/is/g': ");
for (const match of matchAllResults) {
    document.write(match[0] + ", ");
}
document.write("</li>");

// **String includes()**
document.write("<li><b>String includes()</b> - Check if the string includes 'Hello': " + str.includes('Hello') + "</li>");

// **String startsWith()**
document.write("<li><b>String startsWith()</b> - Check if the string starts with 'Hello': " + str.startsWith('Hello') + "</li>");

// **String endsWith()**
document.write("<li><b>String endsWith()</b> - Check if the string ends with 'demonstration.': " + str.endsWith('demonstration.') + "</li>");

document.write("</ul>");