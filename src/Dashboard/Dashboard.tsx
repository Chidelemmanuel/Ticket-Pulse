import Navbar from "../pages/navbar/Navbar"; 

export default function Dashboard () {  
    return (
        <div className="w-full  flex flex-col items-center">
          <Navbar />
            <h1 className="text-3xl font-bold text-[#29A6D9]">Welcome to the Dashboard</h1>
        </div>
    )
}