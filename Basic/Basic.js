const date = new Date()
const days = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`]
const mounths = [`january`, `february`, `march`, `april`, `may`, `june`, `july`, `august`, `september`, `october`, `november`, `december`]
const AmPm = hour => {
	return hour >= 12 ? `Pm` : `Am`

};
const getHoursAmPm = hour => {
	if (hour <= 12) {
		return hour
	} else {
		switch (hour) {
			case 13:
				return 1;
				break;
			case 14:
				return 2;
				break;
			case 15:
				return 3;
				break;
			case 16:
				return 4;
				break;
			case 17:
				return 5;
				break;
			case 18:
				return 6;
				break;
			case 19:
				return 7;
				break;
			case 20:
				return 8;
				break;
			case 21:
				return 9;
				break;
			case 22:
				return 10;
				break;
			case 23:
				return 11;
				break;
		}
	}
};
let body = document.querySelector("body")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let button = document.createElement("button")
let h3 = document.createElement("h3")
h1.innerText = `Today is : ${days[date.getDay()]} `
h2.innerText = `Current time is : ${getHoursAmPm(date.getHours())}   ${AmPm(date.getHours)} : ${date.getMinutes()} :${date.getSeconds()} `
button.innerText = `print`
h3.innerText = `the mounths is : ${mounths[date.getMonth()]} of ${date.getFullYear()}`
body.append(h1)
body.append(h2)
body.append(button)
h2.prepend(h3)


button.addEventListener('click', () => {
	window.print()
})





const triangleArea = (l1, l2, l3) => {
	const s = (l1 + l2 + l3) / 2
	return Math.sqrt(s * ((s - l1) * (s - l2) * (s - l3)))
}



let string = `w3resource`
const arrString = string.split("")
arrString.reverse()
const newString = arrString.join("")


const leapYear = (year) => {
	if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
		return `${year } : is a leap year`
	} else {
		return `${year} : is not a leap year`
	}
}



const generateDate = (y1, y2) => {
	const dates = []
	for (let index = y1; index <= y2; index++) {
		dates.push(new Date(index, 1, 1))
	}
	return dates
}
const findSunday1stJanuary = (y1, y2) => {
	const dates = generateDate(y1, y2)
	const result = []
	for (let index = 0; index < dates.length; index++) {
		if (dates[index].getDay() === 0) {
			result.push(dates[index].getFullYear())
		}
	}
	return result
}

const hr = document.createElement("hr")
body.append(hr)


const label = document.createElement("label")
label.innerText = `guess number between 0 and 10 :`
const input = document.createElement("input")
const submit = document.createElement("button")
submit.innerText = `submit`

body.append(label)
body.append(input)

body.append(submit)
const randomNumber = () => {
	return ~~(Math.random() * 10)

}


submit.addEventListener('click', () => {
	const randomNumberTo10 = randomNumber() + ''
	// const randomNumberTo10 = 8 + ""
	if (input.value === randomNumberTo10) {
		alert(`good work`)
	} else {
		alert(`not matched`)
	}
})

const hr2 = document.createElement("hr")
body.append(hr2)

const calculLeftDayForChristmas = () => {
	const currentDate = new Date()
	let count = 0
	console.log(currentDate.getMonth())
	while (currentDate.getMonth() !== 0) {
		currentDate.setDate(currentDate.getDate() + 1)
		count++
	}
	return count
}

const firstLabelNumber = document.createElement("label")
const firstInputNumber = document.createElement("input")
const secondeLabelNumber = document.createElement("label")
const secondeInputNumber = document.createElement("input")
const multiplyButton = document.createElement("button")
const divideButton = document.createElement("button")
const resultH1 = document.createElement("h1")
const br = document.createElement("br")
const br2 = document.createElement("br")
const br3 = document.createElement("br")
const br4 = document.createElement("br")
const br5 = document.createElement("br")

firstLabelNumber.innerHTML = `first Number :&nbsp`
secondeLabelNumber.innerHTML = `seconde Number :&nbsp`
multiplyButton.innerHTML = `Multiply&nbsp`
divideButton.innerHTML = `divide&nbsp`
resultH1.innerText = `The Result is : `
const resultNumber = document.createElement('h2')
firstInputNumber.setAttribute('type', 'number')
secondeInputNumber.setAttribute('type', 'number')
body.append(firstLabelNumber)
body.append(firstInputNumber)
body.append(br)
body.append(br4)
body.append(secondeLabelNumber)
body.append(secondeInputNumber)
body.append(br2)
body.append(br3)
body.append(multiplyButton)
body.append(divideButton)
body.append(br5)
body.append(resultH1)
body.append(resultNumber)

resultNumber.style.backgroundColor = 'red'
resultNumber.style.display = 'inline'
resultH1.style.display = 'inline'
multiplyButton.addEventListener('click', () => {

	const result = firstInputNumber.value * secondeInputNumber.value
	resultNumber.innerText = `${result}`


})


divideButton.addEventListener('click', () => {
	const result = firstInputNumber.value / secondeInputNumber.value
	resultNumber.innerText = `${result}`

})


const hr3 = document.createElement("hr")
body.append(hr3)


const insertTemp = document.createElement('h2')
insertTemp.innerText = `insert temperature`
const inputTemperatureCel = document.createElement('input')
const inputTemperatureFeh = document.createElement('input')
inputTemperatureFeh.setAttribute('readonly', '')
inputTemperatureCel.setAttribute('type', 'number')
const br6 = document.createElement('br')
const equal = document.createElement('span')
equal.innerHTML = `&nbsp&nbsp&nbsp=&nbsp&nbsp&nbsp`
const space = document.createElement('span')
space.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
const list1 = document.createElement('input')
list1.setAttribute('list', 'tempType')
list1.setAttribute('placeholder', 'choose temperature type')
const dataList = document.createElement('datalist')
dataList.setAttribute('id', 'tempType')
const optionCel = document.createElement('option')
optionCel.setAttribute('value', 'celsius')
const optionFeh = document.createElement('option')
optionFeh.setAttribute('value', 'fahrenheit')
dataList.append(optionCel)
dataList.append(optionFeh)
const list2 = document.createElement('input')
list2.setAttribute('list', 'tempType2')
list2.setAttribute('placeholder', 'choose temperature type')
const dataList2 = document.createElement('datalist')
dataList2.setAttribute('id', 'tempType2')
const optionCel2 = document.createElement('option')
optionCel2.setAttribute('value', 'celsius')
optionCel2.innerText = `celsius`
const optionFeh2 = document.createElement('option')
optionFeh2.setAttribute('value', 'fahrenheit')
optionFeh2.innerText = `fahrenheit`
dataList2.append(optionCel2)
dataList2.append(optionFeh2)
body.append(insertTemp)
body.append(inputTemperatureCel)
body.append(equal)
body.append(inputTemperatureFeh)
body.append(br6)
body.append(list1)
body.append(dataList)
body.append(space)
body.append(list2)
body.append(dataList2)
inputTemperatureCel.addEventListener('input', (e) => {
	if (list1.value === list2.value) {
		inputTemperatureFeh.value = e.target.value
	} else if (list1.value === `celsius`) {
		if (list1.value === `fahrenheit`) {

			inputTemperatureFeh.value = +e.target.value * (9.0 / 5.0) + 32.0
		} else {
			inputTemperatureFeh.value = `choose type below`
		}
	} else {
		inputTemperatureFeh.value = +e.target.value / (9.0 / 5.0) + 32.0

	}
})
const hr4 = document.createElement("hr")
body.append(hr4)

const getURL = () => window.location.href

const getExtensionFileName = (name) => name.split('.').pop()

const deferenceTwoNumber = (n1) => (n2) => n1 > n2 ? n1 - n2 : Math.abs(n1 - n2)
const deference13Number = deferenceTwoNumber(13)
console.log(deference13Number(1))

const sumTwoInteger = (intOne, intTwo) => (intOne === intTwo) ? 3 * (intOne + intTwo) : intOne + intTwo
console.log(sumTwoInteger(2, 2))

const checkSignNumber = (Numb) => (Math.sign(Numb) >= 0) ? `positive` : `negative`
console.log(checkSignNumber(-13))