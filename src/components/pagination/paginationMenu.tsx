import { START_PAGE } from '../../api'
import { IconArrowLeft, IconArrowRight } from '../../icons'
import { List } from '../list'
import styles from './pagination.module.css'
import { PaginationMenuProps } from './types'

export const PaginationMenu = ({
  currentPage,
  onClick,
  totalPages,
}: PaginationMenuProps) => {
  const isNextButtonDisabled = currentPage === totalPages
  const isPrevButtonDisabled = currentPage === START_PAGE

  const handleNextPage = () => {
    onClick(currentPage + 1)
  }

  const handlePrevPage = () => {
    onClick(currentPage - 1)
  }

  return (
    <nav>
      <List>
        <List.Button
          disabled={isPrevButtonDisabled}
          size="tiny"
          onClick={handlePrevPage}
        >
          <IconArrowLeft />
        </List.Button>
        <List.Item className={styles.content}>{currentPage}</List.Item>
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
