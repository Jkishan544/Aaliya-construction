import b4 from "../assets/images/b4.jpg";
import vorcos from "../assets/images/vorcos.png";
import media from "../assets/images/media.png";
import eg from "../assets/images/eg.jpg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";


export const About = () => {
  return (
    <div className="bg-slate-100">
      <section>
        <div className="w-auto h-36 content-center lg:h-60 bg-slate-600 "><b className=" max-sm:text-xl  text-6xl text-white font-bold font-serif font-barlow">About Us</b>
        </div>


        <div className="  flex-wrap justify-center w-auto flex py-4 px-4 mt-8 mb-8 pb-8 pt-8    ">


          <div className=" w-auto    pl-12 pr-4 mt-8 mb-8 lg:w-1/2 lg:pr-0 lg:pl-0">
            <div className=" w-auto mx-auto h-96 border-4 border-gray-400 lg:w-3/5">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b4} alt="" />
            </div>
          </div>

          <div className="w-auto lg:w-1/2">
            <h1 className="w-auto max-sm:text-lg text-4xl"><b className="font-bold font-serif font-barlow">Our Story</b></h1>
            <hr className="max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />
            <p className="max-sm:text-xs text-base mt-4 w-auto lg:w-3/4 ">Aaliya Construction is a proprietary firm owned and run by Mr. Shailesh Sudhanshu Topno, engaged in Real-Estate Development since 2013, having its office at Bando Haat, Hawai Nagar, Road No. 0, Ranchi. Since its inception the firm has earned a respect and credence among the customers/ clients and the financial institutions as well.. Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.<br />
              We build Residential Apartment / Residential Bungalow / School Building and Residential Building for Society Mentors</p>
            <div className="  grid grid-cols-1  mt-10 lg:grid-cols-2 lg:text-lg">
              <p className="flex"><span class="material-symbols-outlined">
                check_circle
              </span><b className="font-bold font-serif font-barlow">Professional Specialist</b></p>
              <p className="flex"><span class="material-symbols-outlined">
                check_circle
              </span><b className="font-bold font-serif font-barlow">Brilliant Ideas</b></p>
              <p className="flex"><span class="material-symbols-outlined">
                check_circle
              </span><b className="font-bold font-serif font-barlow">Precise Builders</b></p>
              <p className="flex"><span class="material-symbols-outlined">
                check_circle
              </span><b className="font-bold font-serif font-barlow">24/7 Assiatance</b></p>

            </div>
          </div>
        </div>

        <div className="py-4 px-4 mt-6 lg:px-28 lg:py-8 ">
          <div className="w-auto content-center lg:w-2/5">
            <h1 className="max-sm:text-base text-4xl  "><b className="font-bold font-serif font-barlow">How We Work</b></h1>
            <hr className="max-sm:w-8 w-32 border-t-4 border-orange-600 mt-2" />
            <p className="max-sm:text-xs text-base">You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
            <div />
          </div>

          <div className="grid grid-cols-1 gap-2  py-8 px-4 w-auto justify-center text-sm lg:text-lg pt-0 pb-0 mt-8 mb-8 lg:grid-cols-4 lg:gap-4 lg:px-0 lg:py-10 lg:my-0">
            <div className="bg-white px-16 py-16 pt-8 pb-8"><b className="font-bold font-serif font-barlow">We Care</b>
              <p className="text-sm lg:text-base">We respect each other and we do things safely and sustainably. It's good for our people, our business and our local communities.</p></div>
            <div className="bg-white px-16 py-16  pt-8 pb-8 "><b className="font-bold font-serif font-barlow">We Achive Together</b>
              <p className="text-sm lg:text-base">We value the contribution of each individual and we work together to build strong, open and trusting partnerships.</p></div>
            <div className="bg-white px-16 py-16 pt-8 pb-8 "><b className="font-bold font-serif font-barlow">We Improve</b>
              <p className="text-sm lg:text-base">We listen, learn and adapt our ideas and experience into better solutions and service for our customers.</p></div>
            <div className="bg-white px-16 py-16 pt-8 pb-8 "><b className="font-bold font-serif font-barlow">We Deliver</b>
              <p className="text-sm lg:text-base">We set ourselves stretching goals, taking pride in doing a great job and helping our customers and partners to succeed.</p></div>
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
    </div>
  )
}
