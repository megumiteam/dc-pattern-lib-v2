import React from 'react';
import { CardDeck } from 'reactstrap';

const DashboardCardGroup = ({ children }: { children: React.ReactNode }) => (
  <CardDeck>{children}</CardDeck>
);

export default DashboardCardGroup;
