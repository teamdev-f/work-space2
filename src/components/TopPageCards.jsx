import React from "react";
import "./TopPageCards.css";
import Card from "./Card";

function TopPageCards() {
    const cardItems = [
        {title: "What's New?",fileName: "fruitsPie.jpg", content: "春の新メニュー「フルーツパイ」をご用意しました。新鮮なフルーツと生クリームのハーモニーをお楽しみください。"},
        {title: "What's New?",fileName: "coffeeSeeds.jpg", content: "今月のお薦めは「ラムダブレンド」。やや苦みのある上品な香りのコーヒーです。"}
    ]

    return(
        <section >
            <div className="row">
                
                {cardItems.map(item => (
                    <div className="col-md-12 col-lg-6 card-wrapper">
                    <Card key={item.fileName} content={item.content} fileName={item.fileName} title={item.title}/>
                    </div>
                ))};
               
            </div>
        </section>
    );
}

export default TopPageCards;