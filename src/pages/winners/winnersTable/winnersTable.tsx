import { WinnersTableBody } from './winnersTableBody'
import { WinnersTableHead } from './winnersTableHead'
import { WinnersTableProps } from './types'
import styles from './winnersTable.module.css'

export const WinnersTable = ({ children, title }: WinnersTableProps) => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>{title}</caption>
      {children}
    </table>
  )
}

WinnersTable.Head = WinnersTableHead
WinnersTable.Body = WinnersTableBody
