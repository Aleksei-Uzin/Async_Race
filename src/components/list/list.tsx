import classnames from 'classNames'
import { Button } from '../button'
import { ListButtonProps, ListItemProps, ListProps } from './types'
import styles from './list.module.css'

export const List = ({ children, className }: ListProps) => {
  const classes = classnames(styles.list, className)

  return <ul className={classes}>{children}</ul>
}

const ListItem = ({ children, className }: ListItemProps) => {
  const classes = classnames(styles.listItem, className)

  return <li className={classes}>{children}</li>
}

const ListButton = ({ children, ...rest }: ListButtonProps) => (
  <ListItem>
    <Button {...rest}>{children}</Button>
  </ListItem>
)

List.Button = ListButton
List.Item = ListItem
