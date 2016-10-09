export default () => {
	const articleBox = $('.blog-content__article');
	// showArticle(window.location.hash, true);
	const blogNavBlock = document.querySelector('.blog-navigation__list');
	const link = $('.blog-navigation__link');
	if (articleBox) {
		window.onscroll = function () {
			const scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if (scrolled >= 460) {
				blogNavBlock.classList.add('blog-nav-fixed');
			}else {
				blogNavBlock.classList.remove('blog-nav-fixed');
			}
			checkArticles();
		};
		link.on('click', function (e) {
			e.preventDefault();
			showArticle($(this).attr('href'), true);
		});
		function showArticle(article, isAnimate) {
			const direction = article.replace(/#/, '');
			const reqSection = $('.blog-content__article').filter('[data-section="' + direction + '"]');
			const reqSectionPos = reqSection.offset().top;
			if (isAnimate) {
				$('html, body').animate({
					scrollTop: reqSectionPos
				}, 500);
			}else {
				$('html, body').scrollTop(reqSectionPos);
			}
		}
	}
	// navigation


	function checkArticles() {
		$('.blog-content__article').each(function () {
			const $this = $(this);
			const topEdge = $this.offset().top - 250;
			const bottomEdge = topEdge + $this.height();
			const wScroll = $(window).scrollTop();
			if (topEdge < wScroll && bottomEdge > wScroll) {
				const currentArticle = $this.data('section');
				const navLink = $('.blog-navigation__link');
				const filtered = navLink.filter('[href="#' + currentArticle + '"]');
				filtered.parent('li').siblings().removeClass('blog-navigation__item_active');
				filtered.closest('li').addClass('blog-navigation__item_active');
				window.location.hash = currentArticle;
			}
		});
	}
	// $(window).scroll(() => {
	// 	checkArticles();
	// });
};
