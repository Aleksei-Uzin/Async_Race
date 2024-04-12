import { Car } from '../../../components'
import { GarageCarItemProps } from './types'
import { useModal } from '../../../hooks'
import { GarageCarModal } from './garageCarModal'
import { GarageCarMenu } from './garageCarMenu'
import styles from './garageCarItem.module.css'

export const GarageCarItem = (props: GarageCarItemProps) => {
  const { modalIsOpen, openModal, closeModal } = useModal()
  const { color, name, id } = props

  return (
    <>
      <div className={styles.carBox}>
        <Car color={color} />
      </div>
      <GarageCarMenu carId={id} content={name} openModal={openModal} />
      <GarageCarModal
        carId={id}
        header={name}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        payload={props}
      />
    </>
  )
}
