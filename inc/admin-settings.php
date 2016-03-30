<?php

// admin settings

add_action( 'admin_menu', 'my_admin_menu' );
function my_admin_menu() {
    add_options_page( 'EuCO', 'EuCO', 'manage_options', 'euco-settings', 'euco_options_page' );
}

add_action( 'admin_init', 'my_admin_init' );
function my_admin_init() {
  register_setting( 'euco-settings-group', 'euco-kontakt-email', 'euco_kontakt_email_validate');
  register_setting( 'euco-settings-group', 'euco-baner-front-top', 'decode_carousel_image_data');
  register_setting( 'euco-settings-group', 'euco-baner-front-top-text' );
  register_setting( 'euco-settings-group', 'euco-baner-front-middle', 'decode_image_data');
  register_setting( 'euco-settings-group', 'euco-baner-front-middle-text');
  register_setting( 'euco-settings-group', 'euco-baner-top-subpages', 'decode_image_data');
  register_setting( 'euco-settings-group', 'euco-baner-top-subpages-text' );
  register_setting( 'euco-settings-group', 'euco-baner-top-invest', 'decode_image_data');
  register_setting( 'euco-settings-group', 'euco-baner-top-invest-text' );
  add_settings_section( 'section-one', 'Kontakt', 'section_one_callback', 'euco-settings' );
  add_settings_field( 'adres-email', 'Adres email', 'adres_email_callback', 'euco-settings', 'section-one' );
  add_settings_section( 'section-two', 'Banery', 'section_two_callback', 'euco-settings' );
  add_settings_field( 'baner-top-front', 'Górny baner strona główna - obraz', 'add_carousel_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-front-top') );
  add_settings_field( 'baner-top-front-text', 'Górny baner strona główna - tekst', 'add_carousel_text_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-front-top-text') );
  add_settings_field( 'baner-middle-front', 'Środkowy baner strona główna - obraz', 'add_baner_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-front-middle') );
  add_settings_field( 'baner-middle-front-text', 'Środkowy baner strona główna - tekst', 'add_baner_text_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-front-middle-text') );
  add_settings_field( 'baner-top-subpages', 'Górny baner posdstrony - obraz', 'add_baner_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-top-subpages') );
  add_settings_field( 'baner-top-subpages-text', 'Górny baner posdstrony - tekst', 'add_baner_text_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-top-subpages-text') );
  add_settings_field( 'baner-top-invest', 'Górny baner strefa inwestora - obraz', 'add_baner_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-top-invest') );
  add_settings_field( 'baner-top-invest-text', 'Górny baner strefa inwestora - tekst', 'add_baner_text_callback', 'euco-settings', 'section-two', array('position' => 'euco-baner-top-invest-text') );
}

function section_one_callback() {
  echo 'Ustawienia formularza kontaktowego.';
}

function section_two_callback() {
  wp_enqueue_media();
  wp_enqueue_script( 'wp_img_upload', get_template_directory_uri() . '/js/media-upload.js', array('jquery', 'media-upload'), '0.0.2', true );
  wp_localize_script( 'wp_img_upload', 'customUploads', array( 'imageData' => array( 0 => get_option( 'euco-baner-front-top' ), 1 => get_option( 'euco-baner-front-middle' ), 2 => get_option( 'euco-baner-top-subpages' ), 3 => get_option( 'euco-baner-top-invest' ) ) ) );
  //wp_enqueue_script( 'my_custom_quicktags', get_template_directory_uri() . '/scripts/euco-custom-quicktags.js', array('quicktags') );
  echo 'Ustawienia banerów.';
}

function adres_email_callback() {
  $setting = esc_attr( get_option( 'euco-kontakt-email' ) );
  ?>
  <div class="metabox_wrapper">
    <input type="text" name="euco-kontakt-email" value="<?= $setting; ?>" />
  </div>
  <?php
}

function add_baner_callback($args) {

  $image = get_option( $args['position'] );
  ?>
  <div class="metabox_wrapper">
    <img id="image-tag-<?= $args['position']; ?>">
    <input type="hidden" id="img-hidden-field-<?= $args['position']; ?>" name="<?= $args['position']; ?>" value="<?= $image; ?>">
    <input type="button" class="image-upload-button button" data-media-upl="<?= $args['position']; ?>" value="Add Image">
    <input type="button" class="image-delete-button button" data-media-upl="<?= $args['position']; ?>" value="Delete Image">
  </div>

  <?php
}

