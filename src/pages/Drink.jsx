import React from "react";
import "./Drink.css"


function Card(props) {
    return(
        <div className="col">
        <div className="card">
          <img src= {process.env.PUBLIC_URL + '/assets/' +  props.fileName}className="cards-img card-img-top" alt = {props.fileName} />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text text-center">{props.content}</p>
            </div>
          </div>
        </div>
        
    );
}



function Drink() {
    const cardItems = [
        {title:"コーヒー",fileName: "fruitsPie.jpg", content: "春のコーヒーです"},
        {title:"キリマンジャロ",fileName: "fruitsPie.jpg", content: "山です"},
        {title:"Coffee",fileName: "fruitsPie.jpg", content: "スターバックスです"},
        {title:"カフェイン",fileName: "fruitsPie.jpg", content: "コーヒーです"},
    ]
  return (
        <section >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {cardItems.map(item => (
                    <div className="col-md-4 col-lg-3 card-wrapper">
                        <Card key={item.fileName} content={item.content} fileName={item.fileName} title={item.title}/>
                    </div>
                ))};
               
            </div>
        </section>
  );
}

export default Drink;