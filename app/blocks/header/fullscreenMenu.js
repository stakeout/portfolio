export default () => {
	$('.nav-toggler-js').on('click', () => {
		// $(this).css('zIndex': 100);
		$('.slide-nav').toggleClass('open');
	});
	$('.slide-nav').on('click', function () {
		$(this).removeClass('open');
	});
	window.addEventListener('keydown', function (e) {
		if (e.keyCode === 27){
			$('.slide-nav').removeClass('open');
		}
	});
};
