const outputDiv = document.getElementById('output');
const str = 'Hello, World!';

// String length
outputDiv.innerHTML += `<p>Length: ${str.length}</p>`;

// charAt()
outputDiv.innerHTML += `<p>Char at index 7: ${str.charAt(7)}</p>`;

// charCodeAt()
outputDiv.innerHTML += `<p>Char code at index 7: ${str.charCodeAt(7)}</p>`;

// at() - Not supported in all browsers
if (String.prototype.at) {
    outputDiv.innerHTML += `<p>At index 7: ${str.at(7)}</p>`;
}

// []
outputDiv.innerHTML += `<p>Character at index 7: ${str[7]}</p>`;

// slice()
outputDiv.innerHTML += `<p>Slice from index 7 to end: ${str.slice(7)}</p>`;

// substring()
outputDiv.innerHTML += `<p>Substring from index 7 to 12: ${str.substring(7, 12)}</p>`;

// substr()
outputDiv.innerHTML += `<p>Substr from index 7, length 5: ${str.substr(7, 5)}</p>`;
