import { IPagination, fetchPagelable } from '../fetchPagelable'
import { PAGE_SIZE } from '../constants'
import { ICar } from './types'
import { prepareQueryParams } from '../utils'

export const getCars = async ({
  page = 1,
}: {
  page?: number
}): Promise<IPagination<ICar>> => {
  const queryParams = prepareQueryParams({ _page: page, _limit: PAGE_SIZE })
  const cars = await fetchPagelable<ICar>('/garage', page, queryParams)

  return cars
}
