import React from 'react';
import Layout from '@theme/Layout';
import LatestNews from "@site/src/pages/news/LatestNews";
import Banner from "@site/src/pages/news/Banner";
import {Stack} from "@chakra-ui/react";

export default function News(): JSX.Element {
  return (
    <Layout>
      <Stack spacing={['56px', '80px']} pb={['56px', '80px']}>
        <Banner/>
        <LatestNews/>
      </Stack>
    </Layout>
  );
}
