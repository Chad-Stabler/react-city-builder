import React from 'react';

export default function Slogan({ slogan }) {
  return (
    <li className='slogan'>
      {slogan}
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
    </li>
  );
}
