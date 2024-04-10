import { getFullUrl } from '../utils'
import { IPagination } from './types'
import { getTotalPages } from './utils'

export const fetchPagelable = async <T>(
  url: string,
  currentPage: number,
  params: string
): Promise<IPagination<T>> => {
  const fullUrl = getFullUrl(url, params)
  const response = await fetch(fullUrl)
  const content: T[] = await response.json()
  const totalElements = parseInt(response.headers.get('X-Total-Count')!)
  const totalPages = getTotalPages(totalElements)

  return {
    content,
    currentPage,
    totalElements,
    totalPages,
  }
}
