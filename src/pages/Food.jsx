import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + '/assets/' + props.fileName} className='cards-img card-img-top' alt={props.fileName} />
      <div className='card-body'>
        <h5 className='card-title text-center'>{props.title}</h5>
        <p className='card-text text-center'>{props.content}</p>
      </div>
    </div>
  );
}

function Food() {
  const cardItems = [
    { id: 0, title: 'ホットドッグ', fileName: 'food1.jpg', content: 'うまいです' },
    { id: 1, title: 'キッシュ', fileName: 'food1.jpg', content: '熱々です' },
    { id: 2, title: 'サンドイッチ', fileName: 'food3.jpg', content: '伯爵です' },
    { id: 3, title: 'トースト', fileName: 'food4.jpg', content: 'こんがりです' },
    { id: 0, title: 'スコーン', fileName: 'food1.jpg', content: '伯爵です' },
    { id: 1, title: 'ホットドッグ', fileName: 'food2.jpg', content: '熱々です' },
    { id: 2, title: 'サンドイッチ', fileName: 'food3.jpg', content: '伯爵です' },
    { id: 3, title: 'パイ', fileName: 'food4.jpg', content: '甘くないやつです' },
    { id: 0, title: 'スコーン', fileName: 'food1.jpg', content: '伯爵です' },
    { id: 1, title: 'ホットドッグ', fileName: 'food2.jpg', content: '熱々です' },
    { id: 2, title: 'サンドイッチ', fileName: 'food3.jpg', content: '伯爵です' },
    { id: 3, title: 'パイ', fileName: 'food4.jpg', content: '甘くないやつです' },
  ];
  return (
    <section>
      <div className='p-3 row row-cols-1 row-cols-md-3 g-4'>
        {cardItems.map((item) => (
          <div key={'food-' + item.id} className='col col-md-4 col-lg-3 card-wrapper'>
            <Card content={item.content} fileName={item.fileName} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Food;