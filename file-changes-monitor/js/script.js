var wfm3_lb_themes = [
	'white',
    //'lightgray',
    //'gray',
    'black',
    'padded',
    'drop',
    'line',
    'github',
    'transparent',
    'youtube',
    'habr',
    'heartcross',
    'plusminus',
    'google',
    'greenred',
    'large',
    'elegant',
    'disk',
    'squarespace',
    'slideshare',
    'baidu',
    'uwhite',
    //'ublack',
    'uorange',
    'ublue',
    //'ugreen',
    'direct',
    'homeshop'
];

jQuery(document).ready(function(jQuery) {
	var a = jQuery(".plugins .active[data-slug='file-changes-monitor'] .deactivate a:first");
	if (!a) {
		a = jQuery(".plugins #file-changes-monitor.active .deactivate a:first");
	}

	if (!a || "undefined" == typeof(a.dialog)) {
		return;
	}
	a.attr('onclick', 'wfm3DeactivateDialog(event, "'+a.attr('href')+'")');
});

function wfm3DeactivateDialog(event, href)
{
	if (event) {
    	event.preventDefault();
	}
	var dlg_container = jQuery("#wfm3_deactivate_dlg");
	if (!dlg_container.size()) {
		var dlg_html = 
			'<div id="wfm3_deactivate_dlg">'+
				'<center>'+
					'Didn\'t get what you want? '+
					'Try <a href="https://likebtn.com/en/wordpress-like-button-plugin?utm_source=wfm3_deact&utm_campaign=wfm3_deact&utm_medium=link" target="_blank">Like Button Rating</a> plugin.<br/><br/>'+
					'<a href="'+wfm3_lb_install_url+'" target="_blank" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only button-primary wfm3-button-install" role="button" style="text-shadow:none"><span class="ui-button-text">Install <strong>Like Button Rating</strong> plugin</span></a>'+
				'</center>'+
				'<h3 class="nav-tab-wrapper" id="wfm3-nav-tab">'+
	                '<a class="nav-tab wfm3-nav-tab-themes nav-tab-active" href="javascript:wfm3SwitchTab(\'themes\');void(0);">Themes</a>'+
	                '<a class="nav-tab wfm3-nav-tab-stats" href="javascript:wfm3SwitchTab(\'stats\');void(0);">Stats</a>'+
	                '<a class="nav-tab wfm3-nav-tab-reports" href="javascript:wfm3SwitchTab(\'reports\');void(0);">Reports</a>'+
	                '<a class="nav-tab wfm3-nav-tab-snippets" href="javascript:wfm3SwitchTab(\'snippets\');void(0);">Google Rich Snippets</a>'+
	            '</h3>'+
	            '<div class="postbox wfm3-tabbable" id="wfm3-tabbable-themes" style="min-height: 300px;">'+
	                '<div class="inside">';
	                	'<center>';
        for (theme in wfm3_lb_themes) {
        	dlg_html += '<span class="likebtn-wrapper"data-identifier="wfm3_theme_'+wfm3_lb_themes[theme]+'" data-loader_show="true" data-theme="'+wfm3_lb_themes[theme]+'"></span>&nbsp;&nbsp;';
        }
        
        dlg_html +=
	                	'</center>'+
	                '</div>'+
	            '</div>'+
	            '<div class="postbox wfm3-tabbable hidden" id="wfm3-tabbable-stats">'+
	            	'<div class="inside">'+
	            		'<img src="//likebtn.com/i/wordpress/stats.png" style="width: 100%"/>'+
	            	'</div>'+
	            '</div>'+
	            '<div class="postbox wfm3-tabbable hidden" id="wfm3-tabbable-reports">'+
	            	'<div class="inside">'+
	            		'<img src="//likebtn.com/i/wordpress/wordpress-rating-reports.jpg" style="width: 100%"/>'+
	            	'</div>'+
	            '</div>'+
	            '<div class="postbox wfm3-tabbable hidden" id="wfm3-tabbable-snippets">'+
	            	'<div class="inside">'+
	            		'<img src="//likebtn.com/i/features/google-rich-snippets.jpg" style="width: 100%"/>'+
	            	'</div>'+
	            '</div>'+
				'<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" style="border-top: 0">'+
					'<div class="ui-dialog-buttonset">'+
						'<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only button-primary wfm3-button-deactivate" role="button"><span class="ui-button-text">Deactivate</span></button>&nbsp;'+
						'<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only button-secondary wfm3-button-close" role="button"><span class="ui-button-text">Cancel</span></button>'+
					'</div>'+
				'</div>'+
			'</div>';

		dlg_container = jQuery(dlg_html).appendTo(jQuery("body"));
		dlg_container.after(
			'<style>'+
				'.wp-core-ui .button-primary.wfm3-button-install { background-color: #5cb85c; border-color: #449d44; }'+
				'.wp-core-ui .button-primary.wfm3-button-install:hover { background-color: #449d44; }'+
				'#wfm3-nav-tab { padding: 0; margin-bottom: 0; margin-top: 24px; }'+
				'#wfm3-tabbable-themes { margin-bottom: 10px; }'+
				'.rp_dialog { z-index: 1000001 !important; }'+
			'</style>'
		);
	}

	dlg_container.dialog({
		resizable: false,
		autoOpen: false,
		modal: true,
		width: 430,
		//height: jQuery(window).height()-45,
		title: 'Deactivate Plugin',
		draggable: false,
		show: 'fade',
		dialogClass: 'wfm3_dialog',
		close: function( event, ui ) {
			
		},
		open: function() {
			jQuery('.ui-widget-overlay, #wfm3_deactivate_dlg .wfm3-button-close').bind('click', function() {
				dlg_container.dialog('close');
			});
			jQuery('#wfm3_deactivate_dlg .wfm3-button-deactivate').bind('click', function() {
				dlg_container.dialog('close')
				window.location.href = href;
			});
			if (typeof(LikeBtn) !== "undefined") {
				LikeBtn.init();
			}
		},
		position: { 
			my: "center", 
			at: "center" 
		}
	});

	// Load buttons
	(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");
	
	dlg_container.dialog('open');
}

function wfm3SwitchTab(tab) {

    jQuery('.wfm3-tabbable').addClass('hidden');
    jQuery('#wfm3-tabbable-'+tab).removeClass('hidden');

    jQuery("#wfm3-nav-tab .nav-tab").removeClass('nav-tab-active');
    jQuery("#wfm3-nav-tab .nav-tab.wfm3-nav-tab-"+tab).addClass('nav-tab-active');
}