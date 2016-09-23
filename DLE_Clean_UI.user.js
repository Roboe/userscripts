// ==UserScript==
// @name        Diccionario de la Lengua Española (DLE, former DRAE) UI Cleaner
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Injects some CSS to adjust and hide elements, thus getting a distraction-free dictionary experience
// @copyright   2015, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/DLE_Clean_UI.user.js
// @icon        https://gitlab.com/Roboe/userscripts/raw/master/img/dle_icon.jpg
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.1
// @include     http://dle.rae.es/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    dle_style DLE_Clean_UI.user.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('dle_style'));
