import React from 'react';
import Layout from '@theme/Layout';
import LatestNews from "@site/src/pages/news/LatestNews";
import Banner from "@site/src/pages/news/Banner";

export default function News(): JSX.Element {
  return (
    <Layout>
      <Banner/>
      <LatestNews/>
    </Layout>
  );
}
