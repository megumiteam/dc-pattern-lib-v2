import React from 'react';
import {
  Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter,
} from 'reactstrap';

const DashboardCardHeader = ({
  title,
  actions,
  subtitle,
  headerClassName,
}: {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  headerClassName?: string;
}) => (title ? (
  <CardHeader className={`border-0 ${headerClassName || ''}`}>
    <div className="d-flex justify-content-between align-items-center">
      <CardTitle className={`h5 ${subtitle ? '' : 'mb-0'}`} tag="div">
        {title}
      </CardTitle>
      {actions ? <div>{actions}</div> : ''}
    </div>
    <DashboardCardSubTitle subtitle={subtitle} />
  </CardHeader>
) : null);

const DashboardCardFooter = ({ footer }: { footer?: React.ReactNode }) => {
  if (!footer) return null;
  return <CardFooter>{footer}</CardFooter>;
};

const DashboardCardSubTitle = ({ subtitle }: { subtitle?: string }) => {
  if (!subtitle) return null;
  return <CardSubtitle>{subtitle}</CardSubtitle>;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  actions,
  footer,
  className,
  bodyClassName,
  headerClassName,
  borderless,
  id,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  borderless?: boolean;
  tips?: React.ReactNode;
  id?: string;
}) => (
  <Card className={`shadow-sm ${className || ''}`} id={id}>
    <DashboardCardHeader
      title={title}
      subtitle={subtitle}
      actions={actions}
      headerClassName={`${title || subtitle ? 'pb-0' : ''} ${headerClassName} `}
    />
    {children ? (
      <CardBody className={`${bodyClassName || ''} ${borderless ? 'p-0 overflow-hidden' : ''}`}>
        {children}
      </CardBody>
    ) : null}
    <DashboardCardFooter footer={footer} />
  </Card>
);

export default DashboardCard;
