export default () => {
	let counter = 1;
	let flag = true;

	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'assets/data/portfolio.json',
		success(data) {

			processData(data);
		},
		error(){

		}
	});

	function processData(data){

		$('.controls__display_left .controls__item').on('click', function () {

			const $this = $(this);
			const container = $this.closest('.controls__display');
			const items = container.find('.controls__item');
			const activeItem = items.filter('.active');
			const duration = 300;
			const rightItems = $('.controls__display_right .controls__item');
			const rightActive = rightItems.filter('.active');
			const leftSlider = $.Deferred();
			const rightSlider = $.Deferred();
			if (flag) {
				flag = false;
				if (counter >= items.length) {
					counter = 0;
				}
				const reqItem = items.eq(counter);
				const rightReqItem = rightItems.eq(counter);
				activeItem.animate({
					top: '100%'
				}, duration);
				rightActive.animate({
					top: '-100%'
				}, duration);
				reqItem.animate({
					top: '0%'
				}, duration, function () {
					activeItem.removeClass('active').css('top', '-100%');
					leftSlider.resolve($(this));
				});
				rightReqItem.animate({
					top: '0%'
				}, duration, function () {
					rightActive.removeClass('active').css('top', '100%');
					rightSlider.resolve($(this));
				});
				counter++;
				$.when(leftSlider, rightSlider).done(function (data1, data2) {
					data1.addClass('active');
					data2.addClass('active');
					flag = true;
				});
			}
		});
	}
};
