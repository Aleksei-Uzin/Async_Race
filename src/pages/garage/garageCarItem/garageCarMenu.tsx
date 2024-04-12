import { useContext } from 'react'
import { deleteCar, getCars } from '../../../api'
import { List, PaginationContext } from '../../../components'
import { IconGear } from '../../../icons'
import styles from './garageCarItem.module.css'
import { GarageCarMenuProps } from './types'

export const GarageCarMenu = ({
  carId,
  content,
  openModal,
}: GarageCarMenuProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { currentPage } = pagination

  const removeCar = () => {
    deleteCar(carId)
      .then(() => getCars({ page: currentPage }))
      .then(response => setPagination(response))
  }

  return (
    <div className={styles.carMenu}>
      <List>
        <List.Button size="tiny">Start</List.Button>
        <List.Button color="purple" size="tiny">
          Reset
        </List.Button>
        <List.Button color="alert" size="tiny" onClick={removeCar}>
          Remove
        </List.Button>
        <List.Button
          className={styles.carConfig}
          size="tiny"
          onClick={openModal}
        >
          <IconGear />
        </List.Button>
      </List>
      <div className={styles.carName}>{content}</div>
    </div>
  )
}
