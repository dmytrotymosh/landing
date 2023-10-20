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
const inputs = document.querySelectorAll('input[type="tel"]');
inputs.forEach(element => element.addEventListener('input', phoneNumberFormatter));