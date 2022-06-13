import React from 'react';

export default function City(waterFront, skyline, castle) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={`../public/${waterFront}.png`}/>
      <img src={`../public/${skyline}.png`}/>
      <img src={`../public/${castle}.png`}/>
    </div>
  );
}
