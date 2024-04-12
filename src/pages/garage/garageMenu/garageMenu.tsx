import { useContext } from 'react'
import { List, Modal, PaginationContext } from '../../../components'
import { ICar, PAGE_SIZE, createCar, getTotalPages } from '../../../api'
import styles from './garageMenu.module.css'
import { useModal } from '../../../hooks'

export const GarageMenu = () => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const { modalIsOpen, openModal, closeModal } = useModal()
  const { content, currentPage, totalPages } = pagination

  const handleSubmit = async (params: Omit<ICar, 'id'>) => {
    const response = await createCar(params)
    const newTotalElements = pagination.totalElements + 1

    if (currentPage === totalPages && content.length < PAGE_SIZE.SEVEN) {
      setPagination({
        ...pagination,
        content: [...content, response],
        totalElements: newTotalElements,
        currentPage: getTotalPages(newTotalElements, PAGE_SIZE.SEVEN),
      })
    } else {
      setPagination({
        ...pagination,
        totalElements: newTotalElements,
        currentPage: getTotalPages(newTotalElements, PAGE_SIZE.SEVEN),
      })
    }
  }

  return (
    <>
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
          <List.Button color="purple" size="small">
            Generate cars
          </List.Button>
        </List>
      </nav>
      <Modal isOpen={modalIsOpen}>
        <Modal.Header onClose={closeModal} />
        <Modal.Form
          actionType="Create"
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  )
}
