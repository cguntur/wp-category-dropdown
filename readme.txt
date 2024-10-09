=== Category Dropdown by GCS Design ===
Contributors: cguntur
Tags: WordPress Category Dropdown, child category dropdown, Ajax WordPress category, Parent and Child Categories
Requires at least: 5.0
Tested up to: 6.6
Requires PHP: 7.0
Stable tag: 1.9
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Display a parent and child categories in a dropdown. Works with custom taxonomies and WooCommerce product categories.

== Description ==
WP Category Dropdown plugin displays parent and child categories in a dropdown. You can select the parent category and display a dropdown for the child categories of the selected parent. If the selected parent category does not have a child category, you will be automatically directed to the category page.

You can use the shortcode or the widget to display the dropdown categories.

You can learn more at [gcsdesign.com/wp_category_dropdown](https://www.gcsdesign.com/wp_category_dropdown)

== Installation ==
= Using The WordPress Dashboard =

1. Navigate to the \'Add New\' in the plugins dashboard
2. Search for \'wp category dropdown\'
3. Click \'Install Now\'
4. Activate the plugin on the Plugin dashboard

= Uploading in WordPress Dashboard =

1. Navigate to the \'Add New\' in the plugins dashboard
2. Navigate to the \'Upload\' area
3. Select `wp-category-dropdown.zip` from your computer
4. Click \'Install Now\'
5. Activate the plugin in the Plugin dashboard

= Using FTP =

1. Download `wp-category-dropdown.zip`
2. Extract the `wp-category-dropdown` directory to your computer
3. Upload the `wp-category-dropdown` directory to the `/wp-content/plugins/` directory
4. Activate the plugin in the Plugin dashboard

== Frequently Asked Questions ==
= Does the dropdown work with custom taxonomies? =
Yes! It works with custom taxonomies.

== Screenshots ==
1. The dropdown widget
2. Dropdown widget display on the front end

== Changelog ==
= 1.9 =
* FIxed the Cross-Site Scripting issue caused by the align parameter in the block
* Changed the name of the plugin to remove the 'WP' from the name

= 1.8 =
* Fixed the issue of default text going to 404 page 

= 1.7 =
* Updated to work with WP 6.0

= 1.6 =
* Multiple dropdowns can be added on the same page 
* The hide empty categories and the show count options now work for both parent and child category dropdowns

= 1.5 =
* Added align support to the category dropdown block 

= 1.4 =
* Categories can be excluded from the dropdown 

= 1.3 =
* Added a block to display the parent and child category dropdowns

= 1.2 =
* The plugin works with the custom category base in permalinks settings

= 1.1 =
* Fixed the issue of sub categories not showing up properly

= 1.0 =
* First release
