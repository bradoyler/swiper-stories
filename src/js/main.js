import Swiper from 'swiper'
import browserModal from './modal' // eslint-disable-line no-unused-vars
// require('swiper/dist/css/swiper.min.css')
require('../styles/main.scss')

function init (selector, swiperOptions, options) {
  const defaults = {
    paginationType: 'progress',
    paginationClickable: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    hashnav: true,
    hashnavWatchState: true,
    keyboardControl: true
  }
  // https://github.com/nolimits4web/Swiper/blob/master/dist/js/swiper.js#L26

  const opts = Object.assign(defaults, swiperOptions)
  const swiper = new Swiper(selector, opts) // eslint-disable-line no-unused-vars
}

// attach to window
window.SwiperStories = init
