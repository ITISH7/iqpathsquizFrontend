import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Quiz from './pages/Quiz.tsx'
import { AuthProvider } from './context/AuthContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/leaderboard',
        element: <Leaderboard />,
      },
      {
<<<<<<< HEAD
        path: '/quiz',
        element: <Quiz />,
      },
=======
        path: '/result',
        element: <Result />,
      }
>>>>>>> e65a6bb7f564c7fec90092f83d5e6ad29443c8db
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
