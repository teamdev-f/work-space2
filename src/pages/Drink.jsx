import React from 'react';
import './Drink.css';

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

function Drink() {
  const cardItems = [
    { id: 0, title: 'コーヒー', fileName: 'drink1.jpg', content: '春のコーヒーです' },
    { id: 1, title: 'キリマンジャロ', fileName: 'drink2.jpg', content: '山です' },
    { id: 2, title: 'Coffee', fileName: 'drink3.jpg', content: 'スターバックスです' },
    { id: 3, title: 'カフェイン', fileName: 'drink4.jpg', content: 'コーヒーです' },
    { id: 4, title: 'コーヒー', fileName: 'drink1.jpg', content: '春のコーヒーです' },
    { id: 5, title: 'キリマンジャロ', fileName: 'drink2.jpg', content: '山です' },
    { id: 6, title: 'Coffee', fileName: 'drink3.jpg', content: 'スターバックスです' },
    { id: 7, title: 'カフェイン', fileName: 'drink4.jpg', content: 'コーヒーです' },
    { id: 8, title: 'コーヒー', fileName: 'drink1.jpg', content: '春のコーヒーです' },
    { id: 9, title: 'キリマンジャロ', fileName: 'drink2.jpg', content: '山です' },
    { id: 10, title: 'Coffee', fileName: 'drink3.jpg', content: 'スターバックスです' },
    { id: 11, title: 'カフェイン', fileName: 'drink4.jpg', content: 'コーヒーです' },
  ];
  return (
    <section>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardItems.map((item, idx) => (
          <div className="col col-md-4 col-lg-3 card-wrapper">
            <Card key={'drink-' + item.id} content={item.content} fileName={item.fileName} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Drink;