// ==UserScript==
// @name         Old Reddit
// @namespace    https://binary.run/
// @version      0.1
// @description  Redirect to Old Reddit
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var URL = window.location.href;
    var new_URL = URL.replace('www', 'old');
    window.location.replace(new_URL);
})();