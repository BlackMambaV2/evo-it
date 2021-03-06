
$('#login-form').on('submit', function(e) {
	e.preventDefault();
	$('.be-loading').addClass('be-loading-active');

	$('#errorMsg').html('');
	var $this = $(this);

		$.ajax({
		url: $this.attr('action'),
		type: $this.attr('method'),
		data: $this.serialize(),
		success: function(data) {
			if (data.success)
			{
				window.location.reload();
			}
			else
			{
				$('.be-loading').removeClass('be-loading-active');
				animateCSS('.login-card-shadow', 'shake');

				$('#password').focus();
				$('#errorMsg').html('<div class="alert alert-danger"><strong>' + data.message + '</strong></div>');
			}
		}
	});
});

$(document).ready(function() {
	$('.splash-footer').css('visibility', 'hidden');
	animateCSS('.login-card-shadow', 'fadeInDown', function() {
		$('.splash-footer').css('visibility', 'visible');
		animateCSS('.splash-footer', 'fadeInUp');
	});
});