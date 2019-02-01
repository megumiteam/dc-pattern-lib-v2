// @flow
import React from 'react';
import { Modal } from 'reactstrap';

type Props = {
  className: string,
};
type State = {
  modal: boolean,
};

export default class AppDimmer extends React.Component<Props, State> {
  state = {
    modal: false,
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  };

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} />
    );
  }
}
