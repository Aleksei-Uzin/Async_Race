import classNames from 'classNames'
import { IconCar } from '../../icons'
import { CarProps } from './types'
import styles from './car.module.css'

export const Car = ({ color, className }: CarProps) => {
  const classes = classNames(styles.icon, className)

  return <IconCar className={classes} color={color} />
}
