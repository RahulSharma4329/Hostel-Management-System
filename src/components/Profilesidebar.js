import React from "react";
import "../css/dashboard.css";

export default function Profilesidebar(props) {
  return (
    <div>
      <div className="profilebar">
        <div className="pic">
          <img src="profile-user.png" alt="" />
          <div className="namedisp ">{props.name}</div>
          <div className="usndisp sizingdisp">{props.roll}</div>
          <div className="branchandyear sizingdisp">
            <div className="branchdisp">{props.branch}</div>
            <div className="yeardips">{props.year}</div>
          </div>
        </div>
        <div className="contactinfo">
          Contact Info:
          <div className="emaildisp">{props.email}</div>
          <div className="phonedisp">{props.phone}</div>
        </div>
        <div className="Hostelnameandroom">
          Hostel Info
          <div className="hostelnamedisp">{props.hostelname}</div>
          <div className="roomnodisp">Room No. {props.roomno}</div>
        </div>
      </div>
    </div>
  );
}
