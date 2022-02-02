class Template extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.getTemplate(this.getAttribute('src'))
			.then(x => this.innerHTML = x)
	}

	async getTemplate() {
		const res = await fetch(this.getAttribute('src'), {
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		return res.text()
	}
}

customElements.define('custom-template', Template)