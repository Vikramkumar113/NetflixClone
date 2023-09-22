import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./netflix.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const GetStarted = () => {
  const location = useLocation();
  const email = location?.state?.email;
  const [values, setValues] = useState({Email: email || "", password:""});
  const [errorMessage, setErrorMesaage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event){ 
    event.preventDefault();
    if(values.password)
    {
      console.log(values)
    }

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth , values.Email, values.password)
    .then((res)=> { 
       setSubmitButtonDisabled(false)
       navigate("/signup")
      })
    .catch((err)=> {
      setErrorMesaage(err.message)
      setSubmitButtonDisabled(true);
      console.log(err)
    })
  }
  
  

  return (
    <div>
      {/* navbar */}
      <div className="flex justify-between">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="ml-10 mt-5 w-[170px] " />{" "}
        </Link>
        <Link to="/signin">
          <button className="mt-[1.75rem] mr-16 text-xl font-semibold">
            Sign In
          </button>
        </Link>
      </div>

      {/* horizontal line */}
      <div className="bg-zinc-300 h-[0.10rem] my-3"></div>

      {/* form */}
      <div className="flex justify-center item-center h-screen">
      <form>
        <div>
          <p className="text-sm">STEP 1 OF 3</p>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <h1 className="text-3xl font-bold">Joining Netflix is easy.</h1>
          <p className="text-xl w-[30rem]">
            Enter your password and you'll be watching in no time.
          </p>
        </div>
        <div>
          <input 
          type="text"
          className="w-[27.4rem] px-4 py-4 my-5 border-zinc-500 border-[1px] rounded-sm" 
          placeholder="Enter your email"
          value={email}
         
          />
        </div>
        <div>
          <input
            className="w-[27.4rem] px-4 py-4 my-1 border-zinc-500 border-[1px] rounded-sm"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event)=>setValues((prev)=>({...prev, password: event.target.value}))}
          />
        </div>
        <div className="text-red-600">{errorMessage}</div>
        <div>
          <p className="my-4 text-blue-700 text-base font-semibold">
            Forget your password?
          </p>
        </div>
        <div>
          <button onClick={handleSubmit} disabled={submitButtonDisabled}  className="bg-red-600 px-[12.6rem] py-4 text-white text-xl  rounded-md font-semibold" >
            Next
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default GetStarted;
