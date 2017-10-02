// Constants
const DIACRITICAL_ACCENT_WORDS = [
  // Monosyllabic
  'dé',
  'él',
  'más',
  'mí',
  'sé',
  'sí',
  'té',
  'tú',
  'tí', // hypercorrection

  // Interrogative, exclamatory, emphatic
  'qué', // includes 'por qué'
  'quién',
  'cómo',
  'cuál',
  'cuándo',
  'cuánta', 'cuántas',
  'cuánto', 'cuántos',
  'cuán',
  'dónde',
  'adónde',

  // Tonicity
  'aún',

  // Demostrative pronouns (until 2010)
  'aquél', 'aquéllos',
  'aquélla', 'aquéllas',
  'ésa', 'ésas',
  'ése', 'ésos',

  // Controversial 'solo' (until 2010... presumably)
  'sólo',

  // Orthotypographical
  'ó',

  // Workaround for accents with RegExp insensitivity
  'Él',
  'Ésa', 'Ésas',
  'Ése', 'Ésos',
  'Ó',
]
.map((word) => new RegExp(`(^|\W)${word}(\W??|$)`, 'gi'));

const VOWELS_MAP = {
  'Á': 'A',
  'á': 'a',
  'É': 'E',
  'é': 'e',
  'Í': 'I',
  'í': 'i',
  'Ó': 'O',
  'ó': 'o',
  'Ú': 'U',
  'ú': 'u',
}


// Functions
function filterChildTextNodes(nodeList) {
  return [...nodeList].reduce((previousTextNodes, node) => {
    const childTextNodes = [...node.childNodes]
      .filter(childNode => childNode.nodeType === Node.TEXT_NODE);
    return [...previousTextNodes, ...childTextNodes];
  }, []);
}

function removeAccent(word) {
  return word
    .replace(/[ÁáÉéÍíÓóÚú]/g, (vowel) => VOWELS_MAP[vowel])
}


// Main
const nonEmptyNodes = document.querySelectorAll('body:lang(es) *:not(script):not(:empty)');
const textNodes = filterChildTextNodes(nonEmptyNodes);

DIACRITICAL_ACCENT_WORDS.forEach((word) => {
  textNodes.forEach((node) => {
    node.textContent = node.textContent.replace(word, removeAccent);
  });
});
