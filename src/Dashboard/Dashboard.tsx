import Navbar from "../pages/navbar/Navbar"; 
import { Link } from "react-router-dom";

export default function Dashboard () {  
    return (
        <div className="w-full  flex flex-col items-center">
          <Navbar />
            <h1 className="text-3xl font-bold text-[#29A6D9]">Welcome to the Dashboard</h1>

            <Link to="/TicketScreen"> 
                <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white">Ticket Screeen</button>
            </Link>
        </div>
    )
}