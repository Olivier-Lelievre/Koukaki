<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Q^.(#`/QDZ#vW,;|1og.-)7h#7td4J]hZRSJ=y ACS;8-!0>=yeB].7S<zj3 :{l' );
define( 'SECURE_AUTH_KEY',   '-W=>-at-xCRj@acNo(9k{zsuP8GV@{3&vz1SpbEcAGq+,60W^i!}nBw[tom+ApDp' );
define( 'LOGGED_IN_KEY',     'dK^&0Q_-P0N;gDO6K;iQut10c$4U+_FAPLoJjSt0TAcs#b|VF,ly}e X;QYT Ek7' );
define( 'NONCE_KEY',         'nRM-8bg$+798F|,c0@dK(.+7p,1N*_:q;NG-rMFy_ek2;`f$Ah<{JR=AUw4kv_:s' );
define( 'AUTH_SALT',         '^Q KBM)ym@2-Q(~1TUk~APH|Vy9nn_^`0U]/(rAC;ek|og$|<%G%p*b]pOm|Z}7T' );
define( 'SECURE_AUTH_SALT',  'OI!:QvN3?D:<BY&=dsP$3|F.FS*aR[ G=ZA!A*j_+P,K49rWrA;eCk?vF!819`#8' );
define( 'LOGGED_IN_SALT',    'v6@i/CmTaVlb?^hk.<.<a[g=fP6L2yWzr8uvT2/V4=IOE&)Vz@7K%N@AX$.xIqQc' );
define( 'NONCE_SALT',        '<AHL>Kw4lHW+zCf:*}Uw>G:dc2T59mFZNkv;SLS5xib`#06 GT:R{`!grn`M$X31' );
define( 'WP_CACHE_KEY_SALT', '~W!Xt?u79f8[KX|SXFm!X4&,@nfa*t5Wc%(/GN4AK!UNACOEhL}C?Y6-&8.+#*mI' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
