import React from 'react'
import './FancyBox.css';

const FancyBox: React.FunctionComponent = () => {
    return (
    <div className="flex">
        <div className="fancy-box placeholder" id="root">
            <div className="content">
                <div className="hidden-content">
                    surprise
                </div>
            </div>
        </div>
    </div>
    )
}

export default FancyBox;