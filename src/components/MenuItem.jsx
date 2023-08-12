import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
    return (
        <Link 
        className="nav-item nav-link" 
        to={props.url}>
            {props.name}
        </Link>
    );
    }
export default MenuItem;