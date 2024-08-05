import React, { useState, useEffect } from "react";
import axios from "axios";
import { demouser } from "../Assets/index";

const Navbar = ({ pagename }) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((response) => {
        setUserInfo(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }, []);

  return (
    <nav className="bg-white flex items-center justify-between h-20 px-8 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-500">{pagename}</h1>
      </div>
      <div className="flex items-center">
        <div className="rounded-full h-10 w-10 bg-gray-300 flex items-center justify-center mr-4">
          <img src={demouser} alt="avatar" className="rounded-full h-8 w-8" />
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-medium">{userInfo.name || "Rishi Gupta"}</span>
          <span>{userInfo.role || "Super Admin"}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
