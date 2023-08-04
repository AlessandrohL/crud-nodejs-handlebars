export const fetchRequest = async (path, method, alertError) => {
  const url = `http://localhost:3000${path}`
  try {
    const res = await fetch(url, { method })
    const correct = await res.status

    if (correct !== 200) {
      throw new Error('Ha ocurrido un error')
    }

    window.location.reload()
  } catch (error) {
    alertError(error.message)
  }
}
