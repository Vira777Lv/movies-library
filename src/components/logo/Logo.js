import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/cinema-penguin.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className='logoWrapper'>
      <Link to={'/'} title='Movies Library logo' className='logo'>
        <img src={logoIcon} className='imgLogo' alt='Movies Library logo'/>
        Movies Library
      </Link>
    </div>
  )
};

export default Logo
