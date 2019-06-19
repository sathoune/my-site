import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'

interface ToTopButtonProps {
  target: string
}

const ToTopButton: React.FunctionComponent<ToTopButtonProps> =
({target}) => {
  return (
    <a href={target}>
      <FontAwesomeIcon icon={faArrowCircleUp}/>
    </a>
  )
}

export default ToTopButton;