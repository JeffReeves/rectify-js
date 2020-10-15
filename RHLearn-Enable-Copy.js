// ==UserScript==
// @name         RHLearn Copy
// @namespace    https://binary.run/
// @version      0.1
// @description  Enables copying
// @author       Jeff Reeves
// @match        https://rhlearn.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // run on window load
    window.addEventListener("load", function(){

        console.log('[INFO] Window Loaded');

        window.setTimeout(function(){

            console.log('[TASK] Enabling copy ...');

            // get the body
            var clone = document.body.cloneNode(true);

            // remove attributes from body tag preventing selection
            clone.removeAttribute("onselectstart");
            clone.removeAttribute("oncopy");
            clone.removeAttribute("oncontextmenu");

            // get all script tags on the page
            var scriptTags = clone.getElementsByTagName('script');

            // loop through script tags
            for(var i = 0; i < scriptTags.length; i++){

                // remove script tags with a source pointing to disable copying
                var scriptSrc = scriptTags[i].src;
                if(scriptSrc.indexOf('copyprevention') !== -1){
                    scriptTags[i].remove();
                    continue;
                }
                // remove any script containing hardcode to disable copying
                var scriptBody = scriptTags[i].innerText;
                if(scriptBody.indexOf('copyprevention') !== -1){
                    scriptTags[i].remove();
                }
            }

            // replace body with clone
            document.body = clone;

            console.log('[COMPLETE] Enabled Copying');

        }, 500);
    });

})();