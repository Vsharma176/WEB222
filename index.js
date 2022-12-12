// Adding Parallax

let mountain = document.querySelector(".mountain");

window.addEventListener("scroll", function () {
	var value = window.scrollY;

	mountain.style.bottom = -value * 0.02 + "%";
});

// Validating postal code
let codeInput = document.getElementById("postal-code");
let label = document.getElementById("postal-label");

codeInput.addEventListener("input", function () {
	var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
	if (regEx.test(codeInput.value)) {
		label.innerText = "Valid Code";
	} else {
		label.innerText = "Invalid Code";
	}
});
