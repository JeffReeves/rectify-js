// ==UserScript==
// @name         Timer in Title
// @namespace    https://binary.run/
// @version      0.4
// @description  Updates the Tab Title to the value of the Timer
// @author       Jeff Reeves
// @match        https://duckduckgo.com/?*q=timer*
// @match        https://www.google.com/search?*q=timer*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var enableTitleTimer = function(timer_element){

        console.log('[INFO] Timer started');

        // initialize timer to be called every second
        var timer_delay = 1000;
        var time_remaining = '';
        var titleTimer = window.setInterval(function(){
        // NOTE: setInterval isn't precise, but this 
        //   should be good enough for basic timer usage

            // update remaining time
            time_remaining = timer_element.textContent;

            // stop timer if time is over
            if((time_remaining === "00h00m00s") || 
               (time_remaining === "00:00 00")){
                time_remaining = 'Time is up!';
                console.log('[COMPLETE] ' + time_remaining);
                clearInterval(titleTimer);
            }

            // set the title
            document.title = time_remaining;
        }, timer_delay, timer_element);
    }


    // get elements and start timer after the page has fully loaded
    window.addEventListener("load", function(){

        console.log('[INFO] DOM fully loaded');
        console.log('[TASK] Getting timer element ...');

        // variable to store the timer element
        var timer_element = undefined;

        // get timer element based on class name
        if(document.getElementsByClassName('time_display')[0]){ // DuckDuckGo
            console.log('[INFO] DuckDuckGo timer found');
            timer_element = document.getElementsByClassName('time_display')[0];
        }
        else if(document.getElementsByClassName('act-tim-txt-cnt')[1]){ // Google
            console.log('[INFO] Google timer found');
            timer_element = document.getElementsByClassName('act-tim-txt-cnt')[1];
        }

        // start timer
        if(timer_element){
            console.log('[TASK] Starting timer ...');
            enableTitleTimer(timer_element);
        }
        else {
            console.log('[ERROR] Unable to acquire timer element');
            console.log('[HELP] Please check DOM for the proper class'); 
            console.log('       name and array item, and update the userscript');
        }
    });
})();

