import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profilesidebar from "../components/Profilesidebar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Studentsdashboard() {
  const location = useLocation();
  const username = location.state;
  const [senddata, setsenddata] = useState({});

  useEffect(() => {
    if (username === null) {
      return <div>bad login attempt</div>;
    } else {
      try {
        axios
          .post("https://hms-server-rahulsharma4329.koyeb.app/fetchdets", {
            username: username.username,
            role: "student",
          })
          .then((response) => {
            setsenddata({
              name: response.data.data[0].name,
              email: response.data.data[0].email,
              phone: response.data.data[0].phone,
              roll: response.data.data[0].roll,
              branch: response.data.data[0].branch,
              year: response.data.data[0].year,
              hostelname: response.data.data[0].hostelname,
              roomno: response.data.data[0].roomno,
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [username]);

  return (
    <div className="studentsdashboard">
      <Navbar />
      <div className="displaycontent">
        <Profilesidebar {...senddata} />
      </div>
    </div>
  );
}
