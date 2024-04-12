import { useContext } from 'react'
import { getWinners } from '../../../api'
import { Pagination, PaginationContext } from '../../../components'

export const WinnersPagination = () => {
  const { pagination, setPagination } = useContext(PaginationContext)

  const handlePagination = async (newPage: number) => {
    const response = await getWinners({ page: newPage })
    setPagination(response)
  }

  return <Pagination onClick={handlePagination} {...pagination} />
}
