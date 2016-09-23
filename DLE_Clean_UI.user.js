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
// @version     1.0
// @include     http://dle.rae.es/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('/* Injected by userscript */\
#idle { height: 50px; }\
#drea23 { padding-top: 1.4em; }\
#irae { margin: 1.2em 0 0 1em; height: unset; width: unset; }\
#iasale { margin: 1em 1em 0; height: unset; width: unset; }\
#resultados {margin-top: 4.5em; }\
@media all and (min-width: 737px) {\
  #resultados { margin-top: 0; }\
}\
@media all and (min-width: 841px) {\
  #irae { margin: .5em 1em; height: 65px; width: auto; }\
  #iasale { margin: 0 1em; height: 100px; width: auto; }\
}\
#header { display: none; /*top: 120px;*/ }\
body.dle #main { margin-top: -12em !important; }\
#diccionario { margin: 0 auto; width: unset; }\
#informa { display: none; }\
.box { padding-bottom: 0 !important; }\
');
