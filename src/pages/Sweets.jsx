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

function Sweets() {
  const cardItems = [
    { id: 0, title: 'ケーキ', fileName: 'sweets1.jpg', content: '王道です' },
    { id: 1, title: 'パイ', fileName: 'sweets2.jpg', content: '美味しいです' },
    { id: 2, title: 'パフェ', fileName: 'sweets3.jpg', content: '季節ものです' },
    { id: 3, title: 'プリン', fileName: 'sweets4.jpg', content: 'プリンです' },
    { id: 0, title: 'ケーキ', fileName: 'sweets1.jpg', content: '王道です' },
    { id: 1, title: 'パイ', fileName: 'sweets2.jpg', content: '美味しいです' },
    { id: 2, title: 'パフェ', fileName: 'sweets3.jpg', content: '季節ものです' },
    { id: 3, title: 'プリン', fileName: 'sweets4.jpg', content: 'プリンです' },
    { id: 0, title: 'ケーキ', fileName: 'sweets1.jpg', content: '王道です' },
    { id: 1, title: 'パイ', fileName: 'sweets2.jpg', content: '美味しいです' },
    { id: 2, title: 'パフェ', fileName: 'sweets3.jpg', content: '季節ものです' },
    { id: 3, title: 'プリン', fileName: 'sweets4.jpg', content: 'プリンです' },
  ];
  return (
    <section>
      <div className='p-3 row row-cols-1 row-cols-md-3 g-4'>
        {cardItems.map((item) => (
          <div key={'sweets-' + item.id} className='col col-md-4 col-lg-3 card-wrapper'>
            <Card content={item.content} fileName={item.fileName} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sweets;
