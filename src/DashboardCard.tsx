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
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  headerClassName?: string;
}) => (title ? (
  <CardHeader className={`border-0 ${headerClassName || ''}`}>
    <div className="d-flex justify-content-between align-items-center">
      <CardTitle className="h5" tag="div">
        {title}
      </CardTitle>
      {actions ? <div>{actions}</div> : ''}
    </div>
    <DashboardCardSubTitle subtitle={subtitle} />
  </CardHeader>
) : null);
// eslint-disable-next-line max-len
const DashboardCardFooter = ({ footer }: { footer?: React.ReactNode }) => (footer ? <CardFooter>{footer}</CardFooter> : null);
// eslint-disable-next-line max-len
const DashboardCardSubTitle = ({ subtitle }: { subtitle?: string }) => (subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : null);

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
}) => (
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
    ) : null}
    <DashboardCardFooter footer={footer} />
  </Card>
);

export default DashboardCard;
