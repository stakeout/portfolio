export default () => {
	const authBtn = document.getElementById('authorization');
	const authReturn = document.getElementById('authorizationReturn');
	const flipper = document.querySelector('.flipper__inner');
	function showAuthorizationForm(e) {
		e.preventDefault();
		authBtn.style.visibility = 'hidden';
		flipper.style.transform = 'rotateY(180deg)';
	}
	function showWelcomForm(e) {
		e.preventDefault();
		authBtn.style.visibility = 'visible';
		flipper.style.transform = 'rotateY(0)';
	}
	if (authBtn || authReturn) {
		authBtn.addEventListener('click', showAuthorizationForm);
		authReturn.addEventListener('click', showWelcomForm);
	}
};
