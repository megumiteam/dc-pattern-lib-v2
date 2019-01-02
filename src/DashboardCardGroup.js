import * as React from 'react';
import { CardDeck } from 'reactstrap';

const DashboardCardGroup = ({ children }: { children: React.Node } = {
  children: <div />,
}) => <CardDeck>{children}</CardDeck>;

export default DashboardCardGroup;
