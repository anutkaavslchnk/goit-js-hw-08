
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
const video=document.getElementById('vimeo-player');
const key="videoplayer-current-time";
player.on('timeupdate', throttle(function(data){
    const currentTime=data.seconds;
    localStorage.setItem(key, JSON.stringify(currentTime));
}, 1000));
const time=localStorage.getItem(key);
if(time='true'){
    player.setCurrentTime(parseFloat(time)).then(function(error){
switch(error.name){
    case "RangeError":
        break;
        default:
            break;

}
    });
}