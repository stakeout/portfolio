export default () => {
	$('form').each(function (){
		const form = $(this);
		const inputField = $('input[type=text], input[type=password], textarea');
		const checkBox = $('input[type=checkbox]');
		const radioBox = $('input[type=radio]');
		const submitBtn = $('button[type=submit]');
		const resetBtn = $('button[type=reset]');
		submitBtn.on('click', function (e) {
			e.preventDefault();
			form.find(inputField).each(function (){
				if ($(this).val() === '') {
					$(this).addClass('error');
				}else {
					$(this).removeClass('error');
					$(this).addClass('valid');
				}
			});
		});
		resetBtn.on('click', function (){
			inputField.removeClass('valid');
			inputField.removeClass('error');
		});
	});
};
