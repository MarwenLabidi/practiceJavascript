const testUppercaseFirstChar = (txt) => {
	if (txt.match(/^[A-Z]/)) {
		return true
	}
	return false
}
// console.log(testUppercaseFirstChar(`Hello`))

const checkCreditCard = (num) => {
	// visa and masterCard
	num = num + ''
	if (num.match(/^4[0-9]{12}(?:[0-9]{3})?$/) || num.match(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/)) {
		return true
	}
	return false
}
// console.log(checkCreditCard(5326707926886116))

const searchDateString = (txt) => {
	if (txt.match(/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/)) {
		return true
	}
	return false
}
// console.log(searchDateString(`01/22/2015`))

const checkIPAdress = (txt) => {
	if (txt.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)) {
		return true
	}
	return false
}
// console.log(checkIPAdress(`255.255.255.255`))

const checkValidURL = (txt) => {
	if (txt.match(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm)) {
		return true

	}
	return false
}
// console.log(checkValidURL(`www.marwenlabidl.com`))