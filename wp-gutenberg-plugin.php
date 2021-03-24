<?php
/**
 * Plugin Name: Wordpress Editor Plugin Template
 * Plugin URI: mailto:ruk.fernando93@gmail.com
 * Description: Wordpress Editor Plugin Template
 * Author: Rukshan Fernando
 * Author URI: mailto:ruk.fernando93@gmail.com
 * Version: 1.0.0
 */

defined( 'ABSPATH' ) || exit;

function enqueue_backend_plugin_scripts() {
	wp_enqueue_script(
		'editor-plugin-backend-js', // Unique handle.
		plugins_url( 'build/block.build.js', __FILE__ ), // block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element','wp-editor' ) // Dependencies, defined above.
	);
}
add_action( 'enqueue_block_editor_assets', 'enqueue_backend_plugin_scripts' );