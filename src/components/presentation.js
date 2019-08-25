import React from 'react';
import { Deck, Slide, Heading, Image, List, ListItem, Text } from 'spectacle';

import Cover from './cover';
import QA from './qa';
import Sheet from './sheet';

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
  dots: require('../assets/dots.svg'),
  bs1: require('../assets/bs_mapping_1.svg'),
  bs2: require('../assets/bs_mapping_2.svg'),
  bs3: require('../assets/bs_mapping_3.svg'),
  bs4: require('../assets/bs_mapping_4.svg'),
  bs5: require('../assets/bs_mapping_5.svg')
};

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={ 500 }
        theme={ theme }>
        <Slide bgColor='secondary'><Heading size={2} textColor='primary'>Hello There</Heading></Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>Bits of Work</Heading>
          <Image src={ images.dots } width={ 80 } />
        </Slide>
        <Cover projectName='Business Setup' engineerNumber='2' projectStatus='Beta' />
        <Sheet headingType='Context'>
          <Sheet.Section sectionTitle='What is the problem?'>
            <List>
              <ListItem>Onboarding dropoff at this step (Growth)</ListItem>
              <ListItem>High call volumes about their own business setup (Sales & CS)</ListItem>
              <ListItem>Invalid setup affects taxes owed and paid (Core)</ListItem>
              <ListItem>Invalid setup forces cancelled filings & payments (Operations)</ListItem>
              <ListItem>Advanced setup for multiple tax jurisdictions (Top Feature Request)</ListItem>
            </List>
          </Sheet.Section>
          <Sheet.Section sectionTitle='What does this mean?'>
            <Text>
              Customers are not getting enough affordances in the onboarding stage and/or enough early feedback to address their own business setup issues.
            </Text>
          </Sheet.Section>
        </Sheet>
        <Slide><Image src={ images.bs1 } width={ 350 } /></Slide>
        <Slide><Image src={ images.bs2 } width={ 400 } /></Slide>
        <Slide><Image src={ images.bs3 } width={ 550 } /></Slide>
        <Slide><Image src={ images.bs4 } width={ 500 } /></Slide>
        <Slide><Image src={ images.bs5 } width={ 500 } /></Slide>
        <Sheet headingType='Design'></Sheet>
        <Cover projectName='Timecards' managerNumber='2' engineerNumber='3' designerNumber='2' projectStatus='Alpha' />
        <Sheet headingType='Context'></Sheet>
        <Sheet headingType='Analysis'></Sheet>
        <Sheet headingType='Design'></Sheet>
        <Cover projectName='Chat Tool' companyName='Gusto' projectStatus='Released' />
        <QA />
      </Deck>
    );
  }
}

export default Presentation;
