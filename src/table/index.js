import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className:  PropTypes.string
  }

  render() {
    const tableClasses = classNames('table', this.props.className);

    return (
      <div className={ tableClasses }>
        { this.props.children }
      </div>
    )
  }
}

Table.Row = class Row extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    category: PropTypes.string,
    description: PropTypes.string
  }

  render() {
    return (
      <div to={ link } className='table-row'>
        <div className='table-row-cell'>{ this.props.category }</div>
        <div className='table-row-cell'>{ this.props.description }</div>
      </div>
    )
  }
}

export default Table;
