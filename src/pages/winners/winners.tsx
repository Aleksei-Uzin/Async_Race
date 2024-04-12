import { getWinners } from '../../api'
import { Pagination, PaginationProvider } from '../../components'
import { useDataFromLoader } from '../../hooks'
import { WinnersTable } from './winnersTable'

export const Winners = () => {
  const pagination = useDataFromLoader(getWinners)

  return (
    <PaginationProvider pagination={pagination}>
      <h2>WINNERS</h2>
      <WinnersTable>
        <WinnersTable.Head />
        <WinnersTable.Body />
      </WinnersTable>
      <Pagination onClick={() => {}} {...pagination} />
    </PaginationProvider>
  )
}
