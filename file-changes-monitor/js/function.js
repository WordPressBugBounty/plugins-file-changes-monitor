jQuery(function ($) {
	$('select[name="wfm3_settings[cron_method]"]').change(function() {
		if($('select[name="wfm3_settings[cron_method]"]').val() == "wordpress") {
			$(this).parent().find("div").hide();
            $('select[name="wfm3_settings[file_check_interval]"]').parent().parent().show();
		} else {
			$(this).parent().find("div").show();
            $('select[name="wfm3_settings[file_check_interval]"]').parent().parent().hide();
		}
	}).trigger("change");

	$('select[name="wfm3_settings[notify_by_email]"]').change(function() {
		if($('select[name="wfm3_settings[notify_by_email]"]').val() == 1) {
			$('input[name="wfm3_settings[from_address]"]').parent().parent().show();
            $('input[name="wfm3_settings[notify_address]"]').parent().parent().show();
		} else {
			$('input[name="wfm3_settings[from_address]"]').parent().parent().hide();
            $('input[name="wfm3_settings[notify_address]"]').parent().parent().hide();
		}
	}).trigger("change");
});