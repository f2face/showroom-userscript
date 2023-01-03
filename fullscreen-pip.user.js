// ==UserScript==
// @name SHOWROOM Fullscreen and PIP
// @description Show "Fullscreen" and "Picture-in-Picture" buttons in SHOWROOM web page.
// @version 1.0.0
// @namespace https://www.showroom-live.com/
// @match https://www.showroom-live.com/r/*
// @grant none
// ==/UserScript==

(function () {
    'use strict';

    const video = document.querySelector('video');

    const fullscreenButton = document.createElement('button');
    fullscreenButton.innerHTML = 'Fullscreen';
    fullscreenButton.style.marginRight = '10px';
    fullscreenButton.style.padding = '5px';
    fullscreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });

    const pipButton = document.createElement('button');
    pipButton.innerHTML = 'Picture-in-Picture';
    pipButton.style.marginRight = '10px';
    pipButton.style.padding = '5px';
    pipButton.addEventListener('click', function () {
        if (video.requestPictureInPicture) {
            video.requestPictureInPicture();
        }
    });

    const settingElement = document.querySelector('.st-video__setting');
    settingElement.insertBefore(fullscreenButton, settingElement.lastElementChild);
    settingElement.insertBefore(pipButton, settingElement.lastElementChild);
})();
