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
    <div className="flex">
        <div className="fancy-box" id="root">
            <div style={style} className="content">
                <div className="hidden-content">
                    {hiddenContent}
                </div>
            </div>
        </div>
    </div>
    )
}

export default FancyBox;