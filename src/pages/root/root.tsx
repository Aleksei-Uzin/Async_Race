import { Link, Outlet } from 'react-router-dom'
import { RoutingBar } from './routingBar'
import styles from './root.module.css'

export const Root = () => {
  return (
    <>
      <header className={styles.header}>
        <RoutingBar />
        <h1 className={styles.title}>
          <Link to="/" className={styles.link}>
            Async Race
          </Link>
        </h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
