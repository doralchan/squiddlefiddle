import React, { Component } from 'react';

import { Slide, Heading, Image } from 'spectacle';
import Profile from '../../assets/profile_1.svg';

import './style.scss';

class Close extends Component {
  render() {
    return (
      <Slide bgColor='primary' className='slide-close'>
        <Heading size={2} textColor='secondary'>Thank You</Heading>
        <Image src={ Profile } width={ 700 } />
      </Slide>
    )
  }
}

export default Close;
