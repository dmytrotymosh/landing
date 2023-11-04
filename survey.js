const surveyTemplate = (data = [], dataLength) => {
	const {number, title} = data;
	const answers = data.answers.map(item => {
		return `
			<label class="survey-question-label">
				<p>${item.answer_title}</p>
				<input type="${item.type}" data-valid="false" class="survey-question-answer" name="${data.answer_alias}" value="${item.type !== 'text' ? item.answer_title : ''}" ${item.type == 'text' ? 'placeholder="ваш варіант"' : ''}>
			</label>
		`
	});
	return `
		<div class="survey-content">
			<div class="survey-questions"><p>${number} з ${dataLength}</p></div>
			<div class="survey-question flex">
				<h3 class="survey-question-title h3-header">${title}</h3>
				<div class="survey-question-answers">
					${answers.join('')}
				</div>
				<button type="button" class="survey-question-button" data-next-btn>далі</button>
			</div>
		</div>
	`
};
surveyTemplate(surveyData[0], surveyData.length);

class Survey {
	constructor(selector, data, options) {
		this.$el = document.querySelector(selector);
		this.data = data;
		this.counter = 0;
		this.dataLength = this.data.length;
		this.resultArray = [];
		this.tmp = {};
		this.init();
		this.events();
	}
	init() {
		console.log('init');
		this.$el.innerHTML = surveyTemplate(surveyData[this.counter], this.dataLength);
	}
	events() {
		this.$el.querySelectorAll('input').forEach((input) => {
			input.addEventListener('change', event => {
				let labels = this.$el.querySelectorAll('.survey-question-label');
				console.log(labels);
				labels.forEach(label => {
					label.style.background = '#eee';
				});
				if(event.target.checked) {
					event.target.parentNode.style.background = 'skyblue';				
				}
			});
		});
		this.$el.addEventListener('click', (event) => {
			if(event.target == document.querySelector('[data-next-btn]')) {
				this.addToSend();
				this.nextQuestion();
			}
			if(event.target == document.querySelector('[data-send]')) {
				this.addToSend();
				this.send();
			}
		});
		this.$el.addEventListener('change', (event) => {
			if(event.target.tagName == 'INPUT') {
				if(event.target.type !== 'checkbox' && event.target.type !== 'radio') {
					let elements = this.$el.querySelectorAll('input');
					elements.forEach(element => element.checked = false);
				}
				this.tmp = this.serialize(this.$el);
				console.log(this.tmp);
			}
		});
	}
	nextQuestion() {
		console.log('next question');
		if(this.valid()) {
			if(this.counter + 1 < this.dataLength) {
				this.counter += 1;
				this.$el.innerHTML = surveyTemplate(surveyData[this.counter], this.dataLength);
			}
			if(this.counter + 1 == this.dataLength) {
				this.$el.insertAdjacentHTML('beforeend', '<button class="survey-question-button" type="button" data-send>надіслати</button>');
				this.$el.querySelector('[data-next-btn]').remove();
			}
			this.$el.querySelectorAll('input').forEach((input) => {
				input.addEventListener('change', event => {
					let labels = this.$el.querySelectorAll('.survey-question-label');
					console.log(labels);
					labels.forEach(label => {
						label.style.background = '#eee';
					});
					if(event.target.checked) {
						event.target.parentNode.style.background = 'skyblue';				
					}
				});
			});
			if(this.counter + 1 == this.dataLength) {
				this.phoneMask();
			}
		}
	}
	valid() {
		let isValid = false;
		let elements = this.$el.querySelectorAll('input');
		elements.forEach(element => {
			switch(element.type) {
				case 'text': 
					(element.value) ? isValid = true : element.classList.add('error');
				case 'tel': 
					(element.value) ? isValid = true : element.classList.add('error');
				case 'checkbox':
					(element.checked) ? isValid = true : element.classList.add('error');
				case 'radio':
					(element.checked) ? isValid = true : element.classList.add('error');
			}
		});
		return isValid;
	}
	addToSend() {
		this.resultArray.push(this.tmp);
	}
	send() {
		if(this.valid()) {
			console.log('send!');
			let elements = this.$el.querySelectorAll('input');
			elements.forEach(el => el.classList.remove('error'));
			const formData = new FormData();
			for(let item of this.resultArray) {
				for (let obj in item) {
					formData.append(obj, item[obj].substring(0, item[obj].length - 1))
				}
			}
			console.log(formData);
			const response = fetch('mail.php', {
				method: 'POST',
				body: formData
			});
		}
	}
	serialize(form) {
		let field, s = {};
		let valueString = '';
		if (typeof form == 'object' && form.nodeName == "FORM") {
			let len = form.elements.length;
			for (let i = 0; i < len; i++) {
				field = form.elements[i];
				
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (j = form.elements[i].options.length - 1; j >= 0; j--) {
							if (field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
						valueString += field.value + ',';
						
						s[field.name] = valueString;
						
						
					}
				}
			}
		}
		return s;
	}
	phoneMask() {
		const formatPhoneNumber = (input) => {
		    const phoneNumber = input.value.replace(/\D/g, '');
		    const selectionStart = input.selectionStart; 
		    if(!phoneNumber) return '';
		    if(input.value.length !== selectionStart) {
		        return input.value; 
		    }
		    if(phoneNumber[0] === '0') {
		        input.setAttribute('maxlength', '15');
		        if(phoneNumber.length <= 3) {
		            return phoneNumber;
		        }
		        if(phoneNumber.length >= 3 && phoneNumber.length <= 5) {
		            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
		        }
		        if(phoneNumber.length >= 5 && phoneNumber.length <= 7) {
		            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5)}`;
		        }
		        if(phoneNumber.length >= 7 && phoneNumber.length <= 10) {
		            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7)}`;
		        }
		    }
		    if(phoneNumber[0] === '3') {
		        input.setAttribute('maxlength', '19');
		        if(phoneNumber.length <= 2) {
		            return `+${phoneNumber}`;
		        }
		        if(phoneNumber.length >= 2 && phoneNumber.length <= 5) {
		            return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2)})`;
		        }
		        if(phoneNumber.length >= 5 && phoneNumber.length <= 7) {
		            return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5)}`;
		         }
		        if(phoneNumber.length >= 7 && phoneNumber.length <= 9) {
		            return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`;
		        }
		        if(phoneNumber.length >= 9 && phoneNumber.length <= 12) {
		            return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9)}`;
		        }
		    }
		    if(phoneNumber) {
		        input.setAttribute('maxlength', '16');
		        return `+${phoneNumber}`;
		    }
		}
		const phoneNumberFormatter = (event) => {
		    const input = event.currentTarget;
		    const formattedPhoneNumber = formatPhoneNumber(input);
		    input.value = formattedPhoneNumber;
		}
		const input = document.querySelector('input[name="phone"]');
		input.addEventListener('input', phoneNumberFormatter);
	}
}

window.survey = new Survey('.survey-form', surveyData);