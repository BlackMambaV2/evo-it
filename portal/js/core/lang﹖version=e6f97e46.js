function utf8_to_b64(str)
{
	return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str)
{
	return decodeURIComponent(escape(window.atob(str)));
}

var translate_values = [];

function translate(type, message, plural, count, context)
{
	var key = utf8_to_b64(type + "|||" + message + "|||" + plural + "|||" + count + "|||" + context);

	if (translate_values.hasOwnProperty(key))
	{
		return translate_values[key];
	}

	var value = $.ajax({
		type: "POST",
		data: {
			type: type,
			message: message,
			plural,
			count,
			context
		},
        url: '/lang/translate',
        async: false
	}).responseText;

	translate_values[key] = value;

	return value;
}

function __(message)
{
	return translate('e', message, null, null, null)
}

function _x(message, context)
{
	return translate('x', message, null, null, context)
}

function _n(message, plural, count)
{
	return translate('x', message, plural, count, null)
}

function _nx(message, plural, count, context)
{
	return translate('x', message, plural, count, context)
}