import { forwardRef } from 'react'
import classnames from 'classNames'
import { IconCar } from '../../icons'
import { CarProps } from './types'
import styles from './car.module.css'

export type Ref = HTMLDivElement

export const Car = forwardRef<Ref, CarProps>(({ color, className }, ref) => {
  const classes = classnames(styles.icon, className)

  return (
    <div ref={ref} className={styles.box}>
      <IconCar className={classes} color={color} />
    </div>
  )
})
