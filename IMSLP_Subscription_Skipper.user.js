// ==UserScript==
// @name        IMSLP Subscription Page Skipper
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Avoid waiting 15 seconds when downloading scores on IMSLP
// @copyright   2016, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/IMSLP_Subscription_Page_Skipper.user.js
// @icon        img/imslp_icon.png
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.0
// @match       https://imslp.org/wiki/Special:ImagefromIndex/*
// @run-at      document-end
// @resource    dle_style DLE_Clean_UI.user.css
// ==/UserScript==

var countdownElement = document.querySelector('#sm_dl_wait');

if (countdownElement) {
  var destinationUrl = countdownElement.dataset['id'];

  location.href = destinationUrl;
}
