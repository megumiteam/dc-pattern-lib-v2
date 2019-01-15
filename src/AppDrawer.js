import t from 'prop-types'
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }
  
  static propTypes = {
    position: t.string,
    className: t.string,
    bgColor: t.string,
    active: t.bool,
  }
  
  static defaultProps = {
    position: 'left',
    className: '',
    bgColor: '',
    active: false,
  }

  render() {
    let {position, active, className, bgColor, children, toggle, ...props} = this.props
    return (
      <div>
        <Modal size="md" toggle={toggle} wrapClassName={'app-nav ' + position} isOpen={active} className={className}>
          <ModalBody className={bgColor + ' vh-100 border-0'}>
            {children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}