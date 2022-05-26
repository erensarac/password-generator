let charset = ""
let passwordResult = ""

const INPUT_RESULT = document.querySelector("#result-input")
const LABEL_VALUE = document.querySelector("#input-value")

const INPUT_RANGE = document.querySelector("#range-selector")
INPUT_RANGE.addEventListener("input", CREATE_PASSWORD)

const BUTTON_CREATE = document.querySelector('#create-btn');
BUTTON_CREATE.addEventListener('click', CREATE_PASSWORD);

const BUTTON_COPY = document.querySelector('#copy-btn');
BUTTON_COPY.addEventListener('click', () => {
	if (INPUT_RESULT.value == "") {
		ALERT_MSG("error", "Result is blank, please firstly create password!")
	}
	else {
		navigator.clipboard.writeText(INPUT_RESULT.value);
		// ALERT_MSG("success", `${INPUT_RESULT.value} has been copied to clipboard!`)
		ALERT_MSG("success", `Password has been copied to clipboard!</p>`)
	}
})
document.addEventListener("DOMContentLoaded", CREATE_PASSWORD());
function CREATE_PASSWORD() {
	const CHARSET = {
		uppercase: document.querySelector("#charset-uppercase").checked,
		lowercase: document.querySelector("#charset-lowercase").checked,
		number: document.querySelector("#charset-number").checked,
		symbol: document.querySelector("#charset-symbol").checked
	}
	if (CHARSET.uppercase === true) { charset += "QWERTYUIOPASDFGHJKLZXCVBNM" }
	if (CHARSET.lowercase === true) { charset += "qwertyuiopasdfghjklzxcvbnm" }
	if (CHARSET.number === true) { charset += "1234567890" }
	if (CHARSET.symbol === true) { charset += "~!@#$%^&*())_+=-/<>?" }
	for (let i = 0; i < INPUT_RANGE.value; i++) {
		passwordResult += charset.charAt(Math.floor(Math.random() * charset.length))
	}
	INPUT_RESULT.value = passwordResult
	LABEL_VALUE.textContent = INPUT_RANGE.value
	passwordResult = "";
	charset = "";
}

let accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(e => {
  e.addEventListener('click', () => {
    let listElement = e.parentElement.parentElement.children[1]
    if (listElement.classList.contains("active")) {
      e.style.transform = "rotate(0)";
      listElement.classList.toggle('active');
    }else {
      e.style.transform = "rotate(180deg)";
      listElement.classList.toggle('active');
    }
  })
});
