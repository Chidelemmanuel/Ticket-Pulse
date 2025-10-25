import Footer from "../pages/footer/Footer";
import Navbar from "../pages/navbar/Navbar"; 
import { Link } from "react-router-dom";

export default function Dashboard () {  
    return (
        <div className="w-full  flex flex-col items-center">
          <Navbar />
            <h1 className="text-3xl font-bold text-[rgb(41,166,217)] my-10">Welcome to the Dashboard</h1>

            <div className="flex flex-col font-bold">
                <section className="w-[950px] bg-white p-10 mb-5 rounded-md">
                    <h1>Total Ticket</h1>
                </section>

                <section className="w-[950px] bg-white p-10 mb-5 rounded-md">
                    <h1>Open Tickets</h1>
                </section>
                
                <section className="w-[950px] bg-white p-10 mb-5 rounded-md">
                    <h1>Resolved Tickets</h1>
                </section>
            </div>

            <span className="flex justify-between items-center gap-15">
                <Link to="/TicketScreen"> 
                    <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2">Ticket Screeen</button>
                </Link>

                <Link to="/Login"> 
                    <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2">Login Out</button>
                </Link>
            </span>

            

            <Footer />  
        </div>
    )
}