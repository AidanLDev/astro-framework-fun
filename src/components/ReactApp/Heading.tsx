import React from '@astrojs/react';
import logo from './logo.svg';

import Styles from './styles.module.scss';

interface Props {
  title: string;
}


export default function Heading({title}: Props) {
  
  return (
    <>
      <div className='center'>
        <h1 className={Styles.heading}>{title}</h1>
        </div>
      <div className='center'>
        <img src={logo} className={Styles.appLogo} alt="logo" />
      </div>
    </>
  )
}