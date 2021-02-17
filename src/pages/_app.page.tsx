import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from './layout';
import '../../styles/globals.css';

const SakilaClientFilm: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default SakilaClientFilm;
