// @flow
import React from 'react'
import './index.css'
import logo from './logo.svg'

const Header = (props: {}) => (
  <header className='header'>
    <img src={logo} className='logo' alt='logo' />
    <h1 className='title'>Welcome to React & Firebase</h1>
  </header>
)

export default Header
