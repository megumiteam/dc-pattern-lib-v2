import t from 'prop-types'
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AppDrawerToggle extends React.Component {
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
    className: t.string,
  }
  
  static defaultProps = {
    className: 'text-white fa-arrow-left',
    active: false,
  }

  render() {
    let {className, toggle, ...props} = this.props
    return (
      <div onClick={this.toggle} role="button" tabIndex="0">
        <i className={`fas ${className}`} />
        +
      </div>
      // <div>
      //   <Modal size="sm" toggle={toggle} wrapClassName={'app-nav ' + position} isOpen={active} className={className}>
      //     <ModalBody className="vh-100 border-0 bg-primary">
      //       {children}
      //     </ModalBody>
      //   </Modal>
      // </div>
    );
  }
}