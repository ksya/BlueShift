$(document).ready(function () {
	var url = $("#hlsplayer").data("url");
	$.getJSON(url, function (data, textStatus) {
		if (textStatus == "success" && data.Success) {
			var html = "<video src='" + data.URL + "' width='" + $("#hlsplayer").width() + "' height='" + $("#hlsplayer").height() + "' controls='controls' autoplay='autoplay'>Your browser does not support the video tag</video>";
			$("#hlsplayer").html(html);
		}else
		{
			$("#hlsplayer").hide();
			$("#error").show();
		}
	});
});