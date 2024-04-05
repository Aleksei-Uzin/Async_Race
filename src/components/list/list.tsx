import classNames from 'classNames'
import { ListProps } from './types'
import styles from './list.module.css'

export const List = ({ children, className }: ListProps) => {
  const classes = classNames(
    {
      [styles.list]: true,
    },
    className
  )
  return <ul className={classes}>{children}</ul>
}
