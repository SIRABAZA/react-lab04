import React from "react";
import SharedCard from "../shared-components/SharedCard";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <SharedCard title="Not Found" className="alert-danger text-black">
      <h4 className="lead">This Page Is Not Found</h4>
      <NavLink to="/" className="btn btn-outline-dark">
        Back To Home Page
      </NavLink>
    </SharedCard>
  );
}
