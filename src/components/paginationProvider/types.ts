import { ICar, IPagination } from '../../api'

export interface IPaginationContext {
  pagination: IPagination<ICar>
  setPagination?: (arg: IPagination<ICar>) => void
}

export interface IPaginationProviderProps extends IPaginationContext {
  children: JSX.Element[]
}
