import React from 'react'
import './FancyBox.css';

interface FancyBoxProps {
    backgroundImage: string,
    hiddenContent: string
}

const FancyBox: React.FunctionComponent<FancyBoxProps> = ({backgroundImage, hiddenContent}) => {
    const style = {
        background: `center url(${backgroundImage})`,
        backgroundSize: '200px auto',
        backgroundRepeat: 'no-repeat',
    }
    
    return (
    <div className="fancy-box">
        <div style={style} className="fancy-content">
            <div className="fancy-hidden-content">
                {hiddenContent}
            </div>
        </div>
    </div>
    )
}

export default FancyBox;