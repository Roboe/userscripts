// ==UserScript==
// @name        WhatsApp Web Dark UI (Numix)
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Injects some CSS to change the theme to a dark Numix style
// @copyright   2016, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/WA_Dark_UI.user.js
// @icon        img/wa_icon.png
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.0
// @match       https://web.whatsapp.com/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    wa_style WA_Dark_UI.user.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('wa_style'));
