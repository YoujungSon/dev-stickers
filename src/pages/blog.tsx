import { graphql } from 'gatsby';
import React from 'react';
import Layout from './components/Layout';
import Seo from './components/Seo';
import { PageProps } from 'gatsby';

const blog = ({ data }: PageProps<Queries.BlogTitlesQuery>) => {
  return (
    <Layout title='Blog'>
      {data.allFile.nodes.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title='blog' />;

export default blog;
