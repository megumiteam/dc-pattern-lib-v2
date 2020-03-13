import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
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
};

const AlertLayout = ({
  type,
  children,
  icon,
  iconClassName,
}: {
  type: 'info' | 'success' | 'warning' | 'error' | 'danger' | string;
  children: React.ReactNode | React.ReactNode[];
  icon: React.ReactNode;
  iconClassName?: string;
}) => (
  <UncontrolledAlert color={type}>
    <span className={`pr-3 ${iconClassName}`}>{icon}</span>
    {children}
  </UncontrolledAlert>
);

export default (props: Props) => {
  const { children } = props;
  const type = props.type || 'info';

  switch (type) {
    case 'info':
      return (
        <AlertLayout type="info" icon={<MdInfoOutline />}>
          {children}
        </AlertLayout>
      );
    case 'success':
      return (
        <AlertLayout type="success" icon={<MdCheck />} iconClassName="text-green">
          {children}
        </AlertLayout>
      );
    case 'warning':
      return (
        <AlertLayout type="warning" icon={<MdErrorOutline />} iconClassName="text-yellow">
          {children}
        </AlertLayout>
      );
    case 'error':
      return (
        <AlertLayout type="danger" icon={<MdWarning />} iconClassName="text-danger">
          <span className="text-danger font-weight-bold">Error:</span>
          {children}
        </AlertLayout>
      );
    case 'danger':
      return (
        <AlertLayout type="danger" icon={<MdWarning />} iconClassName="text-danger">
          <span className="text-danger font-weight-bold">Danger:</span>
          {children}
        </AlertLayout>
      );
    default:
      return (
        <AlertLayout type={type} icon={props.icon} iconClassName={props.iconClassName}>
          {children}
        </AlertLayout>
      );
  }
};
