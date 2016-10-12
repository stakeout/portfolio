// THIS FILE IS AUTO GENERATED :)
export default () => {
	let counter = 1;
	let flag = true;

	function renderingSlider(data) { // функция рендера разметки левой части
		const container = $('.works__works-wrapper');
		const source = $('#slider').html();
		Handlebars.registerHelper('reverse', function (arr) {
			arr.reverse();
		});
		const templateFn = Handlebars.compile(source);
		container.append(templateFn(data));
	}
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'assets/data/portfolio.json',
		success(data) {
			renderingSlider(data);
			eventLalal();
		}
	});

	function eventLalal() {

		$('.controls__display_left .controls__item').on('click', function () {
			const rightItems = $('.controls__display_right .controls__item');
			const $this = $(this);
			const container = $this.closest('.controls__display');
			const items = container.find('.controls__item');
			const activeItem = items.filter('.active');
			const duration = 300;
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
				const images = $('.presentation__item');
				const activeImage = images.filter('.active');
				const reqImage = images.eq(counter);

				reqImage.animate({
					top: '0%' // 0
				}, duration, function () {
					activeImage.removeClass('active').css('top', '-100%'); // -100,
					reqImage.addClass('active');
				});

				const techs = $('.technology');
				const activeTech = techs.filter('.active');
				const reqTech = techs.eq(counter);
				activeTech.removeClass('active');
				reqTech.addClass('active');


				counter++;
				$.when(leftSlider, rightSlider).done(function (data1, data2) {
					data1.addClass('active');
					data2.addClass('active');
					flag = true;
				});
			}




		});
		// правый контрол слайдера
		$('.controls__display_right .controls__item').on('click', function () {
			const $this = $(this);
			const container = $this.closest('.controls__display');
			const items = container.find('.controls__item');
			const activeItem = items.filter('.active');
			const duration = 300;
			const rightItems = $('.controls__display_left .controls__item');
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
				const images = $('.presentation__item');
				const activeImage = images.filter('.active');
				const reqImage = images.eq(counter);
				reqImage.animate({
					top: '-100%' // 0,-100,100,100
				}, duration, function () {
					activeImage.removeClass('active').css('top', '100%'); // -100,0,0,-100
					reqImage.addClass('active');
				});
				const techs = $('.technology');
				const activeTech = techs.filter('.active');
				const reqTech = techs.eq(techs.length - 1 - counter);
				console.log(techs.length);
				activeTech.removeClass('active');
				reqTech.addClass('active');
				counter++;
				$.when(leftSlider, rightSlider, techs).done(function (data1, data2) {
					data1.addClass('active');
					data2.addClass('active');
					flag = true;
				});
			}
		});
	}
};
