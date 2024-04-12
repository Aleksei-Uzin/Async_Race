import { GarageMenuNavigation } from './garageMenuNavigation'
import { GarageMenuModal } from './garageMenuModal'
import { useModal } from '../../../hooks'

export const GarageMenu = () => {
  const { modalIsOpen, openModal, closeModal } = useModal()

  return (
    <>
      <GarageMenuNavigation openModal={openModal} />
      <GarageMenuModal isOpen={modalIsOpen} closeModal={closeModal} />
    </>
  )
}
