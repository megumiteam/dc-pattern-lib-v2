import React, { useState, useCallback } from 'react';
import { Alert } from 'reactstrap';
import {
  MdInfoOutline, MdErrorOutline, MdWarning, MdCheck,
} from 'react-icons/md';

type Props = {
  type: string;
  isOpen?: boolean;
  toggle?: Function;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconClassName?: string;
  canDismiss?: boolean;
};

const AlertLayout = ({
  type,
  children,
  icon,
  iconClassName,
  canDismiss,
}: {
  type: 'info' | 'success' | 'warning' | 'error' | 'danger' | string;
  children: React.ReactNode | React.ReactNode[];
  icon: React.ReactNode;
  iconClassName?: string;
  canDismiss?: boolean;
}) => {
  const [visible, updateVisibleState] = useState(true);
  const toggle = canDismiss
    ? useCallback(() => {
      updateVisibleState(!visible);
    }, [visible, updateVisibleState])
    : undefined;
  return (
    <Alert color={type} toggle={toggle} isOpen={visible}>
      <span className={`pr-2 ${iconClassName}`}>{icon}</span>
      {children}
    </Alert>
  );
};

export default (props: Props) => {
  const { children } = props;
  const type = props.type || 'info';

  switch (type) {
    case 'info':
      return (
        <AlertLayout {...props} type="info" icon={<MdInfoOutline />}>
          {children}
        </AlertLayout>
      );
    case 'success':
      return (
        <AlertLayout {...props} type="success" icon={<MdCheck />} iconClassName="text-green">
          {children}
        </AlertLayout>
      );
    case 'warning':
      return (
        <AlertLayout
          {...props}
          type="warning"
          icon={<MdErrorOutline />}
          iconClassName="text-yellow"
        >
          {children}
        </AlertLayout>
      );
    case 'error':
      return (
        <AlertLayout {...props} type="danger" icon={<MdWarning />} iconClassName="text-danger">
          <span className="text-danger font-weight-bold">Error: </span>
          {children}
        </AlertLayout>
      );
    case 'danger':
      return (
        <AlertLayout {...props} type="danger" icon={<MdWarning />} iconClassName="text-danger">
          <span className="text-danger font-weight-bold">Danger: </span>
          {children}
        </AlertLayout>
      );
    default:
      return (
        <AlertLayout {...props} type={type} icon={props.icon} iconClassName={props.iconClassName}>
          {children}
        </AlertLayout>
      );
  }
};
