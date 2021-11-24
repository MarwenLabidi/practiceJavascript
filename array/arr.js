const checkArr = (value) => {
	return Array.isArray(value)
}
// console.log(checkArr([]))

// clone array if there is no nested array 
const cloneSpread = (arr) => {
	return [...arr]
}
// clone arr if there is nested array
const cloneJson = (arr) => {
	return JSON.parse(JSON.stringify(arr))
}
// clone arr if nested and there is null undefined and date value on it 
const cloneLodash = (arr) => {
	return cloneCopy = cloneDeep(arr)
}
// console.log(cloneLodash([1, 2, 3, 4, 5]))

const getNElementArr = (arr, num) => {
	const arrN = [...arr]
	const element = arrN.splice(num, 1)
	return element
}
// console.log(getNElementArr([1,2,3,4,5],2))

const mostFrequentIem = (arr) => {
	let value = 0
	const elementCount = arr.reduce((acc, curr) => {
		count = 0
		if (acc[curr]) {
			acc[curr]++
		} else {
			acc[curr] = count + 1
		}
		return acc
	}, {})
	const values = Object.values(elementCount)
	const maxValues = Math.max(...values)
	Object.entries(elementCount).forEach(([key, value]) => {
		if (value === maxValues) {
			re = key
		}
	})
	console.log(re)
	return `most frequented item is ${re} : ${maxValues} times `
}
// console.log(mostFrequentIem([1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5]))

const swapCase = (txt) => {
	const arrTxt = txt.split('')
	const newArrTxt = arrTxt.map((element) => {
		if (element === element.toUpperCase()) {
			return element.toLowerCase()
		} else {
			return element.toUpperCase()
		}
	})
	return newArrTxt.join('')
}
// console.log(swapCase(`Hello World`))

const body = document.querySelector('body')

const input = document.createElement('input')
const addButton = document.createElement('button')
const displayButton = document.createElement('button')
addButton.innerText = `add`
displayButton.innerText = `display`
body.append(input)
body.append(addButton)
body.append(displayButton)

const arr = []
addButton.addEventListener('click', () => {
	arr.push(input.value)
})
displayButton.addEventListener('click', () => {
	for (let index = 0; index < arr.length; index++) {
		const show = document.createElement('h3')
		show.innerText = `${index} : ${arr[index]}`
		body.append(show)
	}
})


const removeDuplicateItems = (arr) => {
	return [...new Set(arr)]
}
// console.log(removeDuplicateItems([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 55, 55]))
const arrSh = [1, 2, 3, 4, 5]
const shuffleArr = (arr) => {
	return arr.sort(() => Math.random() - 0.5)
}
shuffleArr(arrSh)
// console.log(arrSh)

const flatArr = (arr, num) => {
	console.log(arr.flat(num))
	return arr.flat(num)
}

// console.log(flatArr([[1],[2],3,23,[[2]]],2))