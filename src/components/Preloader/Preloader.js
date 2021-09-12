import React from "react";
import preloader from "./../../images/spinner.gif";
import "./Preloader.css";

const Preloader = (props) => {
    return <div className="Preloader"><img src = {preloader} /></div>
};

export default Preloader;