<?php

namespace Wtso\Setup;

/**
 * Menus
 */
class Menus {

	/**
	 * register default hooks and actions for WordPress
	 *
	 * @return
	 */
	public function register() {
		add_action( 'after_setup_theme', array( $this, 'menus' ) );
	}


	/**
	 * menus
	 *
	 * @return void
	 */
	public function menus() {
		/*
			Register all your menus here
		*/
		register_nav_menus(
			array(
				'wtso-header-menu'   => esc_html__( 'Header Menu', 'wtso' ),
				'wtso-footer-menu-1' => esc_html__( 'Footer Menu 1', 'wtso' ),
				'wtso-footer-menu-2' => esc_html__( 'Footer Menu 2', 'wtso' ),
			)
		);
	}


	/**
	 * Get the menu id by menu location.
	 *
	 * @param string $location
	 *
	 * @return integer
	 */
	public function get_menu_id( $location ) {

		// Get all locations
		$locations = get_nav_menu_locations();

		// Get object id by location.
		$menu_id = $locations[ $location ];

		return ! empty( $menu_id ) ? $menu_id : '';
	}

	/**
	 * get_menu_name
	 *
	 * @param  mixed $menu_id
	 * @return string
	 */
	public function get_menu_name( $menu_id ) {
		$menu_name = wp_get_nav_menu_object( $menu_id )->name;

		return ! empty( $menu_name ) ? $menu_name : '';
	}

	/**
	 * Get all child menus that has given parent menu id.
	 *
	 * @param array   $menu_array Menu array.
	 * @param integer $parent_id Parent menu id.
	 *
	 * @return array Child menu array.
	 */
	public function get_child_menu_items( $menu_array, $parent_id ) {

		$child_menus = array();

		if ( ! empty( $menu_array ) && is_array( $menu_array ) ) {

			foreach ( $menu_array as $menu ) {
				if ( intval( $menu->menu_item_parent ) === $parent_id ) {
					array_push( $child_menus, $menu );
				}
			}
		}

		return $child_menus;
	}
}
