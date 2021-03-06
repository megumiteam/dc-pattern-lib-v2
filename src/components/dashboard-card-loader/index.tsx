import React from 'react';
import ContentLoader from 'react-content-loader';
import DashboardCard from '../dashboard-card';

type Props = {
  cardStyle?: string;
};
const DashboardCardLoader = (
  { cardStyle }: Props = {
    cardStyle: 'site',
  },
) => {
  if (cardStyle) {
    return (
      <DashboardCard borderless footer={<div className="text-center">Loading...</div>}>
        <ContentLoader
          height={300}
          width={400}
          speed={2}
          primaryColor="#DAD2D7"
          secondaryColor="#CCB9C5"
        >
          <rect x="0" y="0" rx="4" ry="4" width="400" height="300" />
        </ContentLoader>
      </DashboardCard>
    );
  }
  return (
    <DashboardCard>
      <ContentLoader height={55} speed={2} primaryColor="#f8f9fa" secondaryColor="#e9ecef">
        <rect x="60" y="5" rx="4" ry="4" width="200" height="6.4" />
        <rect x="60" y="20" rx="3" ry="3" width="250" height="6.4" />
        <rect x="60" y="35" rx="3" ry="3" width="150" height="6.4" />
        <circle cx="25" cy="25" r="25" />
      </ContentLoader>
    </DashboardCard>
  );
};

export default DashboardCardLoader;
