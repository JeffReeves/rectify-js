// ==UserScript==
// @name         Reddit-Redirecter
// @namespace    https://binary.run/
// @version      0.1
// @description  Redirect away from Reddit (to stop wasting time)
// @author       Jeff Reeves
// @match        https://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // check out YouTube Watch Later Playlist instead
    window.location.replace("https://www.youtube.com/playlist?list=WL");
})();