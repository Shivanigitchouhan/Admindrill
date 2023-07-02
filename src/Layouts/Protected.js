import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // let register = localStorage.getItem("email");
    // if (!register) {
    //   navigate('/');
    // }
  });

  return (
    <div>
      <Component />
    </div>
  )
}