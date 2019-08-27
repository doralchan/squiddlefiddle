import React, { Component } from 'react';

import { Slide, Heading, Image } from 'spectacle';
import Profile from '../../assets/profile_1.svg';

import './style.scss';

class QA extends Component {
  render() {
    return (
      <Slide bgColor='primary' className='slide-qa'>
        <Heading size={2} textColor='secondary'>Q & A</Heading>
        <Image src={ Profile } width={ 700 } />
      </Slide>
    )
  }
}

export default QA;
