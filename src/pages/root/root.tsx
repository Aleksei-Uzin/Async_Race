import { Link, Outlet } from 'react-router-dom'
import { NavigationBar } from './navigationBar'
import './styles.css'
import { useState } from 'react'

export const Root = () => {
  return (
    <>
      <header className="headerContent">
        <NavigationBar />
        <h1>
          <Link to="/">Async Race</Link>
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
