<?php
/**
 * Theme Customizer - Footer
 *
 * @package wtso
 */

namespace Wtso\Api\Customizer;

use WP_Customize_Control;
use WP_Customize_Color_Control;

use Wtso\Api\Customizer;

/**
 * Customizer class
 */
class Footer
{
	/**
	 * register default hooks and actions for WordPress
	 * @return
	 */
	public function register( $wp_customize )
	{
		$wp_customize->add_section( 'wtso_footer_section' , array(
			'title' => __( 'Footer', 'wtso' ),
			'description' => __( 'Customize the Footer' ),
			'priority' => 162
		) );

		$wp_customize->add_setting( 'wtso_footer_background_color' , array(
			'default' => '#ffffff',
			'transport' => 'postMessage', // or refresh if you want the entire page to reload
		) );

		$wp_customize->add_setting( 'wtso_footer_copy_text' , array(
			'default' => 'Proudly powered by WTSO',
			'transport' => 'postMessage', // or refresh if you want the entire page to reload
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'wtso_footer_background_color', array(
			'label' => __( 'Background Color', 'wtso' ),
			'section' => 'wtso_footer_section',
			'settings' => 'wtso_footer_background_color',
		) ) );

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'wtso_footer_copy_text', array(
			'label' => __( 'Copyright Text', 'wtso' ),
			'section' => 'wtso_footer_section',
			'settings' => 'wtso_footer_copy_text',
		) ) );

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial( 'wtso_footer_background_color', array(
				'selector' => '#wtso-footer-control',
				'render_callback' => array( $this, 'outputCss' ),
				'fallback_refresh' => true
			) );

			$wp_customize->selective_refresh->add_partial( 'wtso_footer_copy_text', array(
				'selector' => '#wtso-footer-copy-control',
				'render_callback' => array( $this, 'outputText' ),
				'fallback_refresh' => true
			) );
		}
	}

	/**
	 * Generate inline CSS for customizer async reload
	 */
	public function outputCss()
	{
		echo '<style type="text/css">';
			echo Customizer::css( '.site-footer', 'background-color', 'wtso_footer_background_color' );
		echo '</style>';
	}

	/**
	 * Generate inline text for customizer async reload
	 */
	public function outputText()
	{
		echo Customizer::text( 'wtso_footer_copy_text' );
	}
}
