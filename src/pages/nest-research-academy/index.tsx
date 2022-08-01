import React from 'react';
import Layout from '@theme/Layout';
import VacantPositions from "@site/src/pages/nest-research-academy/VacantPositions";
import Info from "@site/src/pages/nest-research-academy/Info";
import FundingOpportunity from "@site/src/pages/nest-research-academy/FundingOpportunity";
import Banner from "@site/src/pages/nest-research-academy/Banner";
import {Stack} from "@chakra-ui/react";

export default function NRA(): JSX.Element {
  return (
    <Layout>
      <Stack spacing={['56px', '80px']} pb={['56px', '80px']}>
        <Banner/>
        <Info />
        <FundingOpportunity/>
        <VacantPositions/>
      </Stack>
    </Layout>
  );
}
