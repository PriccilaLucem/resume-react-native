import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Star = ({ fillColor = "#FFD700" }) => {
  return (
    <Svg
      height="30" 
      width="30" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="#000" 
      strokeWidth="2" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
    >
      <Path
        d="M12 .587l3.668 7.435 8.21 1.191-5.93 5.782 1.4 8.165L12 18.896l-7.348 3.864 1.4-8.165-5.93-5.782 8.21-1.191z"
        fill={fillColor} 
        stroke="#000" 
      />
    </Svg>
  );
};

export default Star;
