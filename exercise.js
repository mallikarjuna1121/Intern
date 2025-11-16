// Display stored cookies (if available) when page loads
if (document.cookie != "") {
	let words = document.cookie.split(";");
	for (let word of words) {
		word = word.trim();
		if (word.startsWith("name="))
			document.getElementById("displayName").innerText = word.substring(5);
		if (word.startsWith("phon="))
			document.getElementById("displayPhone").innerText = word.substring(5);
	}
}
// Function to find maximum of two numbers
function findMax(a, b) {
	if (a == 0 || b == 0) {
		alert("enter number");
		return;
	}
	document.getElementById("res1").innerHTML = (a > b ? a : b);
}
// Function to reverse a given string
function reverseString(str) {
	if (str == "") {
		alert("enter string");
		return;
	}
	document.getElementById("res2").innerText = str.split("").reverse().join("");
}
// Function to find the longest word from comma-separated input
function longestWord(str) {
	if (str == "") {
		alert("enter string");
		return;
	}
	let a = str.trim().split(",");
	let max = "";
	for (let word of a) {
		if (max.length < word.length)
			max = word;
	}
	document.getElementById("res3").innerText = max;
}
// Function to create and store cookies for name and phone
function setCookie() {
	let name = document.getElementById("name").value;
	let phone = document.getElementById("phone").value;
	if (name == "" || phone == "") {
		alert("enter input");
		return;
	}
	// Save name and phone in cookies
	document.cookie = `name=${name}`;
	document.cookie = `phon=${phone}`;

	// Display saved values immediately
	let words = document.cookie.split(";");
	for (let word of words) {
		word = word.trim();
		if (word.startsWith("name="))
			document.getElementById("displayName").innerText = word.substring(5);
		if (word.startsWith("phon="))
			document.getElementById("displayPhone").innerText = word.substring(5);
	}
}
