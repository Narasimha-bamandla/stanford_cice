import React from 'react';  
const RatingComponent = ({ star, percent }) => (
  <div className={`star${star}`} style={{ width: `max(${percent}%, 30px)`, minWidth: '30px' }}>
    {percent}%
  </div>
);

const RatingBar = ({ rateData }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, }}>
    <div className={'sdfd-ratingbar'}>
      {rateData.map((rate, index) => (
        <RatingComponent key={index} star={rate.star} percent={rate.percent} />
      ))}
    </div>
  </div>
);
const StarRatingBar = () => {
  const starsData = [
    { star: 5, label: '5 stars' },
    { star: 4, label: '4 stars' },
    { star: 3, label: '3 stars' },
    { star: 2, label: '2 stars' },
    { star: 1, label: '1 star' },
  ];

  return (
    <div className="sdfd-stars">
      {starsData.map(({ star, label }) => (
        <div key={star} className={`star${star}`}>
          <div className="color"></div>
          {label}
        </div>
      ))}
    </div>
  );
};
const RatingBars = () => {
  const ratingBarsData = [
    [
      { star: 5, percent: 64 },
      { star: 4, percent: 24 },
      { star: 3, percent: 5 },
      { star: 2, percent: 5 },
      { star: 1, percent: 2 },
    ],
    [
      { star: 5, percent: 54 },
      { star: 4, percent: 34 },
      { star: 3, percent: 23 },
      { star: 2, percent: 12 },
      { star: 1, percent: 5 },
    ],
     
  ];

  return (
    <div style={{ display: 'flex', flexDirection:'column',  gap: 20, }}>
      {ratingBarsData.map((rateData, index) => (
        <RatingBar key={index} rateData={rateData} />
      ))}
       <StarRatingBar />
    </div>
  );
};
 

 
export default RatingBars;
 