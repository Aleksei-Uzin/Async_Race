import { IPagination, fetchPagelable } from '../fetchPagelable'
import { PAGE_SIZE, START_PAGE } from '../constants'
import { ICar } from './types'
import { getFullUrl, prepareQueryParams } from '../utils'

export const getCars = async ({
  page = START_PAGE,
}: {
  page?: number
}): Promise<IPagination<ICar>> => {
  const queryParams = prepareQueryParams({ _page: page, _limit: PAGE_SIZE })
  const cars = await fetchPagelable<ICar>('/garage', page, queryParams)

  return cars
}

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

export const deleteCar = async (id: number): Promise<void> => {
  const fullUrl = getFullUrl('/garage')
  const urlWithId = `${fullUrl}/${id}`
  await fetch(urlWithId, { method: 'DELETE' })
}

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
