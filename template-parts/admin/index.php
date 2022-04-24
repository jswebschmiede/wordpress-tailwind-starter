<?php
/**
 * Template part for displaying a custom Admin area
 *
 * @link https://developer.wordpress.org/reference/functions/add_menu_page/
 *
 * @package wtso
 */

?>

<div class="wrap">
	<h1>WTSO Settings Page</h1>
	<?php settings_errors(); ?>

	<form method="post" action="options.php">
		<?php settings_fields( 'wtso_options_group' ); ?>
		<?php do_settings_sections( 'wtso' ); ?>
		<?php submit_button(); ?>
	</form>
</div>
