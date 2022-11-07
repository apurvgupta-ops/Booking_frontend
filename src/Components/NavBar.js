import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center pt-4">
      <div
        className="text-white text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Booking
      </div>
      {user ? (
        <h2 className="text-black text-md capitalize bg-slate-200 rounded-full px-2 py-1">
          {user.username}
        </h2>
      ) : (
        <div className="">
          <button className=" p-1 mr-4 bg-white text-[#003580]">
            Register
          </button>
          <button
            className=" p-1  bg-white text-[#003580]"
            onClick={() => navigate("/login")}
          >
            Signin
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
