import { useContext } from 'react'
import { List, Pagination, PaginationContext } from '../../../components'
import { GarageCarItem } from '../garageCarItem'
import { ICar, getCars } from '../../../api'
import styles from './garageContent.module.css'

export const GarageContent = () => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { content } = pagination

  const handlePagination = async (newPage: number) => {
    const response = await getCars({ page: newPage })
    setPagination(response)
  }

  return (
    <div className={styles.content}>
      <List key={pagination.totalElements} className={styles.carsList}>
        {content.map(({ id, ...rest }) => (
          <List.Item key={id} className={styles.carRow}>
            <GarageCarItem id={id} {...(rest as ICar)} />
          </List.Item>
        ))}
      </List>
      <Pagination onClick={handlePagination} {...pagination} />
    </div>
  )
}
