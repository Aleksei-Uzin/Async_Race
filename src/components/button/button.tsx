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
    {
      [styles.button]: true,
      [styles[color]]: true,
      [styles[size]]: true,
    },
    className
  )
  return (
    <button className={classes} disabled={disabled} type="button">
      {children}
    </button>
  )
}
