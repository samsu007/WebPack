import './hello-worl-button.scss';


class HelloWorldButton {

	butttonCssClass ='hello-world-button';
	
		render() {
			const button = document.createElement('button');
			const body = document.querySelector('body');
			button.innerHTML = 'Hello World';
			button.onclick = function () {
				const p = document.createElement('p');
				p.innerHTML = "Hello World";
				p.classList.add("hello-world-text");
				body.appendChild(p);
			}
			button.classList.add(this.butttonCssClass);
			body.appendChild(button);
		}
}

export default HelloWorldButton;