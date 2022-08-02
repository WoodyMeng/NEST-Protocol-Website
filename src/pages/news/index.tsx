import React from 'react';
import Layout from '@theme/Layout';
import LatestNews from "@site/src/pages/news/LatestNews";
import Banner from "@site/src/pages/news/Banner";
import {Stack, useMediaQuery} from "@chakra-ui/react";

export default function News(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <Layout>
      <Stack spacing={isDesktop ? "80px" : "56px"} pb={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <LatestNews/>
      </Stack>
    </Layout>
  );
}
