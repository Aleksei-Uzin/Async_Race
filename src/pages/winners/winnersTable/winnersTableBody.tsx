import { useContext } from 'react'
import { PaginationContext } from '../../../components'
import { useWinnerData } from '../useWinnerData'
import { WinnersTableDataCell } from './winnersTableDataCell'
import { COLUMNS } from './constatns'
import { IWinner } from '../../../api'

export const WinnersTableBody = () => {
  const { pagination } = useContext(PaginationContext)
  const { winnersData } = useWinnerData(pagination.content as IWinner[])
  const rowItems = Object.keys(COLUMNS) as Array<keyof typeof COLUMNS>

  return (
    <tbody>
      {winnersData.map(winner => (
        <tr key={winner.id}>
          {rowItems.map(column => (
            <WinnersTableDataCell
              key={column}
              column={column}
              winner={winner}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )
}
