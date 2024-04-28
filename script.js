let output_div = document.querySelector("#output")
const input_text = document.querySelector("#text")
const input_delay = document.querySelector("#delay")
const btn = document.querySelector("#btn")

btn.addEventListener("click",async()=>{
	await new Promise(resolve => {
		setTimeout(()=>{
			resolve()
		},input_delay.value)
	})
	output_div.innerText = `${input_text.value}`
})