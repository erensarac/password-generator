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
		ALERT_MSG("success", `${INPUT_RESULT.value} has been copied to clipboard!`)
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

function ALERT_MSG(type, msg) {
    if (document.querySelector("#notification") !== null) {
        document.querySelector("#notification").remove()
    }
    let divElement = document.createElement("DIV")
    document.body.append(divElement)
    divElement.id = "notification"
    divElement.classList.add("alert", `${type}`)
    divElement.innerText = msg
    divElement.style.opacity = "1"
    setTimeout(() => {
        divElement.style.opacity = "0"
        divElement.style.display = "none"
        divElement.remove()
    }, 2500)
}
