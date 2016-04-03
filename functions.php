<?php
/**
 * bloktherm functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package bloktherm
 */

if ( ! function_exists( 'bloktherm_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function bloktherm_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on bloktherm, use a find and replace
	 * to change 'bloktherm' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'bloktherm', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'bloktherm' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'bloktherm_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'bloktherm_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function bloktherm_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'bloktherm_content_width', 640 );
}
add_action( 'after_setup_theme', 'bloktherm_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function bloktherm_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'bloktherm' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'bloktherm_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function bloktherm_scripts() {
	wp_enqueue_style('bootstrap-styles', get_template_directory_uri().'/css/bootstrap.min.css' );
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '4.5.0', 'all' );
	wp_enqueue_script( 'bloktherm-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '3.3.6', true );

	wp_enqueue_script( 'bloktherm-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'bloktherm_scripts' );

/**
 * Add Respond.js for IE
 */
if( !function_exists('ie_scripts')) {
	function ie_scripts() {
	 	echo '<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->';
	   	echo ' <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->';
	   	echo ' <!--[if lt IE 9]>';
	    echo ' <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>';
	    echo ' <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>';
	   	echo ' <![endif]-->';
   	}
   	add_action('wp_head', 'ie_scripts');
} // end if

/**
* Load bootstrap menu
*/
require get_template_directory() . '/inc/bootstrap-walker.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load admin settings file.
 */
require get_template_directory() . '/inc/admin-settings.php';

function home_carousel() {
	$out = '<div class="container-fluid carousel-container">';
	$out .= '<div class="row">';
	$out .= '<div id="carousel-front-top" class="carousel slide" data-ride="carousel">';
	$carousel_items = get_option( 'euco-baner-front-top' );
	$out .= '<!-- Indicators -->';
	$out .= '<ol class="carousel-indicators">';
	$index = 0;
	foreach ($carousel_items as $item) {
	$out .= '<li data-target="#carousel-front-top" data-slide-to="' . $index . '" ' . ( ($index == 0) ? 'class="active"' : '' ) . '></li>';
	$index++;
	}
	$out .= '</ol>';
	$out .= '<!-- Wrapper for slides -->';
	$out .= '<div class="carousel-inner" role="listbox">';
	$index = 0;
	$captions =  get_carousel_caption();
	//var_dump($captions);
	foreach ($carousel_items as $item) { 
	$out .= '<div class="item '. ( ($index == 0) ? 'active' : '' ) . '" style="background-image: url('.$item->url.'); background-size: cover;">';
	$out .= '<div class="carousel-caption">';
	$out .= " ";
	$out .= '</div>';
	$out .= '</div>';
	$index++;
	}
	$out .= '</div>';
	$out .= '<!-- Controls -->';
	$out .= '<a class="left carousel-control" href="#carousel-front-top" role="button" data-slide="prev">';
	$out .= '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
	$out .= '<span class="sr-only">Previous</span>';
	$out .= '</a>';
	$out .= '<a class="right carousel-control" href="#carousel-front-top" role="button" data-slide="next">';
	$out .= '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
	$out .= '<span class="sr-only">Next</span>';
	$out .= '</a>';
	$out .= '</div>';
	$out .= '</div>';
	$out .= '</div>';
	return $out;
}
add_shortcode('hcrsl','home_carousel');