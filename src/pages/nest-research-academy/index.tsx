import React from 'react';
import Layout from '@theme/Layout';
import VacantPositions from "@site/src/pages/nest-research-academy/VacantPositions";
import Info from "@site/src/pages/nest-research-academy/Info";
import FundingOpportunity from "@site/src/pages/nest-research-academy/FundingOpportunity";
import Banner from "@site/src/pages/nest-research-academy/Banner";

export default function NRA(): JSX.Element {
  return (
    <Layout>
      <Banner/>
      <Info />
      <FundingOpportunity/>
      <VacantPositions/>
    </Layout>
  );
}
