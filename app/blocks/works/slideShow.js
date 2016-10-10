export default () => {
	let counter = 1;
	let flag = true;
	function renderingLeftSlidePart() { // функция рендера разметки левой части
		const container = $('.technology');
		const source = $('#sliderLeftTemplate').html();
		const templateFn = Handlebars.compile(source);
		container.append(templateFn());
	}
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'assets/data/portfolio.json',
		success(data) {
			const presentationImg = $('.presentation__list');
			const listTechnology = $('.technology__list');
			const listRight = $('.controls__display .controls__list_right');
			const listLeft = $('.controls__display .controls__list_left');
			const jsonLength = data.length;
			const objData = data;
			console.log(objData);
			for (let i = 0; i < jsonLength; i++) {
				let leftLi = $('<li>', {
					html: data[i].site,
					class: 'controls__item'
				}).css('background-image', 'url(' + data[i].bgImage + ')');

				let rightLi = $('<li>', {
					html: data[jsonLength - 1 - i].site,
					class: 'controls__item'
				}).css('background-image', 'url(' + data[jsonLength - 1 - i].bgImage + ')');
						// .append($('<img>', {src: data[jsonLength - 1 - i].bgImage}));

				let wrapImg = $('<li>', {
					class: 'presentation__item'
				}).append($('<img>', {
					src: data[i].largeImage,
					class: 'image'
				}));

				let usedSkills = $('<li>', {
					html: data[i].techs,
					class: 'technology__item'
				});

				if (i === 0) {
					leftLi.addClass('active');
					rightLi.addClass('active');
					wrapImg.addClass('active');
					usedSkills.addClass('active');
				}

				listLeft.append(leftLi);
				listRight.append(rightLi);
				presentationImg.append(wrapImg);
				listTechnology.append(usedSkills);
			}
			renderingLeftSlidePart();
			eventLalal();
		}
				// error() {
				//
				// }
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
					top: '0%'
				}, duration, function () {
					activeImage.removeClass('active').css('top', '-100%');
					reqImage.addClass('active');
				});


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
					top: '0%'
				}, duration, function () {
					activeImage.removeClass('active').css('top', '-100%');
					reqImage.addClass('active');
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
