import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Studentsdashboard() {
  const location = useLocation();
  const username = location.state;
  if (username === null) {
    return <div>bad login attempt</div>;
  }

  return (
    <div className="studentsdashboard">
      <Navbar />
    </div>
  );
}
