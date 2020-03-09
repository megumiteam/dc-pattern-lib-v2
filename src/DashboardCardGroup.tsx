// @flow
import * as React from 'react';
import { CardDeck } from 'reactstrap';

const DashboardCardGroup = (
  { children }: { children: React.ReactNode } = {
    children: '',
  },
) => <CardDeck>{children}</CardDeck>;

export default DashboardCardGroup;