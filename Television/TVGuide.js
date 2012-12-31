$(document).ready(function () {
	$("#group").change(function () {
		this.form.submit();
	});

	$("input[name='date']").change(function () {
		this.form.submit();
	});
	
	var dateTimeChanged = false;
	$("input[name='time']").change(function() {
			dateTimeChanged = true;
	});
	
/*$.datepicker.setDefaults({closeText: 'Close', prevText: 'Prev', nextText: 'Next', dateFormat: 'dd.mm.yy', firstDay: 1, monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'], monthNamesShort: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']});
$('.dateTimeInput').datepicker({constrainInput: false, showOn: 'button', , onSelect: function (nv, f) { var ov = $(this).data('dpv'); $(this).val(ov.indexOf(' ') == -1 ? nv : nv + ov.substr(ov.indexOf(' '))); }});
});*/
	$("input[name='time']").datetimepicker({ 
					 buttonImage: 'Content/Images/calendar.gif', 
		 buttonImageOnly: true,
		 showMinute: true,
		 stepMinute: 30,
		 onClose: function(datetime) { 
				if (dateTimeChanged) { 
				 this.form.submit(); 
				}
		 }
	});
	
	//.change(function () {
	//	this.form.submit();
	//});
	
});

