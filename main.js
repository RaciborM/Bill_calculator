const moneyInput = document.querySelector('.money-amount')
const peopleInput = document.querySelector('.people-amount')
const tipInput = document.querySelector('.tip-amount')

const lastValueP = document.querySelector('.money-info')
const lastValue = document.querySelector('.cost')
const errorInfo = document.querySelector('.error')
const btn = document.querySelector('.btn')

const EmptyCheck = e => {
	if (moneyInput.value == 0 || peopleInput.value == 0) {
		errorInfo.style.display = 'block'
		lastValueP.style.display = 'none'
	} else {
		errorInfo.style.display = 'none'
		calc()
	}
}

const calc = e => {
	const money = parseFloat(moneyInput.value)
	const people = parseInt(peopleInput.value)
	const tipValue = parseFloat(tipInput.value)

	lastValueP.style.display = 'inline-block'

	let tip = tipValue
	if (tip == 0) {
		let bill = (money / people).toFixed(2)
		lastValue.textContent = bill
	} else {
		tip = money * tipValue
		let bill = ((money + tip) / people).toFixed(2)
		lastValue.textContent = bill
	}
}

btn.addEventListener('click', EmptyCheck)
