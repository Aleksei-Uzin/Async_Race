import { WinnersTableBody } from './winnersTableBody'
import { WinnersTableHead } from './winnersTableHead'
import { WinnersTableProps } from './types'
import styles from './winnersTable.module.css'

export const WinnersTable = ({ children }: WinnersTableProps) => {
  return <table className={styles.table}>{children}</table>
}

WinnersTable.Head = WinnersTableHead
WinnersTable.Body = WinnersTableBody
