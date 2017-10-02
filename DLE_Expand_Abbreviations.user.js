// ==UserScript==
// @name        Diccionario de la Lengua Española (DLE, former DRAE) Abbreviations Expander
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Injects some CSS to expand abbreviations, thus getting more readable descriptions
// @copyright   2017, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/DLE_Expand_Abbreviations.user.js
// @icon        img/dle_icon.jpg
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.0
// @include     http://dle.rae.es/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    dle_style DLE_Expand_Abbreviations.user.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('dle_style'));
