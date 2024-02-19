export default function Hero() {
  return (
    <>
      <div className="sm:p-10 p-5">
        <img src="herobanner.png" alt="" />
      </div>

      <div
        className="bg-primaryyellow flex sm:h-40 h-50  items-center   md:flex-row flex-col
        md:gap-10 gap-5 justify-center mt-10 mb-10 p-5"
      >
        <img className="sm:h-[34px] h-[30px] " src="h&m.png" alt="" />
        <img className="sm:h-[34px] h-[30px]" src="obey.png" alt="" />
        <img className="sm:h-[34px] h-[30px]" src="shopify.png" alt="" />
        <img className="sm:h-[34px] h-[30px]" src="lacoste.png" alt="" />
        <img className="sm:h-[34px] h-[30px]" src="levi.png" alt="" />
        <img className="sm:h-[34px] h-[30px]" src="amazon.png" alt="" />
      </div>

      <div className="sm:p-10">
        <h2 className="pl-5 pb-4 sm:text-4xl text-2xl font-extrabold relative">
          NEW ARRIVALS
        </h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center  items-center p-5 ">
          <div>
            <img src="hoodies.png" className="h-[20rem]" alt="" />
            <div className="flex items-center justify-between">
              <div className="pt-2">
                <h2 className="text-xl font-bold">Hoodies </h2>
                <h2 className="text-[#7F7F7F]">Explore Now!</h2>
              </div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div>
            <img src="coats.png" className="h-[20rem]" alt="" />
            <div className="flex  items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Coats & Parkas</h2>
                <h2 className="text-[#7F7F7F]">Explore Now!</h2>
              </div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div>
            <img src="tees.png" className="h-[20rem]" alt="" />
            <div className="flex  items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Tees & T-Shirt</h2>
                <h2 className="text-[#7F7F7F]">Explore Now!</h2>
              </div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <img src="Banner.png" alt="" />
      </div>

      <div className="sm:p-10">
        <h2 className="pl-5 pb-4 sm:text-4xl text-2xl font-extrabold relative">
          Young’s Favourite
        </h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center  items-center p-5 ">
          <div>
            <img
              src="youngfav1.png"
              className="  h-[15rem] sm:h-[20rem]"
              alt=""
            />
            <div className="flex items-center justify-between">
              <div className="pt-2">
                <h2 className="text-xl font-bold">Trending on instagram</h2>
                <h2 className="text-[#7F7F7F]">Explore Now!</h2>
              </div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div>
            <img
              src="youngfav2.png"
              className=" h-[15rem] sm:h-[20rem] "
              alt=""
            />
            <div className="flex  items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">All Under $40</h2>
                <h2 className="text-[#7F7F7F]">Explore Now!</h2>
              </div>
              <img src="arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-[6.5rem] items-center justify-center mt-5 sm:mt-10 sm:p-20 p-5">
        <div >
          <h1 className="sm:text-4xl text-2xl font-extrabold">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </h1>
          <p className="text-[#7C7C7C] mt-8 mb-8">
            Get 30% off for first transaction using <br/> Rondovision mobile app for
            now.
          </p>
          <div className="sm:flex gap-5">
            <img src="playstore.png"  className="h-[50px] mt-4" alt="" />
            <img src="applestore.png" className="h-[50px] mt-4"  alt="" />
          </div>
        </div>
        <div>
          <img src="mobile.png" alt="" />
        </div>
      </div>


      <div className="bg-[#E5C643] sm:p-40 p-10 mt-10 text-white text-center">
        <h1 className="sm:text-4xl text-xl  font-extrabold">JOIN SHOPPING COMMUNITY TO  <br/>GET MONTHLY PROMO</h1>
        <p className="m-5 text-xl">Type your email down below and be young wild generation</p>
        <div className="flex justify-center ">
              <input className=" rounded sm:p-4 p-2" type="email" placeholder="Add your email here" />
        <button className="bg-black rounded sm:p-4 p-2">SEND</button>
        </div>
      
      </div>
    </>
  );
}
