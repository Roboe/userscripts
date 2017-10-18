// This is a webextension background script

// Constants
const REGEX_READER_VIEW = /^about:reader\?url=.*/ // bug #1286387 https://bugzilla.mozilla.org/show_bug.cgi?id=1286387
// Maybe Readability.js can be used, instead: https://github.com/mozilla/readability
const PATH_DEP_JSPDF = "/dependencies/jspdf.min.js"
const PATH_DEP_READABILITY = "/dependencies/Readability.js"
const PATH_CONTENT_SCRIPT = "/reader-view-to-pdf.js"


// Functions
function handleBrowserActionClick(tab, ...rest) {
  //console.log(tab, ...rest)

  Promise.all([
    browser.tabs.executeScript(tab.id, {
     file: PATH_DEP_JSPDF,
    }),
    browser.tabs.executeScript(tab.id, {
      file: PATH_DEP_READABILITY,
    }),
  ])
  .then((...results) => {
    console.log('injected jsPDF and Readability', results)

    browser.tabs.executeScript(tab.id, {
      file: PATH_CONTENT_SCRIPT,
    })
    .then(() => console.log('executed script'))
  })
}


/* Main */
// Listen for clicks in page action
browser.browserAction.onClicked.addListener(handleBrowserActionClick)
