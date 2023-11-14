import React,{Fragment} from "react";
import image from "../assets/error.jpg";

const Error = () => {
  return (
    <Fragment>
      <h2>This page does not exist! </h2>
      <img src={image} alt="error pic" />
    </Fragment>
  );
};

export default Error;
