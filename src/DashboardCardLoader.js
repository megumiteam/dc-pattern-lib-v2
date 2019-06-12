import React from 'react';
import ContentLoader from 'react-content-loader';
import DashboardCard from './DashboardCard';

const DashboardCardLoader = (
  {
    cardStyle,
  }: {
    cardStyle?: string,
  } = {
    cardStyle: 'site',
  },
) => (cardStyle ? (
  <DashboardCard borderless footer={<div className="text-center">Loading...</div>}>
    <ContentLoader
      height={300}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="400" height="300" />
    </ContentLoader>
  </DashboardCard>
) : (
  <DashboardCard>
    <ContentLoader height={55} speed={2} primaryColor="#f8f9fa" secondaryColor="#e9ecef">
      <rect x="60" y="5" rx="4" ry="4" width="200" height="6.4" />
      <rect x="60" y="20" rx="3" ry="3" width="250" height="6.4" />
      <rect x="60" y="35" rx="3" ry="3" width="150" height="6.4" />
      <circle cx="25" cy="25" r="25" />
    </ContentLoader>
  </DashboardCard>
));

export default DashboardCardLoader;
