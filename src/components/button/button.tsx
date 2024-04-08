import classNames from 'classNames'
import { ButtonProps } from './types'
import styles from './button.module.css'
import './button.variables.css'

export const Button = ({
  children,
  className,
  color = 'blue',
  disabled = false,
  loading,
  onClick,
  size = 'normal',
}: ButtonProps) => {
  const classes = classNames(
    styles.button,
    styles[color],
    styles[size],
    className
  )
  return (
    <button
      className={classes}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
