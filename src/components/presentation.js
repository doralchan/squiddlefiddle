import React from 'react';
import { Deck, Slide, Heading, Image, Appear, Text } from 'spectacle';

import Cover from './cover';

import createTheme from 'spectacle/lib/themes/default';

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
  profile: require('../assets/profile.svg'),
  dots: require('../assets/dots.svg')
};

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={ 500 }
        theme={ theme }>
        <Slide bgColor='secondary'>
          <Heading size={3} textColor='primary'>Hi Sentry</Heading>
          <Appear><div><Text textColor='tertiary'>I'm Dora</Text></div></Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>Bits of Work</Heading>
          <Image src={ images.dots } width={ 80 } />
        </Slide>
        <Cover projectName='Business Setup' engineerNumber='2' />
        <Slide>
          <Heading size={1} textColor='secondary' className='qa'>Q&A</Heading>
          <Image src={ images.profile } width={ 600 } />
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
