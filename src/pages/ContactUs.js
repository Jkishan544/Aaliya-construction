import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";

export const ContactUs = () => {
  return (
    <div className="bg-slate-200">
      <section>
        <p className="w-auto h-36 content-center lg:h-60 bg-slate-600"><b className="max-sm:text-xl text-6xl text-white font-bold font-serif font-barlow">Contact Us</b>
        </p>

        <div>
          <div className="w-auto lg:px-8 py-8  pl-4 pr-4 "><b className="font-bold font-serif font-barlow" >Get In Touch</b>
            <hr className="w-32 border-t-4 border-orange-600 mt-2" />
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2 ">
              <div className="  bg-white max-sm:text-xs text-lg ml-4 mr-4 px-6 py-6  pl-4 pr-4">
                <h1 className="  "><b className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">Send Us A Message</b></h1>
                <div className="mt-10">
                  <label For=" fname" ><b className="font-bold font-serif font-barlow">Full Name<span class="material-symbols-outlined text-red-600 text-xs">
                    emergency
                  </span></b></label>
                  <input type="text" id="fname" name="fullName" placeholder="Full Name.." className="input" />
                </div>

                <div>

                  <label For=" fname" ><b className="font-bold font-serif font-barlow">Number<span class="material-symbols-outlined text-red-600 text-xs">
                    emergency
                  </span></b></label>
                  <input type="text" id="number" name="Number" placeholder="Number.." className="input" />


                </div>
                <div>
                  <label For=" fname" ><b className="font-bold font-serif font-barlow">Email<span class="material-symbols-outlined text-red-600 text-xs">
                    emergency
                  </span></b></label>
                  <input type="text" id="Email" name="Email" placeholder="Email.." className="input" />


                </div>
                <div>
                  <label For=" fname" ><b className="font-bold font-serif font-barlow">Purpose<span class="material-symbols-outlined text-red-600 text-xs">
                    emergency
                  </span></b></label>
                  <select id="Purpose" name="Purpose" placeholder="Your Purpose.." className="input">
                    <option value="booking">Booking</option>
                    <option value="buisness">Buisness</option>


                  </select>



                </div>
                <div>
                  <label For=" fname" ><b className="font-bold font-serif font-barlow">Your Message<span class="material-symbols-outlined text-red-600 text-xs">
                    emergency
                  </span></b></label>
                  <input type="text" id="YourMessage" name="Your Message" placeholder="Your Message.." className="input" />


                </div>
                <input type="submit" value="Submit" className="submit" />

              </div>

              <div className=" bg-white ml-4 mr-4 px-6 py-6 pl-4 pr-4 ">
                <b className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">Contact Info</b>
                <div className="  grid grid-cols-1 gap-2 py-10 lg:px-10 pl-0 pr-0 lg:grid-cols-2">

                  <div className="py-4 px-4 "><b className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow"><span class="material-symbols-outlined text-orange-600 mr-2 ">
                    call
                  </span>Call us</b>
                    <p>91 6205599190 <br />
                      91 6205408020</p>
                  </div>
                  <div className="py-4 px-4"><b className=" flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow"><span class="material-symbols-outlined  text-orange-600 mr-2">
                    location_on
                  </span>Our Location</b>
                    <p>Singh More, Hatia, Ranchi Jharkhand</p>
                  </div>
                  <div className="py-4 px-4"><b className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow">
                    <span class="material-symbols-outlined  text-orange-600 mr-2">
                      mail
                    </span>Our Email</b>
                    <p>aaliyaconstruction2013@gmail.com
                    </p>
                  </div>

                </div>
                <p><b className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">Follow Us</b></p><br />
                <div className="grid grid-cols-8 text-blue-600">

                  <a href="https://www.facebook.com/AaliyaConstructionRanchi">
                    <img src={facebook} className=" h-4 w-4 lg:h-8 lg:w-8 text-white	" /></a >
                  <a href="https://www.instagram.com/aaliyaconstruction/">
                    <img src={instagram} className="  h-4 w-4 lg:h-8 lg:w-8 text-white	" /></a >
                </div>

              </div>
            </div>
          </div>
        </div>



      </section>
    </div>
  )
}
