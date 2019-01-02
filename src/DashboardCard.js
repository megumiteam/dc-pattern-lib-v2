// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';

const DashboardCardHeader = ({
  title,
  tips,
  actions,
  subtitle,
}: {
  title: string,
  subtitle: string,
  tips: React.Node,
  actions: React.Node,
}) =>
  (title ? (
    <CardHeader>
      <div className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0 h5" tag="h3">
          {title}
        </CardTitle>
        <div>
          {tips}
          {actions}
        </div>
      </div>
      <DashboardCardSubTitle subtitle={subtitle} />
      <hr />
    </CardHeader>
  ) : (
    <div />
  ));

const DashboardCardFooter = ({ footer }: { footer?: React.Node } = { footer: '' }) =>
  (footer ? <CardFooter>{footer}</CardFooter> : <div />);

const DashboardCardSubTitle = ({ subtitle }: { subtitle?: string } = { subtitle: '' }) =>
  (subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : <div />);

const DashboardCard = ({
  title,
  subtitle,
  children,
  style,
  tips,
  actions,
  footer,
  cardPadding,
}: {
    title?: string,
    subtitle?: string,
    children: React.Node,
    tips?: React.Node,
    actions?: React.Node,
    footer?: React.Node,
    style?: string,
    cardPadding?: string,
  } = {
    title: '',
    subtitle: '',
    style: '',
    cardPadding: '',
    children: <div />,
    tips: <div />,
    actions: <div />,
    footer: <div />,
  }) => (
    <Card className="w-100 shadow" style={style}>
      <DashboardCardHeader title={title} subtitle={subtitle} tips={tips} actions={actions} />
      {children ? <CardBody className={cardPadding}>{children}</CardBody> : <div />}
      <DashboardCardFooter footer={footer} />
    </Card>
);

DashboardCardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cardClass: PropTypes.string,
  style: PropTypes.string,
  cardPadding: PropTypes.string,
};

DashboardCardHeader.defaultProps = {
  title: '',
  subtitle: '',
  style: '',
  cardPadding: '',
};

export default DashboardCard;