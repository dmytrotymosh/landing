const button = document.querySelector('.button-section button');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');
const popupWrapper = document.querySelector('.popup-wrapper');
button.addEventListener('click', () => {
	popup.classList.toggle('close');
})
popupOverlay.addEventListener('click', (event) => {
	if (event.target == popupOverlay || event.target == popupWrapper) {
		popup.classList.add('close');
	}
})
const categorySelect = document.getElementById('category');
const transmissionSelect = document.querySelector('.transmission');
categorySelect.addEventListener('change', () => {
	if(categorySelect.value == 'B' || categorySelect.value == 'C') {
		transmissionSelect.classList.remove('close');
	} else {
		transmissionSelect.classList.add('close');
	}
})