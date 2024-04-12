import { useContext, useEffect, useState } from 'react'
import { List, Pagination, PaginationContext } from '../../../components'
import { GarageCarItem } from '../garageCarItem'
import { ICar, getCars } from '../../../api'
import styles from './garageContent.module.css'

export const GarageContent = () => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const [cars, setCars] = useState(pagination.content)

  const handleCurrentPage = async (newPage: number) => {
    const response = await getCars({ page: newPage })
    setPagination(response)
    setCars(response.content)
  }

  useEffect(() => {
    setCars(pagination.content)
  }, [pagination.content])

  return (
    <div className={styles.content}>
      <List key={pagination.totalElements} className={styles.carsList}>
        {cars.map(({ id, ...rest }) => (
          <List.Item key={id} className={styles.carRow}>
            <GarageCarItem id={id} {...(rest as ICar)} />
          </List.Item>
        ))}
      </List>
      <Pagination onClick={handleCurrentPage} {...pagination} />
    </div>
  )
}
