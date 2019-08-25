import React from 'react';
import { Deck, Slide, Heading, Image, Appear, Text } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');

const theme = createTheme(
  {
    primary: '#ffffff',
    secondary: '#0a2535',
    tertiary: '#e88562',
    quaternary: '#ffffff',
  },
  {
    primary: 'DM Serif Display',
    secondary: 'Open Sans'
  }
);

const images = {
  profile: require('./assets/profile.svg'),
  dots: require('./assets/dots.svg')
};

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={ 500 }
        theme={ theme }>
        <Slide bgColor='secondary'>
          <Heading size={3} textColor='primary' bold={ false }>Hello There</Heading>
          <Appear><div><Text>Test</Text></div></Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor='secondary' bold={ false }>Bits of Work</Heading>
          <Image src={ images.dots } width={ 80 } />
        </Slide>
        <Slide bgColor='tertiary'>
          <div className='Test'>
            <Heading size={5} textColor='primary' bold={false}>Project 1</Heading>
            <Heading size={5} textColor='primary' bold={false}>Project Name</Heading>
          </div>
        </Slide>
        <Slide bgColor='primary'>
          <Heading size={3} textColor='secondary' bold={ false }>El Fin</Heading>
          <Image src={ images.profile } width={ 600 } />
        </Slide>
      </Deck>
    );
  }
}

export default Presentation
