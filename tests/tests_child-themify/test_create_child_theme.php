<?php

class WP_Test_Create_Child_Theme extends WP_UnitTestCase {

	/**
	 * @var WP_Theme Theme object
	 */
	protected $theme;

	/**
	 * @runInSeparateProcess
	 */
	public function test_create_child_theme() {
		define('FS_METHOD', 'direct');
		$current_theme = wp_get_theme();
		$random = wp_generate_password( 6, false );
		$new_theme_name = basename( $current_theme->stylesheet_dir ) . '_' . $random;
		$new_theme_name = sanitize_file_name( $new_theme_name );
		$this->assertFalse( $current_theme->parent() );
		Child_Themify::procreate( $new_theme_name, $current_theme );
		$this->theme = wp_get_theme( sanitize_file_name( strtolower( $new_theme_name ) ) );
		$this->assertTrue( $this->theme->exists() );
		$this->assertEquals( $this->theme->parent()->get_stylesheet(), $current_theme->get_stylesheet() );
		$files = $this->theme->get_files();
		$this->assertEquals( count( $files ), 1 );

		$themeDir = $this->theme->get_stylesheet_directory();
		$themeContents = file_get_contents(trailingslashit($themeDir).'style.css');
		$hasSemicolon = (false !== strpos($themeContents, "@import url(\"../{$this->theme->template}/style.css\");"));
		$this->assertTrue($hasSemicolon);

		_rmdir( $themeDir );
	}

}
