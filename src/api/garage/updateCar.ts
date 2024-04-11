import { getFullUrl } from '../utils'
import { ICar } from './types'

export const updateCar = async ({ id, ...payload }: ICar): Promise<ICar> => {
  const fullUrl = getFullUrl('/garage')
  const urlWithId = `${fullUrl}/${id}`
  const response = await fetch(urlWithId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const content: ICar = await response.json()

  return content
}
