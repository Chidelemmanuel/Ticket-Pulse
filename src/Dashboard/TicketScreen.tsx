import Footer from "../pages/footer/Footer"
import Navbar from "../pages/navbar/Navbar"

export default function TicketSCreen () {
    return (
        <div className="flex flex-col items-center bg-white">
            <Navbar />

            <h1 className="text-4xl font-bold text-[#29A6D9] text-center">Ticket Management</h1>


            <form action="" className="flex flex-col w-[600px] bg-[#E4F7FB] px-15 py-10">
                <h3 className="text-center font-bold mb-5">Create New Ticket</h3>
                <label>Title</label>
                <input type="text" className="bg-white p-2 mt-2"/>
                <label>Description</label>
                <textarea name="" id="" className="bg-white p-2 mt-2"></textarea>
                <label>Status</label>
                <select name="" id="" className="bg-white p-2 mt-2">
                    <option value="open">Open</option>
                    <option value="Open-Tickets">Open Tickets</option>
                    <option value="Closed">Closed</option>  
                </select>
                <label>Priority</label>
                <select name="" id="" className="bg-white p-2 mt-2">
                    <option value="open">Low</option>
                    <option value="Open-Tickets">Medium</option>
                    <option value="Closed">High</option>  
                </select>
                <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2">Create Ticket</button>
                <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2">Cancel</button>
            </form>

            <section id="modal" className="w-[200px] bg-white p-5">
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to delete this ticket? This action cannot be undone.</p>
                <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2"> Delete </button>
                <button className="hover:bg-[#29A6D9] hover:border-2 border-2 hover:text-white my-5 rounded-md p-2"> Cancel </button>
            </section>
            
            <Footer />  
            
        </div>
    )
}