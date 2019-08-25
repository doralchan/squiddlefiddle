import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slide, Heading } from 'spectacle';

import './style.scss';

class Sheet extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headingType: PropTypes.oneOf(['Context', 'Analysis', 'Design']),
    headingNumber: PropTypes.string
  }

  static defaultProps = {
    headingType: 'Context',
    headingNumber: '01',
  }

  renderNumber() {
    switch ( this.props.headingType ) {
      case 'Context':
        return '01';
      case 'Analysis':
        return '02'
      default:
        return '03'
    }
  }

  render() {
    return (
      <Slide className='slide-sheet'>
        <Heading size={ 4 } textColor='tertiary' className='slide-sheet-number'>
          { this.renderNumber() }
        </Heading>
        <Heading size={ 4 } textColor='secondary' className='slide-sheet-type'>
          { this.props.headingType }
        </Heading>
        <div className='slide-sheet-content'>
          { this.props.children }
        </div>
      </Slide>
    )
  }
}

export default Sheet;
