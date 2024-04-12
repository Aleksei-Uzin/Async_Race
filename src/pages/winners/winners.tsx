import { getWinners } from '../../api'
import { PaginationProvider } from '../../components'
import { useDataFromLoader } from '../../hooks'
import { WinnersPagination } from './winnersPagination'
import { WinnersTable } from './winnersTable'

export const Winners = () => {
  const pagination = useDataFromLoader(getWinners)

  return (
    <PaginationProvider pagination={pagination}>
      <WinnersTable title="Winners">
        <WinnersTable.Head />
        <WinnersTable.Body />
      </WinnersTable>
      <WinnersPagination />
    </PaginationProvider>
  )
}
