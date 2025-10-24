import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

export default function SignUp() {
    return (
        <div className=" flex flex-col items-center bg-white">
            <Navbar />
        
            <h1 className="text-4xl font-bold mt-5">Create Account!</h1>
        
            <form action="" className="w-150 flex flex-col rounded-sm p-7 bg-[#E4F7FB] my-6">
                <label className="mt-2 font-bold">FullName</label>
                <input type="text" name="" id=""  className="bg-white p-2 mt-2"/>
                <label className="mt-2 font-bold">E-mail</label>
                <input type="email" name="" id=""  className="bg-white p-2 mt-2"/>
                <p className="text-red-700">Enter a valid email (name@example.com).</p>
                <label className="mt-2 font-bold">Username</label>
                <input type="text" name="" id=""  className="bg-white p-2 mt-2"/>
                <label className="mt-2 font-bold">Password</label>
                <input type="password" name="" id=""  className="bg-white p-2 mt-2"/>
                <button className="rounded-sm bg-[#29A6D9] text-white font-bold p-2 mt-6">Sumbit</button>
                <p className="text-green-700 mt-6"> Account Created successfully!. </p>
            </form>

            <Footer />
        </div>
    )
}