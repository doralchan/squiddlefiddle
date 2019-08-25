import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Slide, Heading } from 'spectacle';
import Table from '../table';

import './style.scss';

class Cover extends Component {
  static propTypes = {
    projectName: PropTypes.string,
    projectNumber: PropTypes.string,
    companyName: PropTypes.oneOf(['Square', 'Gusto', 'AuditFile', 'Freelance']),
    managerNumber: PropTypes.string,
    engineerNumber: PropTypes.string
  }

  static defaultProps = {
    companyName: 'Square',
    projectName: 'Project Name',
    projectNumber: '1',
    managerNumber: '1',
    engineerNumber: '1'
  }

  render() {
    return (
      <Slide bgColor='tertiary' className='slide'>
        <div className='cover'>
          <Heading size={ 6 } textColor='secondary' bold={ false }>{ 'Project ' + this.props.projectNumber }</Heading>
          <Heading size={ 3 } textColor='primary' bold={ false }>{ this.props.projectName }</Heading>
          <Table>
            <Table.Row category='Company' description={ this.props.companyName }/>
            <Table.Row category='Product Managers' description={ this.props.managerNumber } />
            <Table.Row category='Engineers' description={ this.props.engineerNumber } />
            <Table.Row category='Product Designer' description='1' />
          </Table>
        </div>
      </Slide>
    )
  }
}

export default Cover;
