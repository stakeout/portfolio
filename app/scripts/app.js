import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import authorization from '../blocks/promo/authorization';
import preloader from '../blocks/preloader/preloader';

$(() => {
	svg4everybody();
	authorization();
	preloader();
});
