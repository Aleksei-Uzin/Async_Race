import { getFullUrl } from '../utils'
import { ICar } from './types'

export const getCar = async (id: number): Promise<ICar> => {
  const fullUrl = getFullUrl('/garage')
  const urlWithId = `${fullUrl}/${id}`
  const response = await fetch(urlWithId)
  const car: ICar = await response.json()

  return car
}
