import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Slide, Cite } from 'spectacle';

import './style.scss';

class Quote extends Component {
  static propTypes = {
    children: PropTypes.node,
    businessName: PropTypes.string
  }

  render() {
    return (
      <Slide className='slide-quote'>
        <div className='slide-quote-content'>
          { this.props.children }
        </div>
        <Cite>{ this.props.businessName }</Cite>
      </Slide>
    )
  }
}

export default Quote;
