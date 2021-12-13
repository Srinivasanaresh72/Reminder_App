import React from 'react'
import { Link } from "react-router-dom";

const Empdetails = () => {
    return (
        <div className="container">
            <h3> Employee Birthday Details </h3>
            <Link to="/empbirthday"> Today Birthday </Link>
        </div>
    )
}

export default Empdetails