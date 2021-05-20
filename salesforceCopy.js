// ==UserScript==
// @name         Salesforce Copy
// @namespace    http://salesforce.com/
// @description  copy important data out of Salesforce easily
// @include        /^https?://.*lightning.force\.com/.*$/
// @author       Gabriel Seltzer
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @updateURL    https://raw.githubusercontent.com/Memnarch1113/salesforceScripts/main/salesforceCopy.js
// @downloadURL  https://raw.githubusercontent.com/Memnarch1113/salesforceScripts/main/salesforceCopy.js
// @version      0.2
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //alert("hello world");
    console.log("Hello World |||||||||||||||||||")
    // document.addEventListener('DOMContentLoaded', function() {
    // document.addEventListener('readystatechange', function() {
    // }, false);

    // register the handler 
    document.addEventListener('keyup', e => {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        if (e.ctrlKey && e.key === 'ArrowDown') {
            // call your function to do the thing
            // let secondaryFields = document.getElementsByClassName("slds-grid slds-page-header__detail-row")
            let secondaryFields = document.getElementsByClassName("test-id__field-value slds-form-element__static slds-grow word-break-ie11")
            // let secondaryFields = document.querySelectorAll(".highlights slds-clearfix slds-page-header slds-page-header_record-home")
            console.log(secondaryFields)
        }
    }, false);

})();