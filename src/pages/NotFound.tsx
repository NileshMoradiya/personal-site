import Page from '../layout/Page';
import React from 'react';

interface INotFoundProps {}

const NotFound = ({}: INotFoundProps) => {
  return (
    <Page title="NotFound" description="NotFound">
      NotFound
    </Page>
  );
};

export default NotFound;
