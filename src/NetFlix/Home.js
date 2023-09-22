import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import Questions from "./Questions";
import Footer from "./Footer";
import { footer } from "./FooterData";
//import logo from "./netflix.png";
import logo from "./cineHub.png"

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleStarted() {
    if(email)
    {
      navigate("/password", { state: { email } });
    }
    setError("email is required");
    return;
  }
  return (
      <div>
      <div className="bg-black bg-opacity-100">
        <nav className="absolute left-0 right-0 flex justify-between mx-40 z-20 mt-5">
          {/* navpart-1 */}
          <div>
            <img src={logo} alt="" className=" w-[154px]" />
          </div>

          {/* navpart-2 */}
          <div className="flex item-center space-x-5">
            <div>
              <select
                name="firstList"
                id="selection"
                className="bg-black bg-opacity-50 border-stone-400 border-2 rounded-md px-3 py-1 text-white font font-semibold "
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
              </select>
            </div>

            <div>
              <Link to="/signin">
                <button className="bg-red-700 text-white font-semibold px-4 py-1 rounded-md">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* after nav */}
        <div>
          <div className="absolute left-0 right-0 text-white flex flex-col items-center justify-center mt-[18rem] space-y-5">
            <h1 className="text-[3rem] font-[900] z-20">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-[1.5rem] font-semibold z-20">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-[1.5rem] font-semibold z-20">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="absolute left-0 right-0 flex justify-center item-center mt-[31rem] space-x-3">
            <input
              className="z-20 rounded-sm bg-black bg-opacity-60 border-zinc-500 border-[1px] text-white w-[25rem] px-4 py-[1rem]"
              type="text"
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              type="submit"
              value="Get Started"
              className="bg-red-700 rounded-sm text-white z-20  text-2xl font-semibold px-[3rem] py-[0.8rem]"
              onClick={handleStarted}
            />
          </div>
          <div className="text-red-600 absolute mt-[35rem] ml-[28.5rem]">{error}</div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/6e99205c-e34b-4dbe-ba45-b026023791bc/IN-en-20230508-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt=""
            className="relative opacity-30  bg-cover"
          />
        </div>
        <div className="bg-gray-900 h-[0.5rem]"></div>
      </div>
      <div>
        <Card />
        <div className="bg-gray-900 h-[0.5rem]"></div>
        <Questions />
        <div className="bg-gray-900 h-[0.5rem]"></div>
        <Footer links={footer} />
      </div>

      </div>
    
  );
};

export default Home;
