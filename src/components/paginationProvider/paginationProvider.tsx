import { createContext, useState } from 'react'
import { ICar, IPagination, IWinner } from '../../api'
import { IPaginationContext, IPaginationProviderProps } from './types'

export const PaginationContext = createContext<IPaginationContext>(
  {} as IPaginationContext
)

export function PaginationProvider({
  children,
  pagination,
}: IPaginationProviderProps<ICar | IWinner>) {
  const [state, setState] = useState(pagination)
  const handleState = (arg: IPagination<ICar | IWinner>) => setState(arg)
  const value = { pagination: state, setPagination: handleState }

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
