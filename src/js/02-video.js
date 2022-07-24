import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');

const player = new Player(playerEl);

player.on('play', function () {
  console.log('played the video!');
});

function timeSecond(data) {
  const currentTime = data.seconds;
  console.log(currentTime);
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const time = throttle(timeSecond, 1000);

player.on('timeupdate', time);

const getTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getTime).then(function(seconds) {
  }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;

        default:
        break;
    }
});


