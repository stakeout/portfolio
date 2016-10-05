export default () => {
	const auth = document.getElementById('authorization');
	const authReturn = document.getElementById('authorizationReturn');
	const welcomForm = document.querySelector('.intro');
	const authForm = document.querySelector('.authorization');
	function showAuthorizationForm(e) {
		e.preventDefault();
		welcomForm.style.transform = 'scaleX(0)';
		setTimeout(() => {
			welcomForm.classList.remove('show');
			welcomForm.classList.add('hide');
			authForm.classList.remove('hide');
			authForm.classList.add('show');
			setTimeout(() => {
				authForm.style.transform = 'scaleX(1)';
			}, 15);
		}, 500);
	}
	function showWelcomForm(e) {
		e.preventDefault();
		authForm.style.transform = 'scaleX(0)';
		setTimeout(() => {
			authForm.classList.remove('show');
			authForm.classList.add('hide');
			welcomForm.classList.remove('hide');
			welcomForm.classList.add('show');
			setTimeout(() => {
				welcomForm.style.transform = 'scaleX(1)';
			}, 15);
		}, 500);
	}
	if (auth || authReturn) {
		auth.addEventListener('click', showAuthorizationForm);
		authReturn.addEventListener('click', showWelcomForm);
	}
};
