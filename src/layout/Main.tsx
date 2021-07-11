import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { ReactNode } from 'react';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps) => (
  <HelmetProvider>
    <Box>
      <Navigation />
      <Box
        sx={{
          mt: 6,
        }}>
        <Container>
          <Grid container spacing={2}>
            <Hidden mdDown>
              <Grid item xs={12} md={5} lg={4}>
                <SideBar />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7} lg={8}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </HelmetProvider>
);

export default Main;
