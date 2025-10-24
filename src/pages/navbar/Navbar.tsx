import { Link } from "react-router-dom";

export default function Navbar () {
  return (
    <>
        <nav className="w-full h-16 bg-[#E4F7FB] text-sm font-bold flex items-center justify-between px-20" >
          <Link to="/">
            <h1 className="text-[#29A6D9] font-extrabold">TicketPulse App</h1>
          </Link> 

          <span className="space-x-10" >

            <Link to="/Dashboard">
              <button className="hover:bg-[#29A6D9] hover:text-white px-3 py-2 rounded-md">Dashboard</button>
            </Link>

            <Link to="/Login">
              <button className="hover:bg-[#29A6D9] hover:text-white px-3 py-2 rounded-md">Login</button>
            </Link>

            <Link to="/SignUp">
              <button className='bg-[#29A6D9] px-5 py-2 rounded-md text-white'>Get Started</button>
            </Link>
          </span>
        </nav>
    </>
  )
}
