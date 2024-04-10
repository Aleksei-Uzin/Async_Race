import { PAGE_SIZE } from '../constants'

export const getTotalPages = (totalElements: number) =>
  Math.ceil(totalElements / PAGE_SIZE)
