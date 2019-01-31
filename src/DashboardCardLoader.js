import * as React from "react";
import DashboardCardGroup from "./DashboardCardGroup";
import DashboardCard from "./DashboardCard";
import ContentLoader from "react-content-loader";

const DashboardCardLoader = () => (
  <DashboardCard>
    <ContentLoader
      height={55}
      speed={2}
      primaryColor={"#f8f9fa"}
      secondaryColor={"#e9ecef"}>
      <rect x="60" y="5" rx="4" ry="4" width="200" height="6.4" />
      <rect x="60" y="20" rx="3" ry="3" width="250" height="6.4" />
      <rect x="60" y="35" rx="3" ry="3" width="150" height="6.4" />
      <circle cx="25" cy="25" r="25" />
    </ContentLoader>
  </DashboardCard>
);

export default DashboardCardLoader;
