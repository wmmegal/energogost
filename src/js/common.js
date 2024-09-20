import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

window.Alpine = Alpine;

Alpine.start();

new Splide('.splide', {
    direction: 'ttb',
    height: 705,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 5000,
    breakpoints: {
        640: {
            height: 300,
        },
    },
}).mount();

Fancybox.bind('[data-fancybox]');
