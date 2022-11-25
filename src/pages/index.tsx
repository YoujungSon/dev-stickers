import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from './components/Layout';
import Seo from './components/Seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title='Welcome to DevSticker 👋'>
      <div></div>
    </Layout>
  );
};
export const Head = () => <Seo title='Home' />;
export default IndexPage;
