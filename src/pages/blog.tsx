import React from 'react';
import Layout from './components/Layout';
import Seo from './components/Seo';

const blog = () => {
  return (
    <Layout title='Hello welcome to my blog!'>
      <p>the most recent news from my shop</p>
    </Layout>
  );
};
export const Head = () => <Seo title='blog' />;

export default blog;
