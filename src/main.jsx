import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Dashboard.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Quiz from './pages/Quiz.jsx'
import Result from './pages/Result.jsx'
import ResultNext from './pages/ResultNext.jsx'
import { AuthProvider } from './context/AuthContext';
import QuizProvider from './context/QuizProvider';
// import  QuizProvider  from './context/QuizProvider';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import PrivacyPolicy from './pages/privacyPolicy.jsx'
import TermsAndConditions from './pages/termsAndCondition.jsx'
import CancellationAndRefund from './pages/cancellationAndRefund.jsx'

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
        path: '/result-next',
        element: <ResultNext />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/PrivacyPolicy',
        element: <PrivacyPolicy />
      },
      {
        path: '/termsandcondition',
        element: <TermsAndConditions />
      },
      {
        path: '/cancellationAndRefund',
        element: <CancellationAndRefund />
      }
    ],
  }
])


createRoot(document.getElementById('root')).render(
  // <StrictMode >
      <AuthProvider>
        <QuizProvider>
          <RouterProvider router={router} />
        </QuizProvider>
      </AuthProvider>
  // </StrictMode>,
)
