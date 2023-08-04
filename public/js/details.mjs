import { errorAlert } from './sweetAlert.mjs'

const localhost = window.location.origin

export const getDetails = async (entity, urlBase) => {
  let html = ''

  if (entity === 'author') {
    try {
      const res = await fetch(`${localhost}${urlBase}`)
      const data = await res.json()
      const books = data.map(book => {
        return `<div class="details-field">
        <i class="bi bi-journals"></i>
        <div>
          <p>${book.title}</p>
          <span>- ${book.date_publication}</span>
        </div>
      </div>`
      })

      html = `<article class="details">
      ${books.join('')}
    </article>`
    } catch (error) {
      errorAlert(error.message)
    }
  }

  return html
}
