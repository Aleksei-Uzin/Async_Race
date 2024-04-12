import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Garage, Root, Winners } from './pages'
import { getCars, getWinners } from './api'
import './variables.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // TODO: add ErrorPage
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'garage',
        element: <Garage />,
        loader: getCars,
      },
      {
        path: 'winners',
        element: <Winners />,
        loader: getWinners,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
