const worker = new Worker('worker.js')
worker.postMessage('doWork')
worker.onmessage = (e) => {
	console.log(e.data)
}

const reverse = (text) => {
	const arrTxt = text.split('').reverse().join('')
	return arrTxt
}
// console.log( reverse(`hello world`))

const returnFalsyObject = (...key) => {
	return (...value) => {

		const result = {}
		for (let index = 0; index < value.length; index++) {

			if (!!value[index] === false) {
				result[key[index]] = value[index]
			}
		}
		return result
	}

}
// console.log(returnFalsyObject(`one`, `two`, `null`)(0, 2, null))
const arrayPredicate = [1, 2, 3, 4, 5, 6]
const even = (num) => {
	if (num % 2 === 0) {
		return true
	}
	return false
}

const falsyPredicateResult = (arr, Predicate) => {
	const filterArr = arr.filter((element) => {
		return Predicate(element) === false
	})
	return filterArr
}

// console.log(even(10))
// console.log(falsyPredicateResult(arrayPredicate, even))

const accumulator = (arr) => {
	const result = []
	arr.reduce((acc, curr) => {
		return result.push(acc)
		acc += curr
	}, 0)
	console.log(result)
}
// console.log(accumulator(arrayPredicate))

const redirectURL = (site = `linkedin`) => {
	if (site === `linkedin`) {
		window.location.href = 'https://www.linkedin.com/in/marwen-labidi-5a9082142/'
	} else {
		window.location.href = 'https://github.com/marwenez'
	}
}
// redirectURL(`fff`)

const sum = (...num) => {
	let sm = 0
	for (let iterator of num) {
		sm += iterator
	}
	return sm
}
// console.log(sum(1,2,3,100,3,4,4,5))
const invokeSum = (fct) => (...num) => fct(...num)

// console.log(invokeSum(sum)(1, 2, 3, 4))

//* read a file form input type file
const body = document.querySelector('body')
const input = document.createElement('input')
input.setAttribute('type', 'file')
body.append(input)
input.addEventListener('change', () => {
	const reader = new FileReader()
	reader.readAsText(input.files[0])
	reader.onload = (e) => {
		console.log(e.target.result)
	}
})

// //*read a local file with fetish api 

const createRequest = (str) => {
	return new Request(str)
}

const readLocalFile = async (txt) => {
	try {
		const response = await fetch(createRequest(txt))
		const data = await response.text()
		return data
	} catch (error) {
		console.log(`can't read `)
	}
}
// readLocalFile(`../json.json`)

const getArrOfLineFile = async (data) => {
	try {
		const d = await data
		console.log(d.split('\n'))
	} catch (error) {
		console.log(error)
	}
}
// getArrOfLineFile(readLocalFile(`../json.json`))

const arr = [1, 2, 3, 4, 5, 6]
const iterators = (arr) => {
	return arr.map((elm) => elm * 90)
}

const filterArrIteratorF = (arr, iterators) => {
	return iterators(arr).filter((elements) => elements < 100)
}
// // console.log(filterArrIteratorF(arr,iterators))

const convertFileSizeToHumanReadableString = (size) => {
	const sizeType = [`B`, `KB`, `MB`, `GB`, `TB`]
	let i = 0;
	let sz = size
	while (sz > 1024) {
		sz = sz / 1024
		i++
	}
	return `size=${sz.toFixed(2)} ${sizeType[i]}`
}
// console.log(convertFileSizeToHumanReadableString(2222222222))
const f1 = (a) => a + 2
const f2 = (a = 0, b = 0, c = 0, d = 0) => a + b + c + d

const compose = (...f) => (...args) => {
	return f.reduce((acc, curr) => acc(curr(...args)))
}
// console.log(compose(f1, f2)(1, 2, 5, 6, 7))
const arrFormula = [2, 2, 2, 2, 2, 3]
const percentileFormulaArr = (num, arr) => {
	const count = []
	arr.reduce((acc, curr) => {
		if (acc === num) {
			count.push(acc)
		}
		if (curr === num) {
			count.push(curr)
		}
	})
	return `${(((count.length)/6)*100).toFixed(1)}%`

}
// console.log(percentileFormulaArr(2,arrFormula))
const sum = (x, y) => {
	return x + y
}
// console.log(sum(1,1))

const sum2 = sum.bind(null, 2)
// console.log(sum2(2)

// console.log(performance.now())