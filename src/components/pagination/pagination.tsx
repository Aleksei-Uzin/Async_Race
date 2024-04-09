import { List } from '../list'
import { IconArrowLeft, IconArrowRight } from '../../icons'
import styles from './pagination.module.css'
import { ICar, START_PAGE } from '../../api'
import { PaginationProps } from './types'

export const Pagination = ({
  currentPage,
  totalPages,
  onClick,
}: PaginationProps<ICar>) => {
  const isNextButtonDisabled = currentPage === totalPages
  const isPrevButtonDisabled = currentPage === START_PAGE

  const handleNextPage = () => {
    onClick(currentPage + 1)
  }

  const handlePrevPage = () => {
    onClick(currentPage - 1)
  }

  return (
    <nav className={styles.pagination}>
      <List>
        <List.Button
          disabled={isPrevButtonDisabled}
          size="tiny"
          onClick={handlePrevPage}
        >
          <IconArrowLeft />
        </List.Button>
        <List.Item className={styles.pageNumber}>{currentPage}</List.Item>
        <List.Button
          color="purple"
          disabled={isNextButtonDisabled}
          size="tiny"
          onClick={handleNextPage}
        >
          <IconArrowRight />
        </List.Button>
      </List>
    </nav>
  )
}
