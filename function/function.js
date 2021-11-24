const reverseNumber = (num) => {
	const stringNum = num + ''
	const arrNum = stringNum.split('')
	return arrNum.reverse().join("")

}
// console.log(reverseNumber(12345))

const palindrome = (txt) => {
	//convert text to array
	const arrTxt = txt.split('')
	//loop over it and test if the first letter is the same of last later ....
	let i = 0
	let j = arrTxt.length - 1
	while (i !== j) {
		if (arrTxt[i] !== arrTxt[j]) {
			return false
		}
		i++
		j--
	}
	return true

}

// console.log(palindrome('coc'))

const arrCombination = [`a`, `b`, `c`]

const combination = () => {

	let result = [...arrCombination]
	let i = 0
	const lengths = arrCombination.length
	result.push([])
	return comb = (arr) => {
		let first = arr.splice(i, 1)
		i++
		if (result.length < (2 ** lengths) - 1) {
			for (let index = 0; index < result.length; index++) {
				if (result[index].includes(first) === false && result.includes(first + result[index]) === false && result.includes(result[index] + first) === false) {
					result.push(first + result[index])
				}
			}
			let r2 = [...result]
			comb(r2)
		}
		return result
	}
}
// console.log(combination()(arrCombination))


const alphabeticalOrder = (txt) => {
	//check the input it should be only letters [a-z]
	if (txt.match(/^[A-Za-z]+$/g)) {
		// covert uppercase to lowercase
		const lowerCase = txt.toLowerCase()
		//convert a text to array
		const arrTxt = lowerCase.split('')
		//use array sort methods it use asci code
		const result = arrTxt.sort()
		// convert array to text and return the result
		return result.join('')
	}
	return `check the input it should be only alphabet letters no numbers or symbol alow`
}

// console.log(alphabeticalOrder(`helloworlD`))

const convertFirstLetterUpperCase = (str) => {
	return str[0].toUpperCase() + str.slice(1)
}
// console.log(convertFirstLetterUpperCase(`hello world`))


const findLongestLetter = (str) => {
	const arrStr = str.split(' ')
	const arrLength = arrStr.map((element) => {
		return element.length
	})
	const max = Math.max(...arrLength)
	return arrStr.filter((element) => {
		return element.length >= max
	})
}
// console.log(findLongestLetter(`Web Development Tutorial`))

const countVowels = (str) => {
	const vowels = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true
	}
	let count = 0
	const arr = str.split('')
	arr.forEach((element) => vowels[element] && count++)
	return count
}
// console.log(countVowels(`The quick brown fox`))

const primeNumber = (number) => {
	if (number >= 1 && number % number === 0 && number % 1 === 0) {
		return true
	}
	return false
}
// console.log(primeNumber(2))

const typeOf = (arg) => {
	return typeof (arg)
}
// console.log(typeOf(2))

const LowestGreatestNumber = (arr) => {
	const max = Math.max(...arr)
	const min = Math.min(...arr)
	return {
		max,
		min
	}
}
const secondeLowestGreatestNumber = (arr) => {
	const maxMin = LowestGreatestNumber(arr)
	const indexMax = arr.indexOf(maxMin.max)
	const indexMin = arr.indexOf(maxMin.min)
	arr.splice(indexMax, 1)
	arr.splice(indexMin, 1)
	return LowestGreatestNumber(arr)
}
// console.log(secondeLowestGreatestNumber([1,2,3,4,5]))
const numDivisor = (num) => {
	const divisor = []
	for (let index = 0; index < num; index++) {
		if (num % index === 0) {
			divisor.push(index)
		}
	}
	return divisor
}
// console.log(numDivisor(15))

const perfectNumber = (num) => {
	//check if it positive
	// search for  divisors
	const arrDivisor = numDivisor(num)
	// the sum of divisors
	const sumDivisor = arrDivisor.reduce((acc, curr) => {
		return acc + curr
	})
	// equal to the sum of divisors with it self divide with 2
	//6 the divisor are 1+2+3=6 and (1+2+3+6)/2=6
	if (num >= 0 && sumDivisor === num && (sumDivisor + num) / 2 === num) {
		return true
	} else {
		return false
	}
}
// console.log(perfectNumber(6))
const amountToCoins = (amount, ...coins) => {
	let result = 0;
	const usedCoins = []
	while (result < amount) {
		for (let index = 0; index < coins.length; index++) {
			if (result + coins[index] <= amount) {
				result += coins[index]
				usedCoins.push(coins[index])
			}

		}
	}
	return usedCoins
}
// console.log(amountToCoins(100, 10, 20, 50))
const extractUniqueCharacter = (txt) => {
	const arrTxt = txt.split('')
	const objTxt = {}
	const result = []
	for (let index = 0; index < arrTxt.length; index++) {
		if (!objTxt[arrTxt[index]]) {
			result.push(arrTxt[index])
			objTxt[arrTxt[index]] = true
		}
	}
	return result.join('')
}
// console.log(extractUniqueCharacter(`abcdabcsabcs`))

const binarySearch = (value, arrSort) => {
	let valueInHalf = arrSort[~~((arrSort.length - 1) / 2)]
	if (value === valueInHalf) {
		return `we found it at index :${~~((arrSort.length-1)/2)}`
	} else if (value < valueInHalf) {
		for (let index = 0; index < ~~((arrSort.length - 1) / 2); index++) {
			if (value === arrSort[index]) {
				return `we found it at index : ${index}`
			}
		}
	} else if (value > valueInHalf) {
		for (let index = ~~((arrSort.length - 1) / 2); index < arrSort.length; index++) {
			if (value === arrSort[index]) {
				return `we found it at index : ${index}`
			}
		}
	}
	return `not found`

}
// console.log(binarySearch(0, [1, 2, 3, 4, 5]))