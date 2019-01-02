import t from 'prop-types'
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AppDrawer extends React.Component {
  
  static propTypes = {
    position: t.string,
    className: t.string,

    active: t.bool,
  }
  
  static defaultProps = {
    position: 'left',
    className: '',
    active: false,
  }

  render() {
    let {position, active, className, children, ...props} = this.props
    return (
      <div>
        <Modal size="sm" wrapClassName={'app-nav ' + position} isOpen={active} className={className}>
          <ModalBody className="vh-100 border-0 bg-primary">
            {children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}