const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  nav: true,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  items: 1,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,
  edgePadding: 16,
  loop: false,
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  edgePadding: 75,
  loop: false,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
