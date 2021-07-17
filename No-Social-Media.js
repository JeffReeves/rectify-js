// ==UserScript==
// @name         No Social Media
// @namespace    https://binary.run/
// @version      0.1
// @description  Redirects From Social Media to Wikipedia
// @author       Jeff Reeves
// @match        https?://*reddit.com/*
// @match        https?://*twitter.com/*
// @match        https?://*facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // redirect to wikipedia's article on problems with social media
    window.location.replace("https://en.wikipedia.org/wiki/Problematic_social_media_use");
})();