import { IPagination } from '../../api'

export type PaginationProps<T> = IPagination<T> & {
  onClick: (newPageNumber: number) => void
}
