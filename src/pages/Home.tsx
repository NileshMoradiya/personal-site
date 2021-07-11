import Page from '../layout/Page';
import React from 'react';
import StyledNavLink from '../components/StyledNavLink';
import { Typography } from '@material-ui/core';

interface IHomeProps {}

const Home = ({}: IHomeProps) => {
  return (
    <Page
      title="About this site"
      description="A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT.">
      <Typography variant="body1" paragraph>
        Welcome to my website. Please feel free to read more{' '}
        <StyledNavLink to="/about" label="about me" />, or you can check out my{' '}
        <StyledNavLink to="/resume" label="resume" />,{' '}
        <StyledNavLink to="/projects" label="projects" />, view{' '}
        <StyledNavLink to="/stats" label="site statistics" />, or{' '}
        <StyledNavLink to="/contact" label="contact" /> me.
      </Typography>
    </Page>
  );
};

export default Home;
