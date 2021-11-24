const compareTwoObjects = () => {
	const equivalentProperty = []
	return (obj1, obj2) => {
		const obj1Keys = Object.keys(obj1)
		for (const element of obj1Keys) {
			if (obj2[element]) {
				equivalentProperty.push(element)
			}
		}
		if (equivalentProperty.length > 0) {
			return equivalentProperty
		} else {
			return `there is not equivalent property`
		}
	}
}

const objOne = {
	one: 1,
	two: 2,
	three: 3
}
const objTwo = {
	three: 3,
	four: 4,
	five: 5
}

// console.log(compareTwoObjects()(objOne, objTwo))

const body = document.querySelector('body')
const copyInput = document.createElement('input')
const copyParagraph = document.createElement('p')
copyParagraph.innerText = `if you want to select me just click on me : i use a css property to make this functionality so feel free to copy me !!! come on do it copy me why are you a pussy ?? are you scary ? `
copyParagraph.style.userSelect = `all`
const copyButton = document.createElement('button')
copyButton.innerText = `copy`
body.append(copyInput)
body.append(copyParagraph)
body.append(copyButton)

copyButton.addEventListener('click', () => {
	(copyInput.value) && copyInput.select()
	document.execCommand('copy')
})

const CSVString = `Manufacturer,Model,Sales in thousands,4-year resale value,Vehicle type,Price in thousands,Engine size,Horsepower,Wheelbase,Width,Length,Curb weight,Fuel capacity,Fuel efficiency,Latest Launch
Acura        ,Integra          ,16.919,16.36,Passenger,21.5,1.8,140,101.2,67.3,172.4,2.639,13.2,28,2-Feb-14
Acura        ,TL               ,39.384,19.875,Passenger,28.4,3.2,225,108.1,70.3,192.9,3.517,17.2,25,6-Mar-15
Acura        ,CL               ,14.114,18.225,Passenger,.,3.2,225,106.9,70.6,192,3.47,17.2,26,1-Apr-14
Acura        ,RL               ,8.588,29.725,Passenger,42,3.5,210,114.6,71.4,196.6,3.85,18,22,3-Oct-15
Audi         ,A4               ,20.397,22.255,Passenger,23.99,1.8,150,102.6,68.2,178,2.998,16.4,27,10-Aug-15
Audi         ,A6               ,18.78,23.555,Passenger,33.95,2.8,200,108.7,76.1,192,3.561,18.5,22,8-Sep-15`

const convertCSVTo2DArray = (csv) => {
	const row = csv.split('\n')
	const titles = row[0].split(',')
	const result = new Array()
	for (let index = 0; index < row.length; index++) {
		const obj = {
			...row[index].split(',')
		}
		result.push(obj)

	}
	return result
}
const CSVObject = convertCSVTo2DArray(CSVString)
// console.log(CSVObject)
const convertObjToCSV = () => {
	let final = []
	return (obj) => {
		for (const element of obj) {
			let arr = Object.values(element)
			let str = arr.join('')
			final.push(str)
		}
		return final.join('')
	}
}
// console.log(convertObjToCSV()(CSVObject))
const nestedJsonObject = {
	"one": 1,
	"two": 2,
	"three": 3,
	"four": {
		"quatre": {
			"arb3a": {
				"value": 4
			}
		}
	}
}
const targetNestedValue = (key, jsonObject) => {
	const arrJson = Object.entries(jsonObject)
	for (let index = 0; index < arrJson.length; index++) {
		if (arrJson[index][0] === key) {
			return arrJson[index][1]
		} else if (typeof (arrJson[index][1]) === 'object') {
			return targetNestedValue(key, arrJson[index][1])
		}

	}
	return `there is not this key in this object`
}
// console.log(targetNestedValue("value", nestedJsonObject))
convertNumberToDigits = (num) => {
	stringNum = num + ''
	arrNum = stringNum.split('').map(element => {
		return +element
	});
	return arrNum
}
// console.log(convertNumberToDigits(122))

filterFromArray = (value, arr) => {
	const result = arr.filter((element) => {
		return element !== value
	})
	return result
}


const array = [1, 2, 3, 4, 5]
const extract = (index) => {
	const value = array.splice(index, 1, array[index])
	return value
}

const randomNumber = () => {
	return ~~(Math.random() * 15)

}
const generateRandomColor = () => {
	const colorCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]
	return '#' + colorCharacter[randomNumber()] + colorCharacter[randomNumber()] + colorCharacter[randomNumber()] + colorCharacter[randomNumber()] + colorCharacter[randomNumber()] + colorCharacter[randomNumber()];
}
// console.log(generateRandomColor())

const removeNonPrintableAscii = (txt) => {
	return txt.replace(/[^ -~]+/g, '');
}
const convertStringLengthToByte = (str) => {
	const blob = new Blob([str])
	return blob.size
}

const objTest = {
	one: 1,
	two: 2,
	three: 3,
	four: 4
}

const replaceKeysNamesI = (obj) => {
	return (...keys) => {
		return (...names) => {

			for (let index = 0; index < names.length; index++) {
				obj[names[index]] = obj[keys[index]]
				delete obj[keys[index]]
			}
			return obj
		}
	}
}

const replaceKeysNamesII = (obj) => {
	return (...keys) => {
		return (...names) => {
			//convert object to array
			const arrObj = Object.entries(obj)
			//change the key name
			for (let index = 0; index < arrObj.length; index++) {
				for (let index2 = 0; index2 < names.length; index2++) {
					if (arrObj[index][0] === keys[index2]) {
						arrObj[index2][0] = names[index2]
					}
				}

			}
			//convert the array to object
			const result = Object.fromEntries(arrObj)
			//return the result
			return result
		}
	}
}
// console.log(replaceKeysNamesII(objTest)(`one`, `two`)(`whded`, `thnin`))

const arr = [1, undefined, 3, null, 5, 0, -7]
console.log(!!undefined)
const arrayMinMax = (arr) => {
	return `max:${Math.max(...arr)}
	min:${Math.min(...arr)}`
}
// console.log(arrayMinMax(arr))

const splitTruthyFalsy = (arr) => {
	const truthy = arr.filter((element) => !!element == true)
	console.log(arr)
	console.log(truthy)
	const falsy = arr.filter((element) => !!element == false)
	console.log(falsy)
	return `truthy:${truthy}
	falsy:${falsy}`
}
// console.log(splitTruthyFalsy(arr)) // javascript consider negative value truthy

const color = `#FFF`
const extendColor = (color3digit) => {
	const arr = color3digit.split('')
	arr.splice(1, 0, arr[1])
	arr.splice(2, 0, arr[2])
	arr.splice(3, 0, arr[3])
	return arr.join('')
}
// console.log(extendColor(color))