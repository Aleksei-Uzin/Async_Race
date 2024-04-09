import classNames from 'classNames'
import { ModalProps } from './types'
import styles from './modal.module.css'
import { ModalHeader } from './modalHeader'
import { ModalForm } from './modalForm'

export const Modal = ({ children, isOpen, className }: ModalProps) => {
  const classes = classNames(
    {
      [styles['displayBlock']]: isOpen,
      [styles['displayNone']]: !isOpen,
    },
    styles.modal,
    className
  )

  return (
    <div className={classes}>
      <section className={styles.modalContent}>{children}</section>
    </div>
  )
}

Modal.Header = ModalHeader
Modal.Form = ModalForm
