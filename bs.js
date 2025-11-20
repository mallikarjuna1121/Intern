// Initialize all UI widgets and button actions after page loads
$(document).ready(function () {
	$("#mypage-header").slideDown(10000, function () {
		$('#alert_modal').modal('show');
	});
	// hide toast with fade
	$("#close_toast").click(function () {
		$("#my_toast").fadeOut(400);
	})
	// Enable datepicker on input field
	$("#date_picker").datepicker();

	// Enable autocomplete with available tech list
	var availableTechnologies = [
		"HTML", "CSS", "Java Script", "JQuery", "JQuery UI", "Java", "PHP"
	];
	$("#auto_complete").autocomplete({
		source: availableTechnologies
	});

	// Activate Bootstrap tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// Assign button click handlers to functions
	$("#cookie_button").click(setCookie);
	$("#reverse_button").click(() => reverseString(reverse_input.value));
	$("#max_of_two_button").click(() => maxOfTwoNumbers(Number(num1.value), Number(num2.value)));
	$("#longest_word_button").click(() => longestWord(longest_input.value));
});

// Load cookies on page startup and display stored values
if (document.cookie != "") {
	let items = document.cookie.split(";");
	for (let item of items) {
		item = item.trim();
		if (item.startsWith("name="))
			display_name.innerText = item.substring(5);
		if (item.startsWith("phon="))
			display_phone.innerText = item.substring(5);
	}
}

// Find maximum of two numbers and show result
function maxOfTwoNumbers(a, b) {
	if (!a || !b) return alert("Enter numbers");
	max_number_result.innerText = (a > b ? a : b);
}

// Reverse a string and show output
function reverseString(str) {
	if (str == "") return alert("Enter string");
	string_reverse_result.innerText = str.split("").reverse().join("");
}

// Find the longest word from comma-separated list
function longestWord(str) {
	if (str == "") return alert("Enter string");
	let arr = str.split(",");
	let max = arr.reduce((a, b) => a.length > b.length ? a : b);
	longest_word_result.innerText = max.trim();
}

// Save name and phone into cookies and update display
function setCookie() {
	let name = user_name.value;
	let phone = user_phone.value;

	if (name == "" || phone == "") {
		return alert("Enter input");
	}

	document.cookie = `name=${name}`;
	document.cookie = `phon=${phone}`;

	display_name.innerText = name;
	display_phone.innerText = phone;

	$("#my_toast").fadeIn(400); // show toast with fade
	setTimeout(function () {	//set time out for toast
		$("#my_toast").fadeOut(400);
	}, 3000);
}
