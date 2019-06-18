import React from 'react';
import FancyBox, {FancyBoxProps} from './FancyBox';

export interface FancyBoxParentProps {
  fancyBoxes: Array<FancyBoxProps>
}

const FancyBoxParent: React.FunctionComponent<FancyBoxParentProps> = 
({fancyBoxes}) => {
  return (
    <div>
      <h2>Skills</h2>
      {fancyBoxes.map(boxProps => <FancyBox {...boxProps}/>)}
    </div>
  );
}

export default FancyBoxParent;