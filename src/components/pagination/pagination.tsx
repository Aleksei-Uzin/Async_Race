import { PaginationProps } from './types'
import { PaginationMenu } from './paginationMenu'
import { PaginationContent } from './paginationContent'
import styles from './pagination.module.css'

export const Pagination = ({
  currentPage,
  totalElements,
  totalPages,
  onClick,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <PaginationContent>{totalElements}</PaginationContent>
      <PaginationMenu
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={onClick}
      />
    </div>
  )
}
