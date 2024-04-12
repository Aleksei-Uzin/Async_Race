import { COLUMNS } from './constatns'
import styles from './winnersTable.module.css'

export const WinnersTableHead = () => {
  const columnsContent = Object.values(COLUMNS)

  return (
    <thead className={styles.tableHead}>
      <tr>
        {columnsContent.map(value => (
          <th key={value} className={styles.headItem}>
            {value}
          </th>
        ))}
      </tr>
    </thead>
  )
}
