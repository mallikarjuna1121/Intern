
// jQuery code executes only after the entire document is ready
$(document).ready(function () {
	// Apply CSS to all input fields: light yellow background and no border
	$("input").css({
		"background-color": "#FFFF88",
		"border": "none"
	});
	// Apply border color and text color to elements with class 'table'
	$(".table").css({
		"border-color": "#FF1A00",
		"color": "#CC0000"
	});
	// Insert a References section dynamically before the footer row
	$("#footer").before("<tr><td colspan='2'><div class='references'><h3>References</h3><ul><li>reference-1</li><li>reference-2</li><li>reference-3</li></ul></div></td></tr>");
	// Header animation: starts with 10px height and expands to 60px on hover
	$("#mypage-header").css("height", "10px").mouseenter(function () {
		$(this).css("height", "60px");
	}).mouseleave(function () {
		$(this).css("height", "10px");
	});
	// Footer animation using slideDown() and slideUp()
	$("#my-footer").hide().slideDown(3000, function () {
		// Callback alert once animation completes
		alert("footer slide down animation is completed");
	});
	$("#findMax").click(function () {
		findMax(Number(num1.value), Number(num2.value));   // calling function from otherfile.js
	});
	$("#reverse").click(function () {
		reverseString(str.value);   // calling function from otherfile.js
	});
	$("#longWord").click(function () {
		longestWord(longest.value);   // calling function from otherfile.js
	});
	$("#cookie").click(function () {
		setCookie();   // calling function from otherfile.js
	});
})
