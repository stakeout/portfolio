export default () => {
	$(function () {

		var imgs = [];

		$.each($('*'), function () {
			var
				$this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');

			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');
				imgs.push(path);
			}

			if (img) {
				var path = $this.attr('src');

				if (path) {
					imgs.push(path);
				}
			}
		});

		var percentsTotal = 1;

		for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src: imgs[i]
				}
			});

			image.on({
				load() {
					setPercents(imgs.length, percentsTotal);
					percentsTotal++;
				},

				error() {
					percentsTotal++;
				}
			});
		}

		function setPercents(total, current) {
			var percent = Math.ceil(current / total * 100);

			if (percent >= 100) {
				$('.preloader').fadeOut();
			}

			$('.preloader__percents').text(percent + '%');
		}
	});
};
