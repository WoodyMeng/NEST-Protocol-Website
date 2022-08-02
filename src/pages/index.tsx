import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Banner from "@site/src/pages/home/Banner";
import NestFi from "@site/src/pages/home/NESTFi";
import Developers from "@site/src/pages/home/Developers";
import News from "@site/src/pages/home/News";
import Research from "@site/src/pages/home/Research";
import Partners from "@site/src/pages/home/Partners";
import {Stack, useMediaQuery} from "@chakra-ui/react";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="NEST is a blockchain-based probability virtual machine (PVM) system with web3 applications of DeFi, GameFi, NFT built on it.">
      <Stack spacing={isDesktop ? "80px" : "56px"} pb={isDesktop ? "80px" : "56px"}>
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
