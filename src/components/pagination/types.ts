import { ICar, IPagination, IWinner } from '../../api'

export type PaginationProps = IPagination<ICar | IWinner> & {
  onClick: (newPageNumber: number) => void
}

export type PaginationMenuProps = Omit<
  PaginationProps,
  'content' | 'totalElements'
>
