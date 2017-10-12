const METADATA_URL_BASE = 'http://dinamics.ccma.cat/pvideo/media.jsp?media=video&version=0s&idint='

const listedChapters = document.querySelectorAll('li.F-llistat-item a[href].F-capsaImatge')

const chaptersUrls = (listedChapters.length > 0) ? listedChapters : [ window.location ]

const chapters = [...chaptersUrls]
  .map((sourceElement) => {
    const url = sourceElement.href
    const id = url.split('/').reverse()[1]
    const metadataUrl = `${METADATA_URL_BASE}${id}`

    return {
      id,
      sourceElement,
      url,
      metadataUrl,
    }
  })

const chaptersPromises = chapters.map((chapter) => {
  return fetch(chapter.metadataUrl)
    .then((response) => response.json())
    .then((metadata) => {
      chapter.title = metadata.informacio.titol
      chapter.index = metadata.informacio.capitol
      chapter.videoUrl = metadata.media.url
      chapter.subtitlesUrl = metadata.subtitols.url

      return chapter
    })
    .then(console.log.bind(console))
})
