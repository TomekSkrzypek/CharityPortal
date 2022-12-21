import React from 'react'
import "./BigButton.scss"
import {Link} from 'react-router-dom'

const BigButton = ({link, text}) => {
  return (
    <Link className='BigButton' to={link}>{text}</Link>
  )
}

export default BigButton