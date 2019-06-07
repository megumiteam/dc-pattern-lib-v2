// @flow
import * as React from 'react';
import {
  Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter,
} from 'reactstrap';

const DashboardCardHeader = ({
  title,
  actions,
  subtitle,
  headerClassName,
}: {
  title: string,
  subtitle: string,
  actions: React.Node,
  headerClassName: String,
}) => (title ? (
  <CardHeader className={`border-0 ${headerClassName || ''}`}>
    <div className="d-flex justify-content-between align-items-center">
      <CardTitle className="mb-0 h5" tag="div">
        {title}
      </CardTitle>
      {actions ? <div>{actions}</div> : ''}
    </div>
    <DashboardCardSubTitle subtitle={subtitle} />
  </CardHeader>
) : (
  ''
));

const DashboardCardFooter = ({ footer }: { footer?: React.Node } = { footer: '' }) => (footer ? <CardFooter>{footer}</CardFooter> : '');

const DashboardCardSubTitle = ({ subtitle }: { subtitle?: string } = { subtitle: '' }) => (subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : '');

const DashboardCard = (
  {
    title,
    subtitle,
    children,
    actions,
    footer,
    className,
    bodyClassName,
    headerClassName,
    borderless,
  }: {
    title?: string,
    subtitle?: string,
    children: React.Node,
    actions?: React.Node,
    footer?: React.Node,
    className?: string,
    bodyClassName?: string,
    headerClassName?: string,
    borderless?: Boolean,
  } = {
    title: '',
    subtitle: '',
    bodyClassName: '',
    headerClassName: '',
    children: '',
    actions: '',
    className: '',
    footer: '',
    borderless: '',
  },
) => (
  <Card className={`shadow-sm ${className || ''}`}>
    <DashboardCardHeader
      title={title}
      subtitle={subtitle}
      actions={actions}
      headerClassName={headerClassName}
    />
    {children ? (
      <CardBody className={`${bodyClassName || ''} ${borderless ? 'p-0 overflow-hidden' : ''}`}>
        {children}
      </CardBody>
    ) : (
      ''
    )}
    <DashboardCardFooter footer={footer} />
  </Card>
);

export default DashboardCard;
