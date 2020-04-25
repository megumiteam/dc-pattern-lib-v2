import React, { useState, useCallback } from 'react';
import { Modal } from 'reactstrap';
import Logo from './Logos';

type Props = {
  isOpen: boolean;
};

export default (props: Props) => {
  const [isOpen, updateModalState] = useState(props.isOpen);
  const toggle = useCallback(() => {
    updateModalState(!isOpen);
  }, [isOpen, updateModalState]);
  return (
    <Modal
      centered
      isOpen={isOpen}
      toggle={toggle}
      contentClassName="text-center border-0 shadow-none bg-transparent"
    >
      <div className="spin mx-auto" style={{ width: '40px' }}>
        <Logo logoStyle="logomark-light" />
      </div>
    </Modal>
  );
};
