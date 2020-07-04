import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout } from 'layouts';

const Invisible = () => {
  // const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Invisible'} />
      <p> hello world </p>

    </Layout>
  );
};

export default Invisible;
