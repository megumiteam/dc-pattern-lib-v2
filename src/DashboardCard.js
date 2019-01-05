// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';

const DashboardCardHeader = ({
  title,
  actions,
  subtitle,
}: {
  title: string,
  subtitle: string,
  actions: React.Node,
}) =>
  (title ? (
    <CardHeader>
      <div className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0 h5 font-weight-bold" tag="div">
          {title}
        </CardTitle>
        {actions ? <div>{actions}</div> : ''}
      </div>
      <DashboardCardSubTitle subtitle={subtitle} />
    </CardHeader>
  ) : (
    ''
  ));

const DashboardCardFooter = ({ footer }: { footer?: React.Node } = { footer: '' }) =>
  (footer ? <CardFooter>{footer}</CardFooter> : '');

const DashboardCardSubTitle = ({ subtitle }: { subtitle?: string } = { subtitle: '' }) =>
  (subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : '');

const DashboardCard = ({
  title,
  subtitle,
  children,
  actions,
  footer,
  bodyClassName,
}: {
    title?: string,
    subtitle?: string,
    children: React.Node,
    actions?: React.Node,
    footer?: React.Node,
    bodyClassName?: string,
  } = {
    title: '',
    subtitle: '',
    bodyClassName: '',
    children: '',
    actions: '',
    footer: '',
  }) => (
    <Card className="shadow-sm">
      <DashboardCardHeader title={title} subtitle={subtitle} actions={actions} />
      {children ? <CardBody className={bodyClassName}>{children}</CardBody> : ''}
      <DashboardCardFooter footer={footer} />
    </Card>
);

DashboardCardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cardClass: PropTypes.string,
  bodyClassName: PropTypes.string,
};

DashboardCardHeader.defaultProps = {
  title: '',
  subtitle: '',
  bodyClassName: '',
};

export default DashboardCard;