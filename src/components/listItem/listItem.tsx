import { Button } from '../button'
import { ListItemProps } from './types'

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li>
      <Button {...rest}>{children}</Button>
    </li>
  )
}
