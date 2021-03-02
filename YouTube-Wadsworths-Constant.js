// ==UserScript==
// @name         YouTube - Wadsworth's Constant
// @namespace    https://binary.run/
// @version      1.0
// @description  Skips the first 1/3 of the video.
// @author       Jeff Reeves
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // get URL
    const URL = window.location.href;
    console.debug('[DEBUG] URL: ', URL);

    // if t= value is in URL parameter, exit early
    if(URL.indexOf('t=') !== -1){
        console.debug('[DEBUG] URL contains "t=" parameter');
        return false;
    }

    // if wadsworth=0 is in the URL parameter, exit early
    if(URL.indexOf('wadsworth=0') !== -1){
        console.debug('[DEBUG] URL contains "wadsworth=0" parameter');
        return false;
    }

    // get total video runtime
    let timeDurationElements = document.getElementsByClassName('ytp-time-duration');

    // if unable to get the elements containing the video duration, exit early
    if(!timeDurationElements){
        return false;
    }

    // split the duration string (hh:mm:ss) into separate parts
    let timeDuration = timeDurationElements[0].innerText;
    let timeSplit = timeDuration.split(':');
    let timeSplitLength = timeSplit.length;

    // recombine time pieces into total seconds
    let seconds = 0;
    switch(timeSplitLength){
        case 3: // hours + minutes + seconds
            seconds = (parseInt(timeSplit[0]) * 60 * 60) + (parseInt(timeSplit[1]) * 60) + parseInt(timeSplit[2]);
            break;
        case 2: // minutes + seconds
            seconds = (parseInt(timeSplit[0]) * 60) + parseInt(timeSplit[1]);
            break;
        case 1: // seconds
            seconds = parseInt(timeSplit[0]);
            break;
        default:
            console.error('[ERROR] Time duration string ("hh:mm:ss") was unable to be split into 1, 2, or 3 parts');
            console.debug('[INFO]  timeDuration: ', timeDuration);
            console.debug('[INFO]  timeSplit: ', timeSplit);
            console.debug('[INFO]  timeSplitLength: ', timeSplitLength);
    }
    console.debug('[DEBUG] seconds: ', seconds);

    // get 1/3 of total seconds
    const wadsworthSeconds = Math.round(seconds / 3);
    console.debug('[DEBUG] wadsworthSeconds: ', wadsworthSeconds);

    // create new URL with 1/3 of the total video length set using the "t=" parameter
    let newURL = URL + '&t=' + wadsworthSeconds;
    console.debug('[DEBUG] New URL: ', newURL);

    // redirect to the new URL
    window.location.replace(newURL);
})();