function add_baner_text_callback($args) {
  $setting = esc_attr( get_option( $args['position'] ) );

  $lang_option = get_option('mltlngg_options');
  $languages = $lang_option['list_of_languages'];
  $default_setting = "[tytul][/tytul]&#13;&#10;[podtytul][/podtytul]";
  $default_settings = "";

  foreach ($languages as $language) {
    $default_settings .= "[" . $language['locale'] . "]" . "\n" . $default_setting . "\n" . "[/" . $language['locale'] . "]" . "\n";
  }

  $setting = ( !empty( $setting ) ) ? esc_attr( get_option( $args['position'] ) ) : $default_settings;
  ?>
  <div class="metabox_wrapper">
    <textarea name="<?= $args['position']; ?>" rows="8"><?= $setting; ?></textarea>
  </div>
  <?php
}

function add_carousel_callback($args) {

  $image = get_option( $args['position'] );
  ?>
  <div class="metabox_wrapper_carousel">
    <div id="images-top-carousel">
      <?php
        $next_seq = count($image);
        for ( $i = 0; $i < $next_seq - 1; $i++) {
          //var_dump($img);
          ?>
            <img id="image-tag-<?= $args['position']; ?>-<?= $i; ?>" src="<?= $image[$i]->url; ?>" data-next-seq="<?= $i; ?>" style="width: 100%;" />
          <?php
        }
      ?>
      <img id="image-tag-<?= $args['position']; ?>" data-next-seq="<?= ($next_seq - 1); ?>" />
    </div>
    <input type="hidden" id="img-hidden-field-<?= $args['position']; ?>" name="<?= $args['position']; ?>" value="<?= $image; ?>">
    <input type="button" id="image-carousel-upload-button" data-media-upl="<?= $args['position']; ?>" class="button" value="Add Image">
    <input type="button" id="image-carousel-delete-button" data-media-upl="<?= $args['position']; ?>" class="button" value="Delete Last Image">
  </div>

  <?php
}

function add_carousel_text_callback($args) {
  $setting = esc_attr( get_option( $args['position'] ) );

  $lang_option = get_option('mltlngg_options');
  $languages = $lang_option['list_of_languages'];
  $slide = "";
  $default_setting = "[tytul][/tytul]&#13;&#10;[podtytul][/podtytul]";
  $default_settings = "";

  foreach ($languages as $language) {
    $default_settings .= "[" . $language['locale'] . "]" . "\n" . $default_setting . "\n" . "[/" . $language['locale'] . "]" . "\n";
  }

  $setting = ( !empty( $setting ) ) ? esc_attr( get_option( $args['position'] ) ) : $default_settings;
  ?>
  <div class="metabox_wrapper">
    <textarea id="carousel-text-editor" name="<?= $args['position']; ?>" rows="16"><?= $setting; ?></textarea>
  </div>
  <?php
}

function euco_options_page() {
  ?>
  <style>
    .settings_wrapper > form > table > tbody > tr > th {
      width: 270px;
    }
    textarea {
      width: 100%;
    }
  </style>
  <div class="settings_wrapper">
      <h2>EuCO - ustawienia</h2>
      <form action="options.php" method="POST">
          <?php settings_fields( 'euco-settings-group' ); ?>
          <?php do_settings_sections( 'euco-settings' ); ?>
          <?php submit_button(); ?>
      </form>
  </div>
  <?php
}

function euco_kontakt_email_validate( $input ) {
  $email = get_option( 'euco-kontakt-email' );

  if ( is_email( $input ) )
      $email = $input;
  else
      add_settings_error( 'euco-kontakt-email', 'invalid-email', 'Wprowadzono nieprawidłowy adres e-mail.' );

  return $email;
}

function decode_image_data( $input_img ) {
  $image = get_option( 'euco-baner-front-top' );

  $image_tmp = json_decode( stripslashes( $input_img ) );

  if ( empty($input_img) ) {
    $image = null;
  }  else if ( is_object( $image_tmp[0] ) ) {
    $image = array( 'id' => intval( $image_tmp[0]->id ), 'url' => esc_url_raw( $image_tmp[0]->url ) );
  } else
      add_settings_error( 'euco-baner-front-top', 'invalid-image', 'Wystąpił problem z zapisem obrazka (górny baner strona główna).' );

  return $image;
}

function decode_carousel_image_data( $input_img ) {
  $image = get_option( 'euco-baner-front-top' );
  $image_tmp = json_decode( stripslashes( $input_img ) );

  if ( empty($input_img) ) {
    $image = null;
  }  else if ( is_object( $image_tmp[0] ) ) {
    $image = array();
    foreach ($image_tmp as $single_img) {
      array_push($image, $single_img);
    }
  } else
      add_settings_error( 'euco-baner-front-top', 'invalid-image', 'Wystąpił problem z zapisem obrazka (górny baner strona główna).' );
  return $image;
}

function get_carousel_caption() {
  $caption_options = esc_attr( get_option( 'euco-baner-front-top-text' ) );
  $captions = explode("[SlideSeparator]", $caption_options);
  return $captions;
}