import { Clock } from './components/clock/Clock.js';

import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from './components/progressBar/renderProgressBar.js';

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

const clock = new Clock('.hero .clock', {
    month: 1,
    day: 1,
    hour: 0,
    minutes: 0,
    seconds: 0
});
clock.init();

renderProgressBar('.left', progressBarData);

renderSocials('footer > .long-row', socialsData);