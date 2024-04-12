import { Car } from '../../../components'
import { IWinnerData } from '../types'
import { COLUMNS } from './constatns'
import styles from './winnersTable.module.css'

export const WinnersTableDataCell = ({
  column,
  winner,
}: {
  column: keyof typeof COLUMNS
  winner: IWinnerData
}) => {
  return (
    <td className={styles.bodyItem}>
      {column === 'color' ? (
        <Car color={winner[column]} className={styles.icon} />
      ) : (
        winner[column]
      )}
    </td>
  )
}
