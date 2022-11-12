import React from "react";

export default function Complainttextbox() {
  return (
    <div className="complainttextbox">
      <form>
        <label htmlFor="Complaint">Enter you Complaint here</label>
        <textarea name="Complaint" id="Complaint" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
