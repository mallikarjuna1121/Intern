$(document).ready(function () {

	/* Accordion initialization: Makes the container sections collapsible, all sections closed by default, and content height adjusts automatically */
	$("#accordion_container").accordion({
		collapsible: true,
		active: false,
		heightStyle: "content"
	});

	/* Dialog box initialization: Creates a modal dialog with OK and Cancel buttons that close the dialog when clicked */
	$("#dialog_box").dialog({
		autoOpen: false,
		modal: true,
		buttons: [{
			text: "OK",
			icon: "ui-icon-check",
			click: function () {
				$(this).dialog("close");
			}
		}, {
			text: "Cancel",
			icon: "ui-icon-check",
			click: function () {
				$(this).dialog("close");
			}
		}]
	});

	/* Slide down header animation: Shows the header gradually over 10 seconds and opens the dialog when completed */
	$("#mypage-header").slideDown(10000, function () {
		$("#dialog_box").dialog("open");
	});

	/* Tabs widget initialization: Converts the content tabs into jQuery UI tabs */
	$("#content_tabs").tabs();

	/* Datepicker widget initialization: Converts the input into a jQuery UI date picker */
	$("#date_picker").datepicker();

	/* Autocomplete widget initialization: Provides suggestions for technologies while typing in the input */
	var availableTechnologies = [
		"HTML",
		"CSS",
		"Java Script",
		"JQuery",
		"JQuery ui",
		"Java",
		"PHP"
	];
	$("#auto_complete").autocomplete({
		source: availableTechnologies
	});

	/* Button styling using jQuery UI: Applies icon, label visibility, and icon position to all buttons with class 'btn' */
	$(".btn").button({
		icon: "ui-icon-check",
		showLabel: true,
		iconPosition: "end"
	});

	/* Button click handlers: Calls respective functions for cookie, string reversal, max number, and longest word exercises */
	$("#cookie_button").click(function () {
		setCookie();
	});
	$("#reverse_button").click(function () {
		reverseString(reverse_input.value);
	});
	$("#max_of_two_button").click(function () {
		maxOfTwoNumbers(Number(num1.value), Number(num2.value));
	});
	$("#longest_word_button").click(function () {
		longestWord(longest_input.value);
	});

});

// Display stored cookies (if available) when page loads
if (document.cookie != "") {
	let words = document.cookie.split(";");
	for (let word of words) {
		word = word.trim();
		if (word.startsWith("name="))
			document.getElementById("display_name").innerText = word.substring(5);
		if (word.startsWith("phon="))
			document.getElementById("display_phone").innerText = word.substring(5);
	}
}

// Function to find maximum of two numbers
function maxOfTwoNumbers(a, b) {
	if (a == 0 || b == 0) {
		alert("enter number");
		return;
	}
	document.getElementById("max_number_result").innerHTML = (a > b ? a : b);
}

// Function to reverse a given string
function reverseString(str) {
	if (str == "") {
		alert("enter string");
		return;
	}
	document.getElementById("string_reverse_result").innerText = str.split("").reverse().join("");
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
	document.getElementById("longest_word_result").innerText = max;
}

// Function to create and store cookies for name and phone
function setCookie() {
	let name = document.getElementById("user_name").value;
	let phone = document.getElementById("user_phone").value;
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
			document.getElementById("display_name").innerText = word.substring(5);
		if (word.startsWith("phon="))
			document.getElementById("display_phone").innerText = word.substring(5);
	}
}