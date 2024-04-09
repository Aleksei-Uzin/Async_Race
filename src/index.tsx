import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Garage, Root } from './pages'
import { getCars } from './api'
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
        element: <h2>WINNERS</h2>,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
