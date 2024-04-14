import { ICar } from '../../../api'

export type GarageCarItemProps = ICar

export type GarageCarMenuProps = {
  carId: number
  content: string
  currentElement: HTMLDivElement
  openModal: () => void
  width: number
}

export type GarageCarModalProps = {
  carId: number
  header: string
  isOpen: boolean
  payload: ICar
  closeModal: () => void
}
