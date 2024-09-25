<?php
/*
  Plugin Name: WordPress File Monitor
  Plugin URI: 
  Description: Monitor your website for added, changed and deleted files! Track changes in all website directories and get email alerts! Stay secure for free!
  Version: 1.0.9
  Text Domain: file-changes-monitor
  Author: nicolly
  Author URI: 
 */


! defined( 'ABSPATH' ) and exit;

global $current_blog;

define( 'WFM3_I18N', "file-changes-monitor");

define( 'SC_WPFMP_PLUGIN_FILE', __FILE__ );
define( 'SC_WPFMP_PLUGIN_FOLDER', dirname( SC_WPFMP_PLUGIN_FILE ) );
define( 'SC_WPFMP_CLASSES_FOLDER', SC_WPFMP_PLUGIN_FOLDER . DIRECTORY_SEPARATOR . 'classes' . DIRECTORY_SEPARATOR );
define( 'SC_WPFMP_FUNCTIONS_FOLDER', SC_WPFMP_PLUGIN_FOLDER . DIRECTORY_SEPARATOR . 'functions' . DIRECTORY_SEPARATOR );

// Set data directory
$uploads = wp_upload_dir();
$uploads['basedir'] = str_replace( array('\\', '/'), DIRECTORY_SEPARATOR, $uploads['basedir'] );
define( 'WFM3_DATA_FOLDER_NAME', 'wfm3_data' );
define( 'SC_WPFMP_DATA_FOLDER', $uploads['basedir'] . DIRECTORY_SEPARATOR . WFM3_DATA_FOLDER_NAME . DIRECTORY_SEPARATOR );
define( 'SC_WPFMP_DATA_FOLDER_OLD', SC_WPFMP_PLUGIN_FOLDER . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR );
define( 'WFM3_SCAN_DATA_FILENAME', '.wfm3_scan_data' );
define( 'WFM3_FILE_ALERT_CONTENT_FILENAME', '.wfm3_admin_alert_content' );
define( 'SC_WPFMP_FILE_SCAN_DATA', SC_WPFMP_DATA_FOLDER . WFM3_SCAN_DATA_FILENAME );
define( 'SC_WPFMP_FILE_SCAN_DATA_HTTP', $uploads['baseurl'].'/'.WFM3_DATA_FOLDER_NAME.'/'.WFM3_SCAN_DATA_FILENAME );
define( 'SC_WPFMP_FILE_ALERT_CONTENT', SC_WPFMP_DATA_FOLDER . WFM3_FILE_ALERT_CONTENT_FILENAME );
//define( 'SC_WPFMP_FILE_ALERT_CONTENT_HTTP', $uploads['baseurl'].'/'.WFM3_DATA_FOLDER_NAME.'/'.WFM3_FILE_ALERT_CONTENT_FILENAME );

// Define the permission to see/read/remove admin alert if not already set in config
if( ! defined( 'WFM3_ADMIN_ALERT_PERMISSION' ) )
{
    // If multisite then only allow network admins the permission to see alerts.
    if( is_multisite() )
        define( 'WFM3_ADMIN_ALERT_PERMISSION', 'manage_network_options' );
    else
        define( 'WFM3_ADMIN_ALERT_PERMISSION', 'manage_options' );
}

require SC_WPFMP_CLASSES_FOLDER . 'wpfmp.class.php';
require SC_WPFMP_CLASSES_FOLDER . 'wpfmp.settings.class.php';

require SC_WPFMP_FUNCTIONS_FOLDER . 'compatability.php';

// Only allow WPFMP to run on single sites or on a multisite if on current blog id.
if( ! is_multisite() || ( is_multisite() && $current_blog->blog_id == BLOG_ID_CURRENT_SITE ) )
{
    sc_WordPressFileMonitorPlus::init();
    sc_WordPressFileMonitorPlusSettings::init();
}
?>