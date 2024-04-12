import { IPagination, fetchPagelable } from '../fetchPagelable'
import { prepareQueryParams } from '../utils'
import { PAGE_SIZE, START_PAGE } from '../constants'
import { IWinner } from './types'

export const getWinners = async ({
  page = START_PAGE,
  sort = 'id',
  order = 'ASC',
}: {
  page?: number
  sort?: 'id' | 'wins' | 'time'
  order?: 'ASC' | 'DESC'
}): Promise<IPagination<IWinner>> => {
  const queryParams = prepareQueryParams({
    _page: page,
    _limit: PAGE_SIZE.TEN,
    _sort: sort,
    _order: order,
  })
  const winners = await fetchPagelable<IWinner>(
    '/winners',
    queryParams,
    page,
    PAGE_SIZE.TEN
  )

  return winners
}
