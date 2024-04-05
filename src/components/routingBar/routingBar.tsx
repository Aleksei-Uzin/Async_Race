import { Link } from 'react-router-dom'
import { List } from '../list'
import './styles.css'

export const RoutingBar = () => {
  return (
    <nav>
      <List>
        <li>
          <Link className="link firstLink" to="garage">
            Garage
          </Link>
        </li>
        <li>
          <Link className="link secondLink" to="winners">
            Winners
          </Link>
        </li>
      </List>
    </nav>
  )
}
