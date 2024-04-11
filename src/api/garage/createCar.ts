import { getFullUrl } from '../utils'
import { ICar } from './types'

export const createCar = async ({
  color,
  name,
}: Omit<ICar, 'id'>): Promise<ICar> => {
  const fullUrl = getFullUrl('/garage')
  const response = await fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ color, name }),
  })
  const content: ICar = await response.json()

  return content
}
