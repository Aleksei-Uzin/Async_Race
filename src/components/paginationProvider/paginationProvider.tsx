import { createContext, useState } from 'react'
import { ICar, IPagination } from '../../api'
import { IPaginationContext, IPaginationProviderProps } from './types'

export const PaginationContext = createContext<IPaginationContext>(
  {} as IPaginationContext
)

export function PaginationProvider({
  children,
  pagination,
}: IPaginationProviderProps) {
  const [state, setState] = useState(pagination)
  const handleState = (arg: IPagination<ICar>) => setState(arg)
  const value = { pagination: state, setPagination: handleState }

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
