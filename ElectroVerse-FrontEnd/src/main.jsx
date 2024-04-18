import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from './contexts/ProductContext.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "details/:productId", element: <ProductDetailsPage /> },
      { path: 'checkout', element: <CheckoutPage />},
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'profile', element: <ProfilePage /> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>,
)