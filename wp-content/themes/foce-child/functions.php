<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
        // Chargement du style.css du thème parent
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
        // Chargement du theme.css du thème enfant
    wp_enqueue_style( 'theme', get_stylesheet_directory_uri() . '/css/theme.css');
        // Chargement du script.js du thème enfant
    wp_enqueue_script( 'foce-child-script', get_stylesheet_directory_uri() . '/js/script.js', array(), null, true);
        // Chargement du script pour skrollr
    wp_enqueue_script( 'foce-child-skrollr', $src='https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js', array(), null, true);
        // Chargement du script pour swipper 
    wp_enqueue_script( 'foce-child-swiper', $src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, false);
        // Chargement du css de Swiper
    wp_enqueue_style( 'foce-child-swipercss', $src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}