import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";



export default () => {

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>YOU LOGGED OUT!!!</h1>
            <p>JK............ I don't know login and reg............</p>
        </div>
    )
}