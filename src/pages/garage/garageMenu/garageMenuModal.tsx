import { useContext } from 'react'
import { ICar, createCar, getCars } from '../../../api'
import { Modal, PaginationContext } from '../../../components'
import { GarageMenuModalProps } from './types'

export const GarageMenuModal = ({
  isOpen,
  closeModal,
}: GarageMenuModalProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { currentPage } = pagination

  const handleSubmit = async (params: Omit<ICar, 'id'>) => {
    createCar(params)
      .then(() => getCars({ page: currentPage }))
      .then(response => setPagination(response))
  }

  return (
    <Modal isOpen={isOpen}>
      <Modal.Header onClose={closeModal} />
      <Modal.Form
        actionType="Create"
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Modal>
  )
}
