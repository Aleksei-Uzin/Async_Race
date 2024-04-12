import { useContext } from 'react'
import { ICar, getCars, updateCar } from '../../../api'
import { Modal, PaginationContext } from '../../../components'
import { GarageCarModalProps } from './types'

export const GarageCarModal = ({
  carId,
  header,
  isOpen,
  payload,
  closeModal,
}: GarageCarModalProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { currentPage } = pagination

  const handleSubmit = async (params: Omit<ICar, 'id'>) => {
    updateCar({ id: carId, ...params })
      .then(() => getCars({ page: currentPage }))
      .then(response => setPagination(response))
  }

  return (
    <Modal isOpen={isOpen}>
      <Modal.Header onClose={closeModal}>{header}</Modal.Header>
      <Modal.Form
        actionType="Update"
        onClose={closeModal}
        payload={payload}
        onSubmit={handleSubmit}
      />
    </Modal>
  )
}
