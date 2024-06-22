import React from "react";
import Slider from "react-slick";
import a1 from "../assets/images/a1.jpg";
import a2 from "../assets/images/a2.webp";
import b3 from "../assets/images/b3.jpg";
import b2 from "../assets/images/b2.jpg";
import school1 from "../assets/images/school1.jpg";
import b41 from "../assets/images/b41.jpg";
import sushil from "../assets/images/sushil.jpg";
import eg from "../assets/images/eg.jpg";
import vorcos from "../assets/images/vorcos.png";
import media from "../assets/images/media.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";



export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    fade: true

  };
  return (
    <section>
      <div className="max-sm:text-lg slider-container relative mt-4 ">
        <Slider {...settings}>
          <div><div style={{ backgroundImage: `url(${a2})` }} className="min-h-screen w-full bg-cover bg-center">   </div></div>
          <div><div style={{ backgroundImage: `url(${b3})` }} className="min-h-screen w-full bg-cover bg-center">   </div></div>
          <div><div style={{ backgroundImage: `url(${a1})` }} className="min-h-screen w-full bg-cover bg-center">   </div></div>
        </Slider>
        <div className="absolute bottom-1 right-0 left-16 bg-black  w-80% mb-1.5 py-6 pl-4 pr-4 lg:ml-48  lg:pl-48 lg:left-96    ">
          <p className="text-white max-sm:text-2xl text-6xl">We Build <b className="text-orange-500">Structure</b> And <b className="text-orange-500">Relationship</b> To Last..</p>
        </div>
      </div>




      <div className="  flex-wrap w-auto justify-center flex px-6 py-6 mt-4 mb-4 lg:px-28 lg:py-8">
        <div className="w-auto lg:w-1/2   ">
          <h1 className="max-sm:text-lg text-4xl"><b className="font-bold font-serif font-barlow">About Us</b></h1>
          <hr className="max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />
          <p className="max-sm:text-xs text-base mt-4 w-80 lg:w-3/4  ">
            <b className="font-bold font-serif font-barlow">Aaliya Construction</b> is a proprietary firm owned and run by <b className="font-bold font-serif font-barlow">Mr. Shailesh Sudhanshu Topno</b>, engaged in Real-Estate Development since 2013. Since its inception the firm has earned a respect and credence among the customers  / clients and the financial institutions as well.</p>

          <p className="max-sm:text-xs text-base mt-4 w-80 lg:w-3/4 ">Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.</p>

          <p className="max-sm:text-xs text-base mt-4 w-80 lg:w-3/4"> Aaliya Construction is always ready to take up any challenging task and deliver the best possible results. We always try to work as a team to achieve the desired results.</p>
          <hr className="  mt-10 -border-t-96 " />
          <div cl>
            <a href="http://localhost:3000/about" className="mt-2 bg-orange-600 text-white inline-flex px-2 py-1 lg:px-10 lg:py-4 lg:mt-6">
              <b className="font-barlow">More</b><span class="material-symbols-outlined ">arrow_forward</span> </a>
          </div>
        </div>

        <div className="w-80   px-20 mt-24 pl-8 pr-0 lg:w-1/2 lg:px-16">
          <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-12 lg:w-96">
            <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={a1} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="justify-center flex-wrap w-auto flex px-6 py-6   mt-4 mb-4 lg:mt-16">
          <div className="  w-auto  mt-20 ml-8 mr-0 lg:w-1/2 lg:mt-12 lg:ml-0 lg:px-16 ">
            <div className=" w-auto mx-auto h-96 border-4 border-gray-400 lg:w-3/5">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={a2} alt="" />
            </div>
          </div>


          <div className="  max-sm:w-full w-auto  mt-4 lg:w-1/2 lg:px-12 lg:mt-4">
            <h1 className="max-sm:text-lg text-4xl   "><b className="font-bold font-serif font-barlow">How We Work</b></h1>
            <hr className="max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />


            <div className="grid grid-cols-2 gap-4 mt-8 ">
              <div className=" ">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Care</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2">We respect each other and we do things safely and sustainably for better tomorrow.</p>
              </div>
              <div className="">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Improve</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2">We listen, learn and adapt our ideas and experience into better solutions and service for our customers.</p>
              </div>
              <div className=" ">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Achieve Together</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2">We value the contribution of each individual and we work together to build strong, open and trusting partnerships.</p>
              </div>
              <div className="">
                <h1 className=" max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Deliver</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2">We set ourselves stretching goals, taking pride in doing a great job and helping our customers and partners to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="mt-4" >
        <div className="w-auto max-sm:text-lg text-4xl py-4 px-4 lg:px-28 lg:py-8 "><b className="font-bold font-serif font-barlow">Our Projects</b>
          <hr className="max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />
          <div  >
            <a href="http://localhost:3000/projects" className=" float-right  mt-4 mb-4 bg-orange-600 text-white inline-flex py-1 px-1 lg:my-2 lg:py-3 lg:px-4 " >
              <b className="font-barlow">View All Projects</b> <span class="material-symbols-outlined">arrow_forward</span></a>

          </div>

          <div className="flex w-auto flex-wrap mt-20 ">
            <div className=" w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-1/2 lg:px-12 lg:my-12">
              <img className="  object-cover h-full w-full" src={b2} alt="" />
              <div className="absolute flex items-center inset-0 z-10 transition-all group-hover:bg-gradient-to-b from-black/0 to-slate-900">
                <b className="ml-16 text-white font-barlow">Coming soon</b>
              </div>
            </div>
            <div className=" w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-1/2 lg:px-12 lg:my-12">
              <img className="object-cover  h-full w-full" src={school1} alt="" />
              <div className="absolute flex items-center inset-0 z-10 transition-all group-hover:bg-gradient-to-b from-black/0 to-slate-900">
                <b className="ml-16  text-white font-barlow">Holy Family School</b>
              </div>
            </div>
            <div className=" w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-1/2 lg:px-12 lg:my-12">
              <img className="object-cover  h-full w-full" src={b41} alt="" />
              <div className="absolute flex items-center inset-0 z-10 transition-all group-hover:bg-gradient-to-b from-black/0 to-slate-900">
                <b className="ml-16  text-white font-barlow">Gayatri Residency</b>
              </div>
            </div>
            <div className=" w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-1/2 lg:px-12 lg:my-12">
              <img className="object-cover h-full w-full" src={sushil} alt="" />
              <div className="absolute flex items-center inset-0 z-10 transition-all group-hover:bg-gradient-to-b from-black/0 to-slate-900">
                <b className="ml-16  text-white font-barlow">Sushil Residency</b>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="px-6 py-6 lg:px-28 lg:py-8" >
        <div className="   max-sm:text-lg text-4xl    "><b className="font-bold font-serif font-barlow">Our Associates</b>
          <hr className="  max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />
          <p className="  w-auto text-xs mt-4 lg:w-2/5 lg:text-base">Today with the cooperation and constant support of our partner we  are building legacy that will stand the test of time. We desire to achieve long term win-win benefits. Through our expertise and quality, we are dedicated in creating brighter and affordable living for everyone. </p>
        </div>

        <div className="  grid grid-cols-1 gap-2 py-10 px-10 pt-8 pb-8 lg:grid-cols-3 lg:gap-3">
          <div className=" content-between bg-gray-100 hover:bg-slate-500 px-12 py-12 pt-0 pb-0">
            <img src={eg} alt="" className=" " />
            <h1 className="  max-sm:text-base text-xl"><b className="font-bold font-serif font-barlow">Our Architect</b></h1>
            <p className="max-sm:text-xs text-base">Mr. Shailesh Verma, Shop No.-6, Arctic Mall, Bariatu Road, Ranchi</p>
            <div className="w-auto grid grid-cols-4 text-blue-600  mt-4 mb-4 ">
              <a href="https://www.facebook.com/engineersgroupranchi">

                <img src={facebook} className="  h-4 w-4 text-white lg:h-8 lg:w-8" /></a >
            </div>


          </div>
          <div className=" content-center  bg-gray-100 hover:bg-slate-500 px-12 py-12  pt-0 pb-0">
            <img src={vorcos} alt="" className=" " />
            <h1 className="max-sm:text-base text-xl"><b className="font-bold font-serif font-barlow">Our Interiors</b></h1>
            <p className="max-sm:text-xs text-base">Mrs. Shifa Dayal Kujur, 5/470, Viram Khand, Gomti Nagar, Lucknow 226010, Uttar Pradesh</p>
            <div className="grid grid-cols-4 text-blue-600 mt-4 mb-4 ">
              <a href="https://www.facebook.com/www.edengreen.in">
                <img src={facebook} className="  h-4 w-4 text-white lg:h-8 lg:w-8	" /></a >
              <a href="https://www.instagram.com/edengreentechnologies/">
                <img src={instagram} className="  h-4 w-4 text-white	lg:h-8 lg:w-8" /></a ></div>

          </div>
          <div className=" content-center  bg-gray-100 hover:bg-slate-500  px-12 py-12 pt-0 pb-0">
            <img src={media} alt="" className=" " />
            <h1 className="max-sm:text-base text-xl  "><b className="font-bold font-serif font-barlow">Marketing And Communication</b></h1>
            <p className="max-sm:text-xs text-base">Sahu Chowk, Pundag, Ranchi, Jharkhand</p>
            <div className="grid grid-cols-4 text-blue-600 mt-4 mb-4">
              <a href="https://www.facebook.com/engineersgroupranchi">
                <img src={facebook} className="  h-4 w-4 text-white	lg:h-8 lg:w-8" /></a >

              <a href="https://www.instagram.com/mediaexpressranchi/">
                <img src={instagram} className="  h-4 w-4 text-white lg:h-8 lg:w-8	" /></a >
            </div>

          </div>

        </div>
      </div>


    </section>
  );
}
export default Home;
