<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package bloktherm
 */

get_header(); ?>
<!-- strona Lukasz -->
	<div id="primary" class="content-area woocommerce" style="padding-top:120px;">
		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<?php woocommerce_content(); ?>
					</div>
					<div class="col-sm-3">
						<?php get_sidebar(); ?>
					</div>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();
