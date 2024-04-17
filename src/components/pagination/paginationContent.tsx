import classnames from 'classNames'
import styles from './pagination.module.css'

export const PaginationContent = ({ children }: { children: number }) => {
  const classes = classnames(styles.content, styles.indent)

  return <div className={classes}>{children}</div>
}
