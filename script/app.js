let charset = ""
let passwordResult = ""
const INPUT_RANGE = document.querySelector("#password-length")
const REFRESH_BUTTON = document.querySelector("#refresh-button")
const COPY_BUTTON = document.querySelector("#copy-button")
const INPUT_RESULT = document.querySelector("#password-result")
const LABEL_VALUE = document.querySelector("#input-value")
const PASSWORD_SECURITY = document.querySelector("#password-security")

let charsetUpperCase = document.querySelector("#charset-uppercase")
let charsetLowerCase = document.querySelector("#charset-lowercase")
let charsetNumber = document.querySelector("#charset-number")
let charsetSymbol = document.querySelector("#charset-symbol")

INPUT_RANGE.addEventListener("input", createPassword)
REFRESH_BUTTON.addEventListener("click", () => {
	REFRESH_BUTTON.classList.add("spin")
	setTimeout(()=>{
		REFRESH_BUTTON.classList.remove("spin")
		createPassword()
	}, 500)
	
})

COPY_BUTTON.addEventListener("click", ()=>{

})

function copyClipboard(){
	if (passwordResult !== ""){
		navigator.clipboard.writeText(passwordResult);
		console.log(passwordResult);
	} else {
		
	}
}

function createPassword() {
	passwordResult = ""
	if (INPUT_RANGE.value == null) PASSWORD_SECURITY.style.width = "100%"
	if (charsetUpperCase.checked == true) charset += "QWERTYUIOPASDFGHJKLZXCVBNM"
	if (charsetLowerCase.checked == true) charset += "qwertyuiopasdfghjklzxcvbnm"
	if (charsetNumber.checked == true) charset += "1234567890"
	if (charsetSymbol.checked == true) charset += "~!@#$%^&*())_+=-/<>?"

	for (let i = 0; i < INPUT_RANGE.value; i++){
		passwordResult += charset.charAt(Math.floor(Math.random() * charset.length))
	}
	if (INPUT_RANGE.value < 8) {
		PASSWORD_SECURITY.style.backgroundColor = "#e74c3c"
		PASSWORD_SECURITY.style.width = "20%"
	} else if (INPUT_RANGE.value < 16) {
		PASSWORD_SECURITY.style.backgroundColor = "#f1c40f"
		PASSWORD_SECURITY.style.width = "50%"
	} else {
		PASSWORD_SECURITY.style.backgroundColor = "#2ecc71"
		PASSWORD_SECURITY.style.width = "100%"
	}
	INPUT_RESULT.value = passwordResult
	LABEL_VALUE.textContent = INPUT_RANGE.value 
	charset = ""
} 

function saveToList(password, security, createdDate) {
	let passwordList = []
    if (localStorage.getItem("passwords") === null) { passwordList = [] } 
    else { passwordList = JSON.parse(localStorage.getItem("passwords")) }
    passwordList.push({
        "Password": password,
        "is it Strong": security,
        "Created Date": createdDate
    })
    localStorage.setItem("passwords", JSON.stringify(passwordList))
}
