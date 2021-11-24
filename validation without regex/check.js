const checkBoolean = (value) => {
	if (typeof (value) === `boolean`) {
		return true
	}
	return false
}
// console.log(checkBoolean(false))

const checkNaN = (num) => {
	if (isNaN(num)) {
		return true
	}
	return false
}
// console.log(checkNaN(0/0))