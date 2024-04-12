import { useContext } from 'react'
import {
  ICar,
  PAGE_SIZE,
  deleteCar,
  getTotalPages,
  updateCar,
} from '../../../api'
import { Car, List, Modal, PaginationContext } from '../../../components'
import { IconGear } from '../../../icons'
import styles from './garageCarItem.module.css'
import { GarageCarItemProps } from './types'
import { useModal } from '../../../hooks'

export const GarageCarItem = (props: GarageCarItemProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { modalIsOpen, openModal, closeModal } = useModal()
  const { color, name, id: carId } = props
  const newTotalElements = pagination.totalElements - 1

  const removeCar = () => {
    deleteCar(carId)
    setPagination({
      ...pagination,
      content: pagination.content.filter(({ id }) => id !== carId),
      totalElements: newTotalElements,
      totalPages: getTotalPages(newTotalElements, PAGE_SIZE.SEVEN),
    })
  }

  const handleSubmit = async (params: Omit<ICar, 'id'>) => {
    const response = await updateCar({ id: carId, ...params })
    setPagination({
      ...pagination,
      content: pagination.content.map(car => {
        return car.id === carId ? response : car
      }),
    })
  }

  return (
    <>
      <div className={styles.carBox}>
        <Car color={color} />
      </div>
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
        <div className={styles.carName}>{name}</div>
      </div>
      <Modal isOpen={modalIsOpen}>
        <Modal.Header onClose={closeModal}>{name}</Modal.Header>
        <Modal.Form
          actionType="Update"
          onClose={closeModal}
          payload={props}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  )
}
