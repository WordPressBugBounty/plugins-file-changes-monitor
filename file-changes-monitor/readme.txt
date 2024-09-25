=== WordPress File Monitor ===
Contributors: nicolly
Donate link: https://likebtn.com
Tags: files, file, monitor, plugin, security, secure
Requires at least: 3.1
Tested up to: 5.0
Stable tag: 1.0.9

Monitor your website for added, changed and deleted files! Track changes in all website directories and get email alerts! Stay secure for free!

== Description ==

Monitor your website for added, changed and deleted files! Track changes in all website directories and get email alerts! Stay secure for free!

= Features =

- Monitoring file system for added / deleted / changed files.
- Tracking changes of the file size, modification date, permissions, file content.
- Sending email with the detailed information when changes are detected.
- Displaying monitor alerts in the administration area.
- Monitoring files for changes based on file hash, time stamp and/or file size.
- Excluding files and directories from scan.
- Allows to run the file checking via an external cron so not to slow down visits to your website and to give greater flexibility over scheduling.
- Allows to include / exclude files from scanning by extension.
- Properly tracks broken symlinks and unreadable files.
- Multisite compatible (plugin settings are located under the Settings menu of the main website).

= Keep Your Website Secure =

This simple but functional plugin allows you to monitor your entire WP installation for unwanted file changes (even for file permissions change!) and promptly notify you in case of something. Everyone whose website was hacked once knows how it is complicated to detect infiltration on initial stage and to find all changes in the file system. This plugin does a job.

Be sure to install it on malware-free website, set correct ‘File Check Root’ in plugin’s settings, and make sure all check-boxes in ‘File Check Method’ are ticed for file changes better recognizing.

= PRO Features (coming soon) =

- SMS alerts
- Launching monitoring via cron
- Sending email alerts to different emails based on directories
- If you need any other features just create a ticket on forum

PRO version costs $2 and includes lifetime updates. If you would like to buy PRO version please email at <a href="mailto:skyguiatar+wp@gmail.com">skyguiatar+wp@gmail.com</a>

= Languages = 

- Russian
- Arabic
- German
- Japanese

= Credits = 
Thanks to the <a href="https://likebtn.com/en/wordpress-like-button-plugin?utm_source=wfm3_readme&utm_campaign=wfm3_readme" title="WordPress Like Button Rating Plugin">LikeBtn</a> for providing a rating feature for my plugin.

== Installation ==

* Upload to a directory named "wordpress-file-monitor" in your plugins directory (usually wp-content/plugins/).
* Activate the plugin.
* Visit Settings page under Settings -> WordPress File Monitor in your WordPress Administration Area (if you are using WordPress in a Multisite mode, the plugin settings are located under the Settings menu of the main website)
* Configure plugin settings.

== Frequently Asked Questions ==

= Only admins can see the admin alert. Is it possible to let other user roles see the admin notice? =

Yes you can, add the following code to your wp-config.php file: `define('WFM3_ADMIN_ALERT_PERMISSION', 'capability');` and change the capability to a level you want. Please visit [Roles and Capabilities] to see all available capabilities that you can set to.

[Roles and Capabilities]: http://codex.wordpress.org/Roles_and_Capabilities

== Screenshots ==

1. Settings
2. Admin alert
3. Admin changed files report
4. Email changed files report

== Changelog ==

= 1.0.9 =
* Add: WordPress 5.0 compatibility.

= 1.0.8 =
* Add: Readme updated

= 1.0.7 =
* Add: Readme updated

= 1.0.6 =
* Fix: Fixed cannot redeclare pcre_fnmatch notice
* Fix: Fixed notice when file_check_method was not set

= 1.0.5 =
* Added: Proper tracking broken symlinks and unreadable files
* Added: Plugin now can be translated at https://translate.wordpress.org/projects/wp-plugins/file-changes-monitor

= 1.0.4 =
* Fixed: Fixed get_home_path function not working occasionally on HHVM installations 

= 1.0.3 =
* Added: Track file permissions changes
* Added: Instructions for excluding files/dirs

= 1.0.0 =
* Lauched.