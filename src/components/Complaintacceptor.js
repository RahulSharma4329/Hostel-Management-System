import axios from "axios";
import React, { useState } from "react";
import "../css/complaintacceptor.css";

export default function Complaintacceptor(props) {
  const [showview, setshowview] = useState(true);
  const defaultrender = (
    <div className="Complaintbox">
      <div className="nocomplaints">No open complaints</div>
      <button className="complaintbtntext" onClick={() => setshowview(false)}>
        Raise a complaint
      </button>
    </div>
  );
  const handlesubmitcomplaintbox = (event) => {
    event.preventDefault();
    const complaintdata = event.target[0].value;
    if (complaintdata === "") {
      alert("invalid complaint message");
    } else {
      try {
        axios
          .post(
            "https://hms-server-rahulsharma4329.koyeb.app/storecomplaints",
            {
              username: props.username,
              complaintbody: complaintdata,
            }
          )
          .then((response) => {
            console.log(response);
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  let textbox = (
    <div className="complainttextbox">
      <form onSubmit={handlesubmitcomplaintbox}>
        <label htmlFor="Complaint">Enter you Complaint here</label>
        <textarea name="Complaint" id="Complaint" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  if (showview) return defaultrender;
  else return textbox;
}
