/* eslint-disable react/prefer-stateless-function */
import t from 'prop-types';
import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';

type Props = {
  position: string,
  className: string,
  bgColor: string,
  active: boolean,
  children: React.Node,
  toggle: Function,
};

export default class AppDrawer extends React.Component<Props> {
  static propTypes = {
    position: t.string,
    className: t.string,
    bgColor: t.string,
    active: t.bool,
  };

  static defaultProps = {
    position: 'left',
    className: '',
    bgColor: '',
    active: false,
  };

  render() {
    const {
      position, active, className, bgColor, children, toggle,
    } = this.props;
    return (
      <Modal
        size="sm"
        toggle={toggle}
        wrapClassName={`app-nav ${position}`}
        isOpen={active}
        className={className}
      >
        <ModalBody className={`${bgColor} vh-100 border-0 p-0`}>{children}</ModalBody>
      </Modal>
    );
  }
}
