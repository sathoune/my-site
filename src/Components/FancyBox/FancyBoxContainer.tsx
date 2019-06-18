import React from 'react';
import FancyBox, {FancyBoxProps} from './FancyBox';

export interface FancyBoxContainerProps {
  fancyBoxes: Array<FancyBoxProps>
}

const FancyBoxContainer: React.FunctionComponent<FancyBoxContainerProps> = 
({fancyBoxes}) => {
  return (
    <div>
      <h2>Skills</h2>
      {fancyBoxes.map(boxProps => <FancyBox {...boxProps}/>)}
    </div>
  );
}

export default FancyBoxContainer;