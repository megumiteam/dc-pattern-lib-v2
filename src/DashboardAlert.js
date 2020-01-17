/* eslint-disable react/prefer-stateless-function */
import t from 'prop-types';
import * as React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import {
  MdInfoOutline, MdErrorOutline, MdWarning, MdCheck,
} from 'react-icons/md';

type Props = {
  type: string,
  children: React.Node,
};

export default class DashboardAlert extends React.Component<Props> {
  static propTypes = {
    type: t.string,
  };

  static defaultProps = {
    type: 'info',
  };

  render() {
    const { type, children } = this.props;

    if (type === 'info') {
      return (
        <UncontrolledAlert color={type}>
          <span className="pr-3">
            <MdInfoOutline />
          </span>
          {children}
        </UncontrolledAlert>
      );
    }

    if (type === 'success') {
      return (
        <UncontrolledAlert color={type}>
          <span className="pr-3 text-green">
            <MdCheck />
          </span>
          {children}
        </UncontrolledAlert>
      );
    }

    if (type === 'warning') {
      return (
        <UncontrolledAlert color={type}>
          <span className="pr-3 text-yellow">
            <MdErrorOutline />
          </span>
          {children}
        </UncontrolledAlert>
      );
    }

    if (type === 'error' || type === 'danger') {
      return (
        <UncontrolledAlert color="danger">
          <span className="pr-3 text-danger">
            <MdWarning />
          </span>
          <span className="text-danger font-weight-bold">Error:</span>
          {' '}
          {children}
        </UncontrolledAlert>
      );
    }

    if (type === 'danger') {
      return (
        <UncontrolledAlert color="danger">
          <span className="pr-3 text-danger">
            <MdWarning />
          </span>
          <span className="text-danger font-weight-bold">Danger:</span>
          {' '}
          {children}
        </UncontrolledAlert>
      );
    }

    return (
      <UncontrolledAlert>
        {type}
        {children}
      </UncontrolledAlert>
    );
  }
}
