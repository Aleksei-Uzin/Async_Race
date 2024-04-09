export type ButtonProps = {
  children: JSX.Element | string
  className?: string
  color?: 'blue' | 'purple'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  size?: 'normal' | 'small' | 'tiny'
  type?: 'button' | 'submit'
}
