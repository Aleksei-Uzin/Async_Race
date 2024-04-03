import { Link } from 'react-router-dom'
import './styles.css'

export const NavigationBar = () => {
  return (
    <nav>
      <ul className="navBar">
        <li>
          <Link className="navBarLink firstLink" to="garage">
            Garage
          </Link>
        </li>
        <li>
          <Link className="navBarLink secondLink" to="winners">
            Winners
          </Link>
        </li>
      </ul>
    </nav>
  )
}
