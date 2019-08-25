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
    engineerNumber: PropTypes.string,
    designerNumber: PropTypes.string,
    projectStatus: PropTypes.string
  }

  static defaultProps = {
    companyName: 'Square',
    projectName: 'Project Name',
    projectNumber: '1',
    managerNumber: '1',
    engineerNumber: '1',
    designerNumber: '1',
    projectStatus: 'Released'
  }

  render() {
    return (
      <Slide bgColor='tertiary' className='slide'>
        <div className='cover'>
          <Heading size={ 6 } textColor='secondary' className='margin-bottom-32px'>
            { 'Project ' + this.props.projectNumber }
          </Heading>
          <Heading size={ 3 } textColor='primary' className='margin-bottom-32px'>
            { this.props.projectName }
          </Heading>
          <Table>
            <Table.Row category='Company' description={ this.props.companyName }/>
            <Table.Row category='Status' description={ this.props.projectStatus } />
            <Table.Row category='Product Managers' description={ this.props.managerNumber } />
            <Table.Row category='Engineers' description={ this.props.engineerNumber } />
            <Table.Row category='Product Designers' description={ this.props.designerNumber} />
          </Table>
        </div>
      </Slide>
    )
  }
}

export default Cover;
