import React from "react";
import { useLocation } from "react-router-dom";

export default function Studentsdashboard() {
  const location = useLocation();
  return <div>{location.state.username}</div>;
}
