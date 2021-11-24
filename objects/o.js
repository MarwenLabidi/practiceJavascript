const checkDomElement = (el) => {
	if (el.nodeName) {
		return true
	}
	return false
}
// const h1=document.createElement('h1')
// console.log(checkDomElement(h1))

const exchangeKeysValue = (obj) => {
	const keys = Object.keys(obj)
	const value = Object.values(obj)
	const result = {}
	for (let index = 0; index < keys.length; index++) {
		result[value[index]] = keys[index]
	}
	return result
}
// console.log(exchangeKeysValue({one:1,two:2}))

const parseUrl = (url) => {
	console.log(url)
	let urls = new URL(url)
	return {
		hostname: urls.hostname,
		href: urls.href,
		pathname: urls.pathname,
		port: urls.port,
		protocol: urls.protocol
	}
}
// console.log(parseUrl(`https://github.com/marwenez`))
const clock = () => {
	setInterval(() => {
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		console.log(time)
	}, 1000)
}
// clock()