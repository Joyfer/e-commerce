import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import Layout from '../components/Layout'
import MainImage from '../components/home/MainImage'

export default function Index() {
  return (
    <Layout>
      <MainImage></MainImage>
    </Layout>
  );
}