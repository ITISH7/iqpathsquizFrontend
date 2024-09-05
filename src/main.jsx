import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Quiz from './pages/Quiz.tsx'
import Result from './pages/Result.jsx'
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizProvider';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

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
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode >
      <AuthProvider>
        <QuizProvider>
          <RouterProvider router={router} />
        </QuizProvider>
      </AuthProvider>
  </StrictMode>,
)
