import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <React.Fragment>
      <h2>Order Summary Page</h2>
      <div>Order Confirmed !</div>
      <button onClick={() => navigate(-1)}>Go Home</button>
    </React.Fragment>
  );
};
