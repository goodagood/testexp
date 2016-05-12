/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'


  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: 'cd1',
      type: 'video/*',
      poster: 'vid/cd1.30.png',
      sources: [
          {
              href: 'vid/cd1.ogg',
              type: 'video/ogg',
          },
          {
              href: 'vid/cd1.webm',
              type: 'video/webm',
          },
          {
              href: 'vid/cd1.mp4',
              type: 'video/mp4',
          }
          ]

    },
    {
      title: 'cat-dog',
      type: 'video/mp4',
      poster: 'vid/cat-dog.png',
      sources: [
          {
              href: 'vid/cat-dog.webm',
              type: 'video/webm',
          },
          {
              href: 'vid/cat-dog.mp4',
              type: 'video/mp4',
          },
          {
              href: 'vid/cat-dog.ogg',
              type: 'video/ogg',
          }
          ]

    },
    {
      title: 'cd3',
      href: 'vid/cd3.webm',
      type: 'video/webm',
      poster: 'vid/cd3.png'
    },
    {
      title: 'Elephants Dream',
      href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv/' +
        'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
      type: 'video/webm',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    },
    {
      title: 'LES TWINS - An Industry Ahead',
      type: 'text/html',
      youtube: 'zi4CIXpx7Bg'
    },
    {
      title: 'KN1GHT - Last Moon',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
    }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
