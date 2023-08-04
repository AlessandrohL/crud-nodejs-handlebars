import { getDetails } from './details.mjs'
import { answerDelete, detailsModal } from './sweetAlert.mjs'

document.addEventListener('click', async e => {
  if (e.target.matches('.action-detail-btn, .action-detail-btn > *')) {
    const urlBase = '/authors'
    const id = e.target.dataset.id
    const html = await getDetails('author', `${urlBase}/books/${id}`)
    detailsModal(html)
  }

  if (e.target.matches('.action-delete-btn, .action-delete-btn > *')) {
    const urlBase = `/${e.target.dataset.entity}`
    const prefix = e.target.dataset.entity[0].toUpperCase()
    const id = e.target.dataset.id
    answerDelete(prefix, id, urlBase)
  }

  if (e.target.matches('.action-edit-btn, .action-edit-btn > *')) {
    const urlBase = `/${e.target.dataset.entity}`
    const id = e.target.dataset.id
    window.location.href = `${urlBase}/update/${id}`
  }
})
