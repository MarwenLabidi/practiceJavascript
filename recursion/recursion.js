const factorial = () => {
	const cache = {}
	return factorials = (number) => {
		if (cache[number]) {
			return cache[number]
		}
		if (number < 2) {
			cache[number] = 1
			return 1
		} else {
			cache[number] = number * factorials(number - 1)
			return number * factorials(number - 1)
		}
	}
}
// console.log(factorial()(5))

//memoization  with weakMap first time i try it its so cool
const gcd = (number1, number2) => {
	let weakMaps = new WeakMap()
	const o = {
		number1,
		number2
	}
	return gcdTwoNumber = (number1, number2) => {
		if (weakMaps.get(o)) {
			return weakMaps.get(o)
		}
		let max = ~~Math.max(number1, number2)
		let min = ~~Math.min(number1, number2)
		let quotient = ~~(max / min)
		let rest = max % min
		if (rest === 0) {
			weakMaps.set(o, min)
			return weakMaps.get(o)
		} else {
			return gcdTwoNumber(min, rest)
		}
	}
}
// console.log(gcd(45, 10)(45, 10))


// use memoization with weakMap
const recursiveRanges = (n1, n2) => {
	const result = []
	const o = {
		n1,
		n2
	}
	const weakMaps = new WeakMap()
	return recursiveRange = (n1, n2) => {
		if (weakMaps.get(o)) {
			return weakMaps.get(o)
		}
		if (n2 - n1 === 2) {
			result.unshift(n1 + 1)
			return n1 + 1
		} else {
			result.unshift(n2 - 1)
			recursiveRange(n1, n2 - 1)
			weakMaps.set(o, result)
			return weakMaps.get(o)

		}
	}
}
// console.log(recursiveRanges(1,6)(1, 6))
const sumArrr = () => {
	let result = 0
	let cache = {}
	return sumArr = (...number) => {
		if (cache[JSON.stringify(number)]) {
			return cache[JSON.stringify(number)]
		}
		if (number.length === 0) {
			return 0
		} else {
			let num = number.pop()
			result += num
			sumArr(...number)
			cache[JSON.stringify[number]] = result
			return result
		}
	}
}
// console.log(sumArrr()(1, 2, 3, 4))
const exponents = (num, power) => {
	let cache = new WeakMap()
	const o = {
		num,
		power
	}
	return exponent = (num, power) => {
		if (cache.get(o)) {
			return cache.get(o)
		}
		if (power === 1) {
			return num
		} else {
			cache.set(o, num * exponent(num, power - 1))
			return cache.get(o)
		}
	}
}
// console.log(exponents(2, 3)(2, 3))
const sort = (arrOne, arrTwo) => {
	if (arrOne[0] > arrTwo[0]) {
		return [...arrTwo, ...arrOne]
	} else {
		return [...arrOne, ...arrTwo]
	}
}
const mergeSort = (arr) => {
	// find the middle
	let middle = ~~((arr.length) / 2)
	//arr1 slice until the middle
	let arrOne = arr.slice(0, middle)
	//arr2 slice from the middle until the end
	let arrTwo = arr.slice(middle)
	//if arr.length ===2 sort the arr and combine it : use spread operator t combine
	if (arrOne.length === 1 && arrTwo.length === 1) {
		return sort(arrOne, arrTwo)
	} else {
		if (arrOne.length !== 1) {
			mergeSort(arrOne)
		}
		if (arrTwo.length !== 1) {
			mergeSort(arrOne)
		}
		return sort(mergeSort(arrOne), mergeSort(arrTwo))
	}
}
const arrtest = [4, 3, 2, 1]
// console.log(mergeSort(arrtest))