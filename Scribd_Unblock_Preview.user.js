// ==UserScript==
// @name        Scribd Document Preview Unblocker
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Injects some CSS to unblock blurred page previews
// @copyright   2016, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/Scribd_Unblock_Preview.user.js
// @icon        https://gitlab.com/Roboe/userscripts/raw/master/img/scribd_icon.jpg
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.0
// @match       https://*.scribd.com/doc/*/*
// @match       https://*.scribd.com/document/*/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    scribd_style Scribd_Unblock_Preview.user.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('scribd_style'));
