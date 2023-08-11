import React from "react";

function MenuItem(props) {
    return (
        <a 
        className="nav-item nav-link" 
        href={props.url}>
            {props.name}
        </a>
    );
    }
export default MenuItem;