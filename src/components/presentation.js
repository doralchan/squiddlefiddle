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
  profile_2: require('../assets/profile_2.svg'),
  dots: require('../assets/dots.svg'),
  bs0: require('../assets/business_setup_0.png'),
  bs1: require('../assets/bs_mapping_1.svg'),
  bs2: require('../assets/bs_mapping_2.svg'),
  bs3: require('../assets/bs_mapping_3.svg'),
  bs4: require('../assets/bs_mapping_4.svg'),
  bs5: require('../assets/bs_mapping_5.svg'),
  bs6: require('../assets/bs_mapping_6.svg'),
  bs7: require('../assets/business_setup_1.png'),
  bs8: require('../assets/business_setup_2.png'),
  bs9: require('../assets/business_setup_3.png'),
  bs10: require('../assets/business_setup_4.png'),
  tc1: require('../assets/tc_mapping_1.svg'),
  tc2: require('../assets/tc_mapping_2.svg'),
  tc3: require('../assets/tc_mapping_3.svg'),
  tc4: require('../assets/tc_mapping_4.svg'),
  tc5: require('../assets/timecard_1.png'),
  tc6: require('../assets/timecard_2.png'),
  tc7: require('../assets/timecard_3.png'),
  tc8: require('../assets/timecard_4.png'),
  sm1: require('../assets/sm_mapping_1.svg'),
  sm2: require('../assets/sm_mapping_2.svg'),
  sm3: require('../assets/sm_mapping_3.svg'),
  sm4: require('../assets/sm_mapping_4.svg')
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

  renderTimecardsContext() {
    return (
      <Sheet headingType='Context'>
        <Sheet.Section sectionTitle='What is the problem?'>
          <List>
            <ListItem>Errors cannot be investigated without exiting an active workflow</ListItem>
            <ListItem>Navigating between products takes a lot of time to load</ListItem>
            <ListItem>Overall gross pay cannot be seen when timecard hours are adjusted</ListItem>
            <ListItem>Payroll and timecards are products owned by different teams at Square</ListItem>
          </List>
        </Sheet.Section>
        <Sheet.Section sectionTitle='What does this mean?'>
          <Text>
            Customers are more likely to have discrepancies in pay when they cannot easily verify or compare hourly data.
          </Text>
        </Sheet.Section>
      </Sheet>
    )
  }

  renderTimecardsDesign() {
    return (
      <Sheet headingType='Design'>
        <Sheet.Section sectionTitle='What are the strategies?'>
          <List>
            <ListItem>Sync with stakeholders early</ListItem>
            <ListItem>Avoid navigating away from the active workflow</ListItem>
            <ListItem>Provide new functionality to edit timecard content within</ListItem>
            <ListItem>Optimize for skimmability</ListItem>
          </List>
        </Sheet.Section>
        <Sheet.Section sectionTitle='How will we know if it is succesful?'>
          <Text>
            One of the major reasons why pay gets cancelled frequently and re-run is incorrect pay based on inaccurate timecards. There should be a reduction of these occurrences in addition to an increase in timecard activity.
          </Text>
        </Sheet.Section>
      </Sheet>
    )
  }

  renderSummitContext() {
    return (
      <Sheet headingType='Context'>
        <Sheet.Section sectionTitle='What is the problem?'>
          <List>
            <ListItem>Design teams are siloed by product</ListItem>
            <ListItem>No central design org means no central design budget</ListItem>
            <ListItem>Lots of unshared talent</ListItem>
            <ListItem>Lack of opportunities to meet cross functionally</ListItem>
          </List>
        </Sheet.Section>
        <Sheet.Section sectionTitle='What does this mean?'>
          <Text>
            To build a better culture, we have to do it ourselves.
          </Text>
        </Sheet.Section>
      </Sheet>
    )
  }

  renderSummitDesign() {
    return (
      <Sheet headingType='Design'>
        <Sheet.Section sectionTitle='What are the strategies?'>
          <List>
            <ListItem>Sync with stakeholders early</ListItem>
            <ListItem>Gather feedback from all creatives by survey</ListItem>
            <ListItem>Diversify talks and speakers</ListItem>
            <ListItem>Provide continual inspiration</ListItem>
          </List>
        </Sheet.Section>
        <Sheet.Section sectionTitle='How will we know if it is succesful?'>
          <Text>Large attendance and the creation of an annual design budget</Text>
        </Sheet.Section>
      </Sheet>
    )
  }

  render() {
    return (
      <Deck transition={['slide']} transitionDuration={ 500 } theme={ theme }>
        <Slide bgColor='secondary'>
          <Heading size={2} textColor='primary'>Hello There</Heading>
        </Slide>
        <Slide>
          <Image src={ images.profile_2 } width={ 550 } className='margin-bottom-24px' />
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
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs5 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.bs6 } /></Slide>
        <Slide className='slide-image'><Image src={ images.bs7 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs8 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs9 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.bs10 } className='border-all' /></Slide>
        <Slide>
          <Image src='https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif' width={ 300 } className='margin-bottom-16px' />
          <Heading size={4} textColor='secondary'>Demo Time</Heading>
        </Slide>
        <Cover projectName='Timecard Sync' managerNumber='2' engineerNumber='3' designerNumber='2' projectStatus='Alpha' />
        { this.renderTimecardsContext() }
        <Slide className='slide-image' transition={['fade']}><Image src={ images.tc1 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.tc2 } /></Slide>
        { this.renderTimecardsDesign() }
        <Slide className='slide-image' transition={['fade']}><Image src={ images.tc3 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.tc4 } /></Slide>
        <Slide className='slide-image'><Image src={ images.tc5 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.tc6 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.tc7 } className='border-all' /></Slide>
        <Slide className='slide-image'><Image src={ images.tc8 } className='border-all' /></Slide>
        <Slide>
          <Image src='https://media.giphy.com/media/fUwOs80ja3sTPpjndh/giphy.gif' width={ 300 } className='margin-bottom-16px' />
          <Heading size={4} textColor='secondary'>Demo Time</Heading>
        </Slide>
        <Cover projectName='Design Summit' managerNumber='0' engineerNumber='0' designerNumber='3' companyName='Square' projectStatus='Released' />
        { this.renderSummitContext() }
        <Slide className='slide-image' transition={['fade']}><Image src={ images.sm1 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.sm2 } /></Slide>
        { this.renderSummitDesign() }
        <Slide className='slide-image' transition={['fade']}><Image src={ images.sm3 } /></Slide>
        <Slide className='slide-image' transition={['fade']}><Image src={ images.sm4 } /></Slide>
        <Slide>
          <Image src='https://media.giphy.com/media/3zD0Iymuhx3d6/giphy.gif' width={ 300 } className='margin-bottom-16px' />
          <Heading size={4} textColor='secondary'>Demo Time</Heading>
        </Slide>
        <QA />
        <Slide bgColor='secondary'><Heading size={3} textColor='primary'>Thank You</Heading></Slide>
      </Deck>
    );
  }
}

export default Presentation;
