import React from 'react';
import Layout from '@theme/Layout';
import VacantPositions from "@site/src/pages/nest-research-academy/VacantPositions";
import Info from "@site/src/pages/nest-research-academy/Info";
import FundingOpportunity from "@site/src/pages/nest-research-academy/FundingOpportunity";
import Banner from "@site/src/pages/nest-research-academy/Banner";
import {Stack, useMediaQuery} from "@chakra-ui/react";

export default function NRA(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Layout>
      <Stack spacing={isDesktop ? "80px" : "56px"} pb={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <Info />
        <FundingOpportunity/>
        <VacantPositions/>
      </Stack>
    </Layout>
  );
}
