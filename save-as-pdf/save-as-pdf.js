// This is a webextension background script

// Constants
const REGEX_READER_VIEW = /^about:reader\?url=.*/ // bug #1286387 https://bugzilla.mozilla.org/show_bug.cgi?id=1286387
const PATH_DEP_JSPDF = "/jspdf.min.js"
const PATH_CONTENT_SCRIPT = "/reader-view-to-pdf.js"


// Functions
function handlePageUpdate(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'complete') return
  if (!REGEX_READER_VIEW.test(tab.url)) return

  browser.pageAction.show(tab.id)
}

async function handlePageActionClick(tab, ...rest) {
  console.log(tab, ...rest)

  await browser.tabs.executeScript(tab.id, {
   file: PATH_DEP_JSPDF,
  })
  await browser.tabs.executeScript(tab.id, {
    file: PATH_CONTENT_SCRIPT,
  })

  console.log('injected')
}


/* Main */
// Show page action in future-loaded Reader View tabs
browser.tabs.onUpdated.addListener(handlePageUpdate)

// Listen for clicks in page action
browser.pageAction.onClicked.addListener(handlePageActionClick)
