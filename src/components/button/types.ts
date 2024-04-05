export type ButtonProps = {
  children: string
  className?: string
  color?: 'blue' | 'purple'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  size?: 'normal' | 'small' | 'tiny'
}
