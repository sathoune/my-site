import React from 'react'
import './FancyBox.css'

export interface FancyBoxProps {
  backgroundImage: string,
  hiddenProps: HiddenContentProps
}

const FancyBox: React.FunctionComponent<FancyBoxProps> = 
({backgroundImage, hiddenProps}) => {
  const style = {
    background: `center url(${backgroundImage})`,
    backgroundSize: '200px auto',
    backgroundRepeat: 'no-repeat',
  }
  
  return (
    <div className="fancy-box">
      <div 
        style={style} 
        className="fancy-content"
      >
        <FancyBoxHiddenContent {...hiddenProps} />
      </div>
    </div>
  )
}


export interface HiddenContentProps {
  content: string,
  backgroundColor: string
}

const FancyBoxHiddenContent: React.FunctionComponent<HiddenContentProps> = 
({content, backgroundColor}) => {
  const style = {
    background: backgroundColor
  }
  return (
    <div 
      style={style} 
      className="fancy-hidden-content"
    >
      {content}
    </div>
  )
}

export default FancyBox