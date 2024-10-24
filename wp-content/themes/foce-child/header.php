<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <ul>
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
                <button>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </ul>
		</nav><!-- #site-navigation -->
        <div class="burger-open">
            <img class="link-burger" src="<?php echo get_theme_file_uri() . '/images/logoBurger.png'; ?> " alt="logo Fleurs d'oranger & chats errants"/>
            <ul>
                <li><a class="link-burger" href="#story">Histoire</a></li>
                <li><a class="link-burger" href="#characters">Personnages</a></li>
                <li><a class="link-burger" href="#place">Lieu</a></li>
                <li><a class="link-burger" href="#studio">Studio Koukaki</a></li>
            </ul>
            <p>STUDIO KOUKAKI</p>
            <div>
                <?php get_template_part( 'parts/animationsBurger' ); ?>
            </div>
        </div>
	</header><!-- #masthead -->
