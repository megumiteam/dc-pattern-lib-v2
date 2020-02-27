// @flow
import React from 'react';
import { Modal } from 'reactstrap';
import Logo from './Logos';

type Props = {
  isOpen: boolean,
};

export default class DashboardDimmer extends React.Component<Props> {
  render() {
    return (
      <Modal
        centered
        isOpen={this.props.isOpen}
        // @ts-ignore
        toggle={this.toggle}
        contentClassName="text-center border-0 shadow-none bg-transparent"
      >
        <div className="spin mx-auto" style={{ width: '40px' }}>
          <Logo logoStyle="logomark-ko-white" />
        </div>
      </Modal>
    );
  }
}
