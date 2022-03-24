import React from 'react'
import propTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

import "./assets/style/button.css"

export default function Button(props) {
  const navigate = useNavigate();
  const redirectPage = () => navigate(props.toPage);

  return (
    <button className={props.type} onClick={() => redirectPage()} disabled={props.isDisabled}> {props.text} </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(['primary-button', 'secondary-button', 'action-button']),
  text: propTypes.string,
  onClick: propTypes.string,
  isDisabled: propTypes.bool
};


