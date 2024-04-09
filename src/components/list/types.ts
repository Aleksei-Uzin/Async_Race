import { ButtonProps } from '../button'

export type ListProps = {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export type ListItemProps = {
  children: ListProps['children'] | string | number
  className?: string
}

export type ListButtonProps = ButtonProps
