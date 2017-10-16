// From: https://rawgit.com/MrRio/jsPDF/master/
// Enable on "about:reader?url=*" urls

// Icons http://fontawesome.io/icon/download/ & http://fontawesome.io/icon/file-pdf-o/

var doc = new jsPDF();

// All units are in the set measurement for the document
// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
doc.fromHTML(document.querySelector('.span5'), 15, 15, {
  'width': 170
});

