let clientWidth = window.innerWidth;
if(clientWidth < 768) {
	document.querySelector('.tabs-triggers-item[href="#tab-1"]').innerHTML = '<h3 class="h3-header">A</h3>';
	document.querySelector('.tabs-triggers-item[href="#tab-2"]').innerHTML = '<h3 class="h3-header">B</h3>';
	document.querySelector('.tabs-triggers-item[href="#tab-3"]').innerHTML = '<h3 class="h3-header">C</h3>';
	document.querySelector('.image-2').style.backgroundImage = 'url(https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)';
	document.querySelector('.image-3').style.backgroundImage = 'url(https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)';
	document.querySelector('.aboutus-wrapper').style.backgroundImage = 'url(https://images.unsplash.com/photo-1590241538527-f089e71f76d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)';
}