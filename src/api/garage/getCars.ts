import { PAGE_SIZE, START_PAGE } from '../constants'
import { IPagination, fetchPagelable } from '../fetchPagelable'
import { prepareQueryParams } from '../utils'
import { ICar } from './types'

export const getCars = async ({
  page = START_PAGE,
}: {
  page?: number
}): Promise<IPagination<ICar>> => {
  const queryParams = prepareQueryParams({
    _page: page,
    _limit: PAGE_SIZE.SEVEN,
  })
  const cars = await fetchPagelable<ICar>(
    '/garage',
    queryParams,
    page,
    PAGE_SIZE.SEVEN
  )

  return cars
}
