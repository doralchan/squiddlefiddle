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
  bs0: require('../assets/business_setup_0.png'),
  bs1: require('../assets/bs_mapping_1.svg'),
  bs2: require('../assets/bs_mapping_2.svg'),
  bs3: require('../assets/bs_mapping_3.svg'),
  bs4: require('../assets/bs_mapping_4.svg'),
  bs5: require('../assets/business_setup_1.png'),
  bs6: require('../assets/business_setup_2.png'),
  bs7: require('../assets/business_setup_3.png'),
  bs8: require('../assets/business_setup_4.png')
};

class Presentation extends React.Component {
  renderBusinessSetupContext() {
    return (
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
    )
  }

  renderBusinessSetupDesign() {
    return (
      <Sheet headingType='Design'>
        <Sheet.Section sectionTitle='What are the strategies?'>
          <List>
            <ListItem>Break information down into digestable chunks</ListItem>
            <ListItem>Provide the easiest path towards self-help</ListItem>
            <ListItem>Send appropriate guidance based on status</ListItem>
          </List>
        </Sheet.Section>
        <Sheet.Section sectionTitle='How will we know if it is succesful?'>
          <Text>
            There should be an uptick in onboarding, macro reports reflecting a decrease in calls about this, and less cancellations for filings and payments every quarter. It should also allow us to scale with additional states.
          </Text>
        </Sheet.Section>
      </Sheet>
    )
  }

  render() {
    return (
      <Deck transition={['slide']} transitionDuration={ 500 } theme={ theme }>
        <Slide bgColor='secondary'><Heading size={2} textColor='primary'>Hello There</Heading></Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>Bits of Work</Heading>
          <Image src={ images.dots } width={ 80 } />
        </Slide>
        <Cover projectName='Business Setup' engineerNumber='2' projectStatus='Beta' />
        { this.renderBusinessSetupContext() }
        <Slide className='slide-image'><Image src={ images.bs0 } className='border-all' /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs1 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs2 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs3 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs4 } /></Slide>
        { this.renderBusinessSetupDesign() }
        <Slide className='slide-image'><Image src={ images.bs5 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs6 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs7 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs8 } className='border-all' /></Slide>
        <Cover projectName='Timecards' managerNumber='2' engineerNumber='3' designerNumber='2' projectStatus='Alpha' />
        <Cover projectName='Chat Tool' companyName='Gusto' projectStatus='Released' />
        <QA />
      </Deck>
    );
  }
}

export default Presentation;
