import { getFullUrl } from '../utils'

export const deleteCar = async (id: number): Promise<void> => {
  const fullUrl = getFullUrl('/garage')
  const urlWithId = `${fullUrl}/${id}`
  await fetch(urlWithId, { method: 'DELETE' })
}
