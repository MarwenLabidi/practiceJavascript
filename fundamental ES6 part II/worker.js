onmessage = (e) => {
	if (e.data === `doWork`) {
		const a = 12
		const b = 100
		const r = a + b
		postMessage(r)
	}
}