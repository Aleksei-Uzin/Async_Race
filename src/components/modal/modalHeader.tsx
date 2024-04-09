import classNames from 'classNames'
import { Button } from '../button'
import { IconClose } from '../../icons'
import styles from './modal.module.css'
import { ModalHeaderProps } from './types'

export const ModalHeader = ({
  children,
  className,
  onClose,
}: ModalHeaderProps) => {
  const classes = classNames(styles.modalHeader, className)

  return (
    <div className={classes}>
      <span className={styles.header}>{children}</span>
      <Button className={styles.buttonClose} size="small" onClick={onClose}>
        <IconClose />
      </Button>
    </div>
  )
}
