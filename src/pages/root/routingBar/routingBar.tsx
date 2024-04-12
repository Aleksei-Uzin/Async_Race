import className from 'classNames'
import { Link } from 'react-router-dom'
import { List } from '../../../components'
import styles from './routingBar.module.css'

export const RoutingBar = () => {
  const classesGarage = className(styles.link, styles.garage)
  const classesWinners = className(styles.link, styles.winners)

  return (
    <nav>
      <List>
        <li>
          <Link className={classesGarage} to="garage">
            Garage
          </Link>
        </li>
        <li>
          <Link className={classesWinners} to="winners">
            Winners
          </Link>
        </li>
      </List>
    </nav>
  )
}
