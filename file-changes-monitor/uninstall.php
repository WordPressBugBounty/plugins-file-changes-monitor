<?php

if( ! defined( 'WP_UNINSTALL_PLUGIN' ) )
	exit();	

require "file-changes-monitor.php";

sc_WordPressFileMonitorPlusSettings::uninstall();