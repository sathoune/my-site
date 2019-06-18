import React from 'react'
import FancyBox, {FancyBoxProps} from './FancyBox'

export interface FancyBoxContainerProps {
  fancyBoxes: Array<FancyBoxProps>
}

const FancyBoxContainer: React.FunctionComponent<FancyBoxContainerProps> = 
({fancyBoxes}) => {
  return (
    <div 
    className={"article"}
    >
      <h2>Skills</h2>
      <div 
        className={"fancy-box-container"}
      > 
        {fancyBoxes.map(boxProps => <FancyBox key={boxProps.id} {...boxProps}/>)}
      </div>
    </div>
  )
}

export default FancyBoxContainer