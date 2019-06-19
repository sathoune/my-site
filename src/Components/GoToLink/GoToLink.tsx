import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import './GoToLink.css'

export interface GoToLinkProps {
  fixedFromTop: string,
  fixedFromLeft: string,
  color: string,
  link: string
}

const GoToLink: React.FunctionComponent<GoToLinkProps> =
({fixedFromTop, fixedFromLeft, color, link}) => {
  const style = {
    top: fixedFromTop,
    left: fixedFromLeft,
    color: color
  }
  
  return (
    <a 
      style={style}
      href={link}
      className={'go-to-link'}
    >
      <FontAwesomeIcon icon={faArrowCircleUp}/>
    </a>
  )
}

export default GoToLink;