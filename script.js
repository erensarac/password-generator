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
    console.log('fakyu');
  }
  else {
    navigator.clipboard.writeText(INPUT_RESULT.value);
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
    let accordionSection = e.parentElement.parentElement
    if (accordionSection.classList.contains("active")) {
      e.style.transform = "rotate(0)";
      accordionSection.classList.toggle('active');
    } else {
      e.style.transform = "rotate(180deg)";
      accordionSection.classList.toggle('active');
    }
  })
});
