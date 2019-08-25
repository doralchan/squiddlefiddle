import React from 'react';
import { Deck, Slide, Heading, Image } from 'spectacle';

import Cover from './cover';
import QA from './qa';

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
          <Heading size={3} textColor='primary'>Hello There</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>Bits of Work</Heading>
          <Image src={ images.dots } width={ 80 } />
        </Slide>
        <Cover projectStatus='Beta' projectName='Business Setup' engineerNumber='2' />
        <Cover projectNumber='2' projectStatus='Alpha' projectName='Timecards' managerNumber='2' engineerNumber='3' designerNumber='2'/>
        <Cover projectNumber='3' projectName='Chat' companyName='Gusto' />
        <QA />
      </Deck>
    );
  }
}

export default Presentation;
