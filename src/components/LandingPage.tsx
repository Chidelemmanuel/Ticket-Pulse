import  Navbar from "../pages/navbar/Navbar"
import Main from "../pages/main/Main"
import Footer from "../pages/footer/Footer"
import "./LandingPage.css"

// import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <Navbar />
        <Main />
        <Footer />  
    </div>
  )
}

export default LandingPage