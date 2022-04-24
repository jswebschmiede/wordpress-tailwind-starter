<?php

namespace Wtso\Setup;

/**
 * Enqueue.
 */
class Enqueue {

	/**
	 * register default hooks and actions for WordPress
	 *
	 * @return
	 */
	public function register() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
	}

	/**
	 * Register Styles
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style( 'wtso_google_fonts', 'https://fonts.googleapis.com/css2?family=Bangers&family=Mulish:wght@300;400;500;600;700;900&display=swap', array(), false );
		wp_register_style( 'wtso_main_css', untrailingslashit( get_template_directory_uri() ) . '/assets/dist/css/main.css', array(), filemtime( untrailingslashit( get_template_directory() ) . '/assets/dist/css/main.css' ), 'all' );

		wp_enqueue_style( 'wtso_google_fonts' );
		wp_enqueue_style( 'wtso_main_css' );
	}

	/**
	 * Register Scripts
	 *
	 * @return void
	 */
	public function register_scripts() {

		// Extra
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		wp_register_script( 'wtso_main_js', untrailingslashit( get_template_directory_uri() ) . '/assets/dist/js/main.bundle.js', array( 'jquery' ), filemtime( untrailingslashit( get_template_directory() ) . '/assets/dist/js/main.bundle.js' ), 'all' );
		wp_enqueue_script( 'wtso_main_js' );
	}
}
