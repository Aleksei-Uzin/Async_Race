import { PAGE_SIZE } from '../constants'
import { getFullUrl } from '../utils'
import { IPagination } from './types'

export const fetchPagelable = async <T>(
  url: string,
  currentPage: number,
  params: string
): Promise<IPagination<T>> => {
  const fullUrl = getFullUrl(url, params)
  const response = await fetch(fullUrl)
  const content: T[] = await response.json()
  const totalElements = parseInt(response.headers.get('X-Total-Count')!)
  const totalPages = Math.ceil(totalElements / PAGE_SIZE)

  return {
    content,
    currentPage,
    totalElements,
    totalPages,
  }
}
