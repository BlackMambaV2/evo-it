function triggerNotif(type, text)
{
	if (type == 'danger')
	{
		type = "error"
	}

	new Noty({
		text: text,
		type: type,
		theme: 'relax',
		timeout: 2000
	}).show();
}

function addAlert(type, text)
{
	var icon = 'info-outline';

	if (type == 'success')
	{
		icon = 'check';
	}
	else if (type == 'warning')
	{
		icon = 'alert-triangle';
	}
	else if (type == 'danger')
	{
		icon = 'close-circle-o';
	}

	$('.main-content').prepend('\
		<div role="alert" class="alert alert-contrast alert-'+ type +' alert-dismissible alert-nopadding"> \
			<div class="icon"> \
				<span class="mdi mdi-'+ icon +'"></span> \
			</div> \
			<div class="message"> \
				<button type="button" data-dismiss="alert" aria-label="Close" class="close"> \
					<span aria-hidden="true" class="mdi mdi-close"></span> \
				</button> \
				<strong>'+ text +'</strong> \
			</div> \
		</div> \
	');
}