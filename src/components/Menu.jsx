import React from "react";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
            <div className="nav navbar-nav">
                {props.items.map(item => (
                    <MenuItem key={item.name} name={item.name} url={item.url} />
                ))}
            </div>
        </div>
    </>
  );
}
export default Menu;