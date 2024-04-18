import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import Providers from "../components/Providers"
import { Footer } from "../components/Footer"
import './RootLayout.css'

function RootLayout() {
  return (
    <Providers>
      <div className="Body">
        <Navbar />
        <div className="e-commerce">
          <Outlet />
        </div>
      </div>
      <Footer />
    </Providers>
  )
}
export default RootLayout