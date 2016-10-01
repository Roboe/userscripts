// ==UserScript==
// @name        Scribd Document Downloader
// @namespace   https://gitlab.com/Roboe/userscripts
// @description Generate a PDF from the scraped preview images on Scribd
// @copyright   2016, Roberto M. F. (http://virgulilla.com)
// @homepageURL https://gitlab.com/Roboe/userscripts
// @supportURL  https://gitlab.com/Roboe/userscripts/issues
// @updateURL   https://gitlab.com/Roboe/userscripts/raw/master/Scribd_Downloader.user.js
// @icon        img/scribd_icon.png
// @license     GPLv3; http://www.gnu.org/licenses/gpl.html
// @version     1.0
// @match       https://*.scribd.com/doc/*/*
// @match       https://*.scribd.com/document/*/*
// @grant       GM_xmlhttpRequest
// @require     utils/GM_fetchBlob.js
// @require     https://bowercdn.net/c/jspdf-1.2.61/dist/jspdf.min.js
// @run-at      document-idle
// ==/UserScript==

// TODO: Try downloading https://www.scribd.com/doc/107024210/Fubini-Enrico-La-estetica-musical-desde-la-antiguedad-hasta-el-siglo-XX
// TODO: Read jsPDF API from source (no docs available!): http://mrrio.github.io/doc/symbols/src/c__work_jsPDF_tools_jspdf.js.html

// Functions
function getImageUrl(page) {
  const urlMatcher = /https:\/\/html\d-f.scribdassets.com\/(.+)\/pages\/\d+-(.+)\.jsonp/;
  const [, documentId, pageId] = document.querySelector(`#outer_page_${page} + script`).textContent.match(urlMatcher);

  return `http://html.scribd.com/${documentId}/images/${page}-${pageId}.jpg`;
}

function createNewPdf(dataUri) {
  const doc = new jsPDF();
  return doc;
}

function getCenteredCoords() {
  // WIP
  return [0, 0, 210, 297];
}

function addPageToPdf(doc, imageDataUri, isFirstPage) {
  if (!isFirstPage) doc.addPage();
  doc.addImage(imageDataUri, 'JPEG', ...getCenteredCoords());
}

// State
const [totalPages] = document.querySelector('span.total_pages').textContent.match(/\d+/);
const [, documentTitle] = window.location.pathname.match(/\/doc(?:ument)?\/\d+\/(.+)/);
console.log(documentTitle, totalPages);

const pdfDocument = createNewPdf();

const promiseChain = Array.from(Array(parseInt(totalPages)), (x, y) => y + 1)
  .reduce((promisesStore, pageNumber) => {
    const pagePromise = GM_fetchBlob(getImageUrl(pageNumber), 'image/jpeg')
      .then((dataUri) => {
//        console.log(pageNumber, dataUri);
//        window.open(dataUri,'_blank');
        return dataUri;
      });

    return [...promisesStore, pagePromise];
  }, []);

console.log(promiseChain, promiseChain.length);

Promise.all(promiseChain)
  .then((uris) => {
//    console.log(...values);
    uris.forEach((dataUri, index) => {
      addPageToPdf(pdfDocument, dataUri, index === 0);
    });
    return true;
  })
  .then(() => {
    pdfDocument.save(`${documentTitle}.pdf`);
  });
