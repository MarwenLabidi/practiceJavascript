const body = document.querySelector('body')

const p = document.createElement('p')
p.innerText = `Every since i did my first internship in a software development company,
I knew I was captivated into the world
of Software. However software development has
never been " just a job" for me, it's offered an engaging
challenge to continually learn and improve my skills.`

const buttonStyle = document.createElement('button')
buttonStyle.innerText = `change style`

body.append(p)
body.append(buttonStyle)
buttonStyle.addEventListener('click', () => {
	p.classList.toggle('aboutMeParagraph')
})

const getFirstLastName = () => {
	let valueFirst = 0
	let valueLast = 0
	const inputs = [...document.querySelectorAll('input')]
	for (let index = 0; index < inputs.length; index++) {
		if (inputs[index].getAttribute('name') === 'firstname') {
			valueFirst = inputs[index].value
		} else {
			valueLast = inputs[index].value
		}
	}
	alert(`first name : ${valueFirst}\n last name: ${valueLast}`)
	console.log(valueFirst)
	console.log(valueLast)
}
const btn = document.createElement('button')
btn.innerText = `show first name and last name`
p.prepend(btn)
btn.style.display = 'block'
btn.addEventListener('click', () => getFirstLastName())

const highlightWords = () => {
		p.addEventListener("mouseenter", (event)=>{
			event.target.style.color = "purple";

		})
	}
	highlightWords()