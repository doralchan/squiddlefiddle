// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#ffffff',
    secondary: '#0a2535',
    tertiary: '#e88562',
    quaternary: '#ffffff',
  },
  {
    primary: {
      name: 'DM Serif Display'
    },
    secondary: 'Open Sans',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor='primary'>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text textSize='24px' textFont='secondary' textColor="secondary">
          Standard text
        </Text>
      </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} bold={false} textColor="secondary">
            Hello There
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
