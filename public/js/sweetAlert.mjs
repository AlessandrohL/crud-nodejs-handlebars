import { fetchRequest } from './http-action.mjs'

const alertPalette = {
  color: '#d4be98',
  background: '#292828'
}

export const simpleAlert = text => {
  return Swal.fire({
    text,
    ...alertPalette
  })
}

export const errorAlert = error => {
  return Swal.fire({
    icon: 'error',
    title: error,
    color: '#abb2bf',
    background: '#282c34'
  })
}

export const answerDelete = (prefix = 'O', id, urlBase) => {
  return Swal.fire({
    title: `¿Estás seguro de eliminar al ${prefix}:${id}?`,
    text: 'No podrás revertirlo.',
    icon: 'warning',
    ...alertPalette,
    showCancelButton: true,
    confirmButtonColor: '#9ec07c',
    cancelButtonColor: '#fb4934',
    cancelButtonText: 'Cancelar',
    confirmButtonText: '¡Sí, bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      const url = `${urlBase}/${id}`
      fetchRequest(url, 'DELETE', simpleAlert)
    }
  })
}

export const detailsModal = (html) => {
  return Swal.fire({
    ...alertPalette,
    title: 'Libros',
    html,
    showCloseButton: true
  })
}
