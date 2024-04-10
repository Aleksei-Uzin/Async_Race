import { ICar } from '../../api'

export type ModalProps = {
  children: JSX.Element[]
  className?: string
  isOpen: boolean
}

export type ModalHeaderProps = {
  children?: string
  className?: string
  onClose: () => void
}

export type ModalFormType = {
  actionType: string
  onClose: () => void
  onSubmit: (params: Omit<ICar, 'id'>) => Promise<void>
  payload?: ICar
}
