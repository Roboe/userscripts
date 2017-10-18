// This is a webextension content script

console.log('here content script reporting', jsPDF, Readability)

const loc = document.location;
const uri = {
  spec: loc.href,
  host: loc.host,
  prePath: loc.protocol + "//" + loc.host,
  scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
  pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
};
const article = new Readability(uri, document.cloneNode(true)).parse();
console.log(article);


const pdfDoc = new jsPDF();

const articleNode = document.createElement('article')
articleNode.innerHTML = article.content

const articlePdf = pdfDoc.fromHTML(articleNode, 15, 15, {
  'width': 170,
});

console.log(articlePdf);
