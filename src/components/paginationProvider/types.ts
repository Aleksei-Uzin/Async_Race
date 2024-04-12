import { ICar, IPagination, IWinner } from '../../api'

export interface IPaginationContext {
  pagination: IPagination<ICar | IWinner>
  setPagination?: (arg: IPagination<ICar | IWinner>) => void
}

export interface IPaginationProviderProps<T> {
  children: JSX.Element[]
  pagination: IPagination<T>
}
