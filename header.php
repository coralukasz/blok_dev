<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bloktherm
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<!-- <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'bloktherm' ); ?></a> -->

	<header id="masthead" class="site-header" role="banner">
		<div>
			<form role="search" id="searchform" action="<?php bloginfo('home'); ?>" class="search-form" method="get">
				<div class="form-container">
					<div class="container clearfix">
						<i class="fa fa-search"></i>
						<input placeholder="Search" name="s" class="search_field" autocomplete="off" type="text">
						<input value="Search" type="submit">

						<div class="search-close">
							<a href="#">
								<i class="fa fa-times"></i>
							</a>
						</div>
					</div>
				</div>
			</form>
			<nav role="navigation">
				<div class="navbar navbar-static-top navbar-default" style="<?php echo ( (is_page('O nas') || is_page('Produkty') || is_page('Technologia') || is_page('Zastosowanie')) ) ? 'background-color: transparent;': ''; ?>">
					<div class="container <?php echo ( is_page('Produkty') ) ? 'dark': ''; ?>">
						<!-- .navbar-toggle is used as the toggle for collapsed navbar content -->
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
		 
							<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo( 'name' ) ?>" rel="homepage" style="height:90px;">
							<img class="light" src="<?php echo( get_header_image() ); ?>" alt="<?php echo( get_bloginfo( 'title' ) ); ?>" />
							<img class="dark" src="http://www.coraluka.linuxpl.info/blok/wp-content/uploads/2016/04/logo_website5.png" alt="<?php echo( get_bloginfo( 'title' ) ); ?>" />
							</a>
						</div>
		 				<div class="search-button"><i id="srch" class="fa fa-search"></i></div>
						<div class="navbar-collapse collapse navbar-responsive-collapse">
							<?php
		 
							$args = array(
								'theme_location' => 'primary',
								'depth'      => 2,
								'container'  => false,
								'menu_class'     => 'nav navbar-nav navbar-right',
								'walker'     => new Bootstrap_Walker_Nav_Menu()
								);
		 
							if (has_nav_menu('primary')) {
								wp_nav_menu($args);
							}
		 
							?>
		 				</div>
		 				
					</div>
				</div>           
			</nav>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content <?php echo (is_cart() || is_checkout()) ? 'pad-top-100' : ''; ?>">
