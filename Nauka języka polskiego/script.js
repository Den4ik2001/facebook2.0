let burger_menu = document.querySelector(".burger-menu");

function burg() {
	if (burger_menu.style.display === 'block') {
		burger_menu.style.display = 'none';
	}
	else {
		burger_menu.style.display = 'block';
	}
}