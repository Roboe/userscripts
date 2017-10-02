// ==UserScript==
// @name        Diccionario de la Lengua Española (DLE, former DRAE) UI Cleaner
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Injects some CSS to adjust and hide elements, thus getting a distraction-free dictionary experience
// @copyright   2015, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/DLE_Clean_UI.user.js
// @icon        dle-clean-ui/icon@2x.jpg
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     2.0
// @include     http://dle.rae.es/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    dle_style dle-clean-ui/style.user.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('dle_style'));
