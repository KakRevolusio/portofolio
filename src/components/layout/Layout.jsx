import Navbar from './Navbar'
import Footer from './Footer'
import DarkModeToggle from './DarkModeToggle'; 

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
       <div className="d-flex align-items-center">
            <DarkModeToggle />
          </div>
      <Footer />
    </div>
  )
}

export default Layout