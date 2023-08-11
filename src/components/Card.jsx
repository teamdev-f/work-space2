import React from "react";

function Card(props) {
    return(
        
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">What's New?</h3>
            <div className="d-flex justify-content-around  align-items-center">
              <p className="card-content">
                {props.content}
              </p>
                <img src= {process.env.PUBLIC_URL + '/assets/' +  props.fileName}className="cards-img" alt = {props.fileName} />
            </div>
          </div>
        </div>
        
    );
}

export default Card;