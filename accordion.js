const accrordionItems = document.querySelectorAll('.accordion-item');
accrordionItems.forEach(item => {
	item.addEventListener('click', (event) => {
		let self = event.currentTarget;
		self.classList.toggle('open');
	})
})