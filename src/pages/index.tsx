import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Banner from "@site/src/pages/home/Banner";
import NestFi from "@site/src/pages/home/NESTFi";
import Developers from "@site/src/pages/home/Developers";
import News from "@site/src/pages/home/News";
import Research from "@site/src/pages/home/Research";
import Partners from "@site/src/pages/home/Partners";
import {Stack} from "@chakra-ui/react";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Stack spacing={['56px', '80px']} pb={['56px', '80px']}>
        <Banner/>
        <NestFi/>
        <Developers/>
        <News/>
        <Research/>
        <Partners/>
      </Stack>
    </Layout>
  );
}
