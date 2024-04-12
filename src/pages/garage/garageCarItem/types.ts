import { ICar } from '../../../api'

export type GarageCarItemProps = ICar

export type GarageCarMenuProps = {
  carId: number
  content: string
  openModal: () => void
}

export type GarageCarModalProps = {
  carId: number
  header: string
  isOpen: boolean
  payload: ICar
  closeModal: () => void
}
