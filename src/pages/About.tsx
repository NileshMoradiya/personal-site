import Page from '../layout/Page';
import React from 'react';

interface IAboutProps {}

const About = ({}: IAboutProps) => {
  return (
    <>
      <Page title="About" description="About">
        About
      </Page>
    </>
  );
};

export default About;
