// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

const starsTriangle = (height) => {
	const arr2D = []
	for (let index = 1; index <= height; index++) {
		arr2D.push([`*`.repeat(index)])
	}
	for (let index = 0; index < arr2D.length; index++) {
		console.log(arr2D[index][0])
	}
}
// starsTriangle(5)

const armstrongNumber = (num) => {
	const str = num + ``
	const arr = str.split('')
	let result = arr.reduce((acc, curr) => {
		return acc += curr ** 3
	}, 0)
	if (result === num) {
		return true
	}
	return false
}
// console.log(armstrongNumber(371))