document.querySelectorAll('.tabs-triggers-item').forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let id = event.currentTarget.getAttribute('href').replace('#', '');
		document.querySelectorAll('.tabs-triggers-item').forEach(element => {
			element.classList.remove('tabs-triggers-item--active');
		});
		document.querySelectorAll('.tabs-content-item').forEach(element => {
			element.classList.remove('tabs-content-item--active');
		});
		item.classList.add('tabs-triggers-item--active');
		document.getElementById(id).classList.add('tabs-content-item--active');
	})
});
document.querySelector('.tabs-triggers-item').click();