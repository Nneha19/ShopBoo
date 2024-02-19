import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [icon, seticon] = useState(true);
  const navigate = useNavigate();

 const handleNav=()=>{
    seticon(!icon)
  }
  return (
    <>
      <div className="p-10 flex justify-between items-center">
        <div
          className="flex gap-1  cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="main_logo.png" alt="Logo" />
          <h2 className="font-extrabold text-xl sm:text-2xl">FASHION</h2>
        </div>
        <div className="flex hidden sm:flex gap-10 sm:gap-5 font-semibold items-center">
          <Link to="/catalogue">CATALOGUE</Link>
          <Link to="/fashion">FASHION</Link>
          <Link to="/favourite">FAVOURITE</Link>
          <Link to="/lifestyle">LIFESTYLE</Link>
          <Link to="/signup" className="bg-black text-white p-2 rounded">
          
            <button>SIGN UP</button>
          </Link>
        </div>
        <div
          className="flex sm:hidden flex gap-10 sm:gap-5 font-semibold items-center"
          onClick={handleNav}
        >
          {icon ? <img src="navicon.png" alt="" /> : 
          <div className="relative">
            <img src="closed.png"/>
            <div className="flex flex-col absolute right-0 top-[45px] bg-primaryyellow  mr-[-10px] p-6  pr-8  pl-8  rounded gap-5 sm:gap-5 font-semibold items-center">
          <Link to="/catalogue">CATALOGUE</Link>
          <Link to="/fashion">FASHION</Link>
          <Link to="/favourite">FAVOURITE</Link>
          <Link to="/lifestyle">LIFESTYLE</Link>
          <Link to="/signup" className="bg-black text-white p-2 rounded">
          
            <button>SIGN UP</button>
          </Link>
        </div>
        </div>
        }
        </div>
      </div>
      <Outlet />
      <div className="bg-black pl-20 pr-20 p-20 h-100 sm:flex justify-between">
        <div className="sm:mt-20">
           <h3 className="text-white font-extrabold text-xl">FASHION</h3>
           <p className="text-[#8E8E8E] mt-5">Complete your style with awesome <br/> clothes from us.</p>
           <div className="flex gap-3 mt-4">
            <img src="facebook.png" alt="" className="h-10" />
            <img src="instagram.png" alt="" className="h-10" />
            <img src="twitter.png" alt="" className="h-10" />
            <img src="linkedin.png" alt="" className="h-10" />
           </div>
        </div>
        <div className="sm:mt-10  sm:flex gap-10">
            <div className="mt-10 flex flex-col sm:gap-5 text-primarygray">
                <p>Company</p>
                <a className="text-[#8E8E8E]" href="">About</a>
                <a className="text-[#8E8E8E]" href="">Contact us</a>
                <a className="text-[#8E8E8E]" href="">Support</a>
                <a className="text-[#8E8E8E]" href="">Career</a>
            </div>
            <div className="mt-10 flex flex-col sm:gap-5 text-primarygray">
                <p>Quick Link</p>
                <a className="text-[#8E8E8E]" href="">Share Location</a>
                <a className="text-[#8E8E8E]" href="">Orders Tracking</a>
                <a className="text-[#8E8E8E]" href="">Size Guide</a>
                <a className="text-[#8E8E8E]" href="">FAQs</a>
            </div>
            <div className="mt-10 flex flex-col sm:gap-5 text-primarygray">
                <p>Legal</p>
                <a className="text-[#8E8E8E]" href="">Terms & conditions</a>
                <a className="text-[#8E8E8E]" href="">Privacy Policy</a>
            </div>
        </div>
        </div>
    </>
  );
}
