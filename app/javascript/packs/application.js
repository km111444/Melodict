// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "controllers";
import "bootstrap";
import "chartkick/chart.js";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// particlesJS("particles-js",
//   {"particles":{"number":{"value":38,"density":{"enable":true,"value_area":1499.3805191013182}},
//                 "color":{"value":"#ffffff"},
//                 "shape":{"type":"circle",
//                         "stroke":{"width":0,
//                                   "color":"#000000"},
//                         "polygon":{"nb_sides":5},
//                         "image":{"src":"img/github.svg",
//                                 "width":100,"height":100}},
//                 "opacity":{"value":0.5,
//                           "random":true,
//                           "anim":{"enable":false,
//                                   "speed":1,
//                                   "opacity_min":0.1,
//                                   "sync":false}},
//                 "size":{"value":16.03412060865521,
//                         "random":true,
//                         "anim":{"enable":false,
//                                 "speed":14.616558937213757,
//                                 "size_min":0.1,
//                                 "sync":false}},
//                 "line_linked":{"enable":false,
//                               "distance":500,
//                               "color":"#ffffff",
//                               "opacity":0.4,
//                               "width":2},
//                 "move":{"enable":true,
//                         "speed":6,
//                         "direction":"bottom",
//                         "random":false,
//                         "straight":false,
//                         "out_mode":"out",
//                         "bounce":false,
//                         "attract":{"enable":false,
//                                   "rotateX":600,
//                                   "rotateY":1200}}},
//   "interactivity":{"detect_on":"canvas",
//                   "events":{"onhover":{"enable":true,
//                                       "mode":"bubble"},
//                                       "onclick":{"enable":true,
//                                                 "mode":"repulse"},
//                                                 "resize":true},
//                   "modes":{"grab":{"distance":400,
//                                   "line_linked":{"opacity":0.5}},
//                                   "bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
//                                   "repulse":{"distance":200,"duration":0.4},
//                                   "push":{"particles_nb":4},
//                                   "remove":{"particles_nb":2}}},
//   "retina_detect":true});
// var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
//         requestAnimationFrame(update); };
//   requestAnimationFrame(update);;
