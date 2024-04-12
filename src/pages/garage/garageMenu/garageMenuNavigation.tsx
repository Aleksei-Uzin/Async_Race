import { useContext } from 'react'
import { List, PaginationContext } from '../../../components'
import { getHundredRandomCars } from '../../../utils'
import { createCar, getCars } from '../../../api'
import { GarageMenuNavigationProps } from './types'
import styles from './garageMenu.module.css'
import { NUMBER_OF_CARS } from './constants'

export const GarageMenuNavigation = ({
  openModal,
}: GarageMenuNavigationProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { currentPage } = pagination

  const handleClick = () => {
    const newCars = getHundredRandomCars(NUMBER_OF_CARS)

    Promise.all(newCars.map(createCar))
      .then(() => getCars({ page: currentPage }))
      .then(response => setPagination(response))
  }

  return (
    <nav className={styles.menu}>
      <List>
        <List.Button size="small">Race</List.Button>
        <List.Button color="purple" size="small">
          Reset
        </List.Button>
      </List>
      <List>
        <List.Button size="small" onClick={openModal}>
          Create a car
        </List.Button>
        <List.Button color="purple" size="small" onClick={handleClick}>
          Generate cars
        </List.Button>
      </List>
    </nav>
  )
}
