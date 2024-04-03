import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './pages'
import './variables.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'garage',
        element: <h2>GARAGE</h2>,
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
