<?php
/*
  Plugin Name: Shortcode menu tf
  Plugin URI: 
  Version: 0.0.1
  Author: Tiago Fabre
  Author URI: 
  Description: 
  Text Domain: Shortcode-menu-tf
  Domain Path: /languages
  License: GPL
 */

function start()
{
	//add a media button
	add_action( 'media_buttons', 'button');
    add_action('wp_enqueue_media', 'include_media_button_js_file');
}

add_action('init', 'start');

// add a media button (it is not a tinymce button)
function button() {
    echo '<a href="#" id="insert-my-media" class="button">Add my content</a>';
}

// add button hendler
function include_media_button_js_file() {
	// add some script to handle the button
    wp_enqueue_script('media_button', plugins_url().'/shortcode-menu/handler.js', array('jquery'), '1.0', true);
}


?>