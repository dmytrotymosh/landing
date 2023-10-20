document.addEventListener('DOMContentLoaded', () => {
const forms = document.querySelectorAll('.callback-form');
forms.forEach(element => element.addEventListener('submit', (event) => {
    event.preventDefault();
    const self = event.currentTarget;
    const nameErrorMessage = self.querySelector('.error-message[data-message-name]');
    const phoneErrorMessage = self.querySelector('.error-message[data-message-phone]');
    const categorySelectErrorMessage = self.querySelector('.error-message[data-message-category]');
    const transmissionSelectErrorMessage = self.querySelector('.error-message[data-message-transmission]');
    self.querySelectorAll('input').forEach(input => {
        const inputAttribute = input.getAttribute('type');
        if(!input.value) {
            if(inputAttribute === 'text') {
                nameErrorMessage.style.display = 'block';
                nameErrorMessage.textContent = 'Введіть ім\'я';
                input.style.border = 'solid 2px red';
                input.style.marginBottom = '0px';
            }
            if(inputAttribute === 'tel') {
                phoneErrorMessage.style.display = 'block';
                phoneErrorMessage.textContent = 'Введіть номер телефону';
                input.style.border = 'solid 2px red';
                input.style.marginBottom = '0px';
            }
        } 
        if(input.value) {
            if(inputAttribute === 'text') {
                if(input.value.length === 1) {
                    nameErrorMessage.style.display = 'block';
                        nameErrorMessage.textContent = 'Введіть повне ім\'я';
                        input.style.border = 'solid 2px red';
                        input.style.marginBottom = '0px';
                } else {
                    nameErrorMessage.style.display = 'none';
                    input.style.border = 'solid 2px green';
                    input.style.marginBottom = '20px';
                }
            }
            if(inputAttribute === 'tel') {
                const inputMaxlengthAttribute = input.getAttribute('maxlength');
                if(inputMaxlengthAttribute == 15 || inputMaxlengthAttribute == 19) {
                    if(inputMaxlengthAttribute != input.value.length) {
                        phoneErrorMessage.style.display = 'block';
                        phoneErrorMessage.textContent = 'Введіть повний номер телефону';
                        input.style.border = 'solid 2px red';
                        input.style.marginBottom = '0px';
                    } else {
                        phoneErrorMessage.style.display = 'none';
                        input.style.border = 'solid 2px green';
                        input.style.marginBottom = '20px';
                    }
                } else {
                    phoneErrorMessage.style.display = 'none';
                    input.style.border = 'solid 2px green';
                    input.style.marginBottom = '20px';
                }
            }
        }
    });
    self.querySelectorAll('select').forEach((select) => {
        const selectAttribute = select.getAttribute('name');
        if(selectAttribute == 'category') {
            if(select.value == '#') {
                categorySelectErrorMessage.style.display = 'block';
                categorySelectErrorMessage.textContent = 'Оберіть категорію';
                select.style.marginBottom = '0px';
            } else {
	            categorySelectErrorMessage.style.display = 'none';
	            select.style.marginBottom = '20px';
	           }
            }
        });
        if(nameErrorMessage.style.display == 'none' && phoneErrorMessage.style.display == 'none' && categorySelectErrorMessage.style.display == 'none') {
            self.submit();
        }
    })); 
});