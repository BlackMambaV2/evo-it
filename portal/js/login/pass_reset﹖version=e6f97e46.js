$('#newCaptcha').on('click', function() {
	$('#captcha-img').attr('src', $('#captcha-img').attr('src') + '?' + new Date().getTime());
});