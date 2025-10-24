import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Login () {
    return (
        <div className=" flex flex-col items-center bg-white">
            <Navbar />

            <h1 className="text-4xl font-bold mt-5">Hello Login!</h1>

            <form action="" className="w-150 flex flex-col rounded-sm p-7 bg-[#E4F7FB] my-6">
                <label className="mt-2 font-bold">Username</label>
                <input type="text" name="" id=""  className="bg-white p-2 mt-2"/>
                <label className="mt-2 font-bold">Password</label>
                <input type="password" name="" id=""  className="bg-white p-2 mt-2"/>
                <p className="text-red-700 mt-5">Invalid Credentials</p>
                <button className="rounded-sm bg-[#29A6D9] text-white font-bold p-2 mt-6">Sumbit</button>
                <p className="text-green-700"> Success! Login successfully. </p>
            </form>

            <Footer />  
        </div>
    )
}