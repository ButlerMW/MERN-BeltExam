import React from "react";
import { Link } from "@reach/router";

export default props => {

    return ( 
        <div>
            <Link to={"/"}>Home</Link> | <Link to={"/new_question"}>Add a Question</Link> | <Link to={"/logged_out"}>Logout</Link>
        </div>
    )
}