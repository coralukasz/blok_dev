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
		<nav role="navigation">
			<div class="navbar navbar-static-top navbar-default">
				<div class="container">
					<!-- .navbar-toggle is used as the toggle for collapsed navbar content -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
	 
						<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo( 'name' ) ?>" rel="homepage"><img src="<?php echo( get_header_image() ); ?>" alt="<?php echo( get_bloginfo( 'title' ) ); ?>" /></a>
					</div>
	 
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
		<div class="container-fluid">
			<div class="row">
				<?php if ( is_home() ) { ?>
				  <div id="carousel-front-top" class="carousel slide" data-ride="carousel">
				    <?php 
				      $carousel_items = get_option( 'euco-baner-front-top' );
				    ?>
				    <!-- Indicators -->
				    <ol class="carousel-indicators">
				      <?php 
				        $index = 0;
				        foreach ($carousel_items as $item) { 
				      ?>
				          <li data-target="#carousel-front-top" data-slide-to="<?= $index; ?>" <?php if ($index == 0) echo 'class="active"'; ?>></li>
				      <?php
				          $index++;
				        } 
				      ?>
				    </ol>

				    <!-- Wrapper for slides -->
				    <div class="carousel-inner" role="listbox">
				      <?php 
				        $index = 0;
				        $captions =  get_carousel_caption();
				        //var_dump($captions);
				        foreach ($carousel_items as $item) { 
				      ?>
				      <div class="item <?php if ($index == 0) echo 'active'; ?>" style="background-image: url('<?= $item->url; ?>'); background-size: cover;">
				        <div class="carousel-caption">
				          <?php 
				            $title = get_baner_title($captions[$index]);
				            echo $title;
				            //var_dump($title);
				          ?>
				        </div>
				      </div>
				      <?php
				          $index++;
				        } 
				      ?>
				    </div>

				    <!-- Controls -->
				    <a class="left carousel-control" href="#carousel-front-top" role="button" data-slide="prev">
				      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				      <span class="sr-only">Previous</span>
				    </a>
				    <a class="right carousel-control" href="#carousel-front-top" role="button" data-slide="next">
				      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				      <span class="sr-only">Next</span>
				    </a>
				  </div>
				<?php } ?>
			</div>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
