import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import authorization from '../blocks/promo/authorization';
import preloader from '../blocks/preloader/preloader';
import blogNav from '../blocks/blog-navigation/blogNav';

$(() => {
	svg4everybody();
	preloader();
	authorization();
	blogNav();
});
