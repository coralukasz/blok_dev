<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bloktherm
 */

?>

	</div><!-- #content -->
	<script type="text/javascript">
		jQuery(document).ready(function(){
			jQuery('#srch').on('click', function(){
				jQuery('#searchform').css('height','50px');
				jQuery('nav').css('top','50px');
				jQuery('#primary').css('margin-top','50px');
			});
			jQuery('.search-close > a').on('click', function(){
				jQuery('#searchform').css('height','0px');
				jQuery('nav').css('top','0px');
				jQuery('#primary').css('margin-top','0px');
			});
		});
	</script>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'bloktherm' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'bloktherm' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'bloktherm' ), 'bloktherm', '<a href="http://coraluka.linupl.info/" rel="designer">Lukasz Cora</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
