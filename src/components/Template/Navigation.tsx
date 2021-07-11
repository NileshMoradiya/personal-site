import { AppBar, Divider, Stack, Toolbar, useTheme } from '@material-ui/core';
import React, { Fragment } from 'react';

import StyledNavLink from '../StyledNavLink';
import StyledTypography from '../StyledTypography';
import routes from '../../data/routes';

const Navigation = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        id="header"
        variant="outlined"
        position="sticky"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Toolbar variant="dense">
          <Stack direction="row" spacing={2} alignItems="center">
            {routes
              .filter((link) => link.index)
              .map((indexLink) => (
                <StyledNavLink
                  key={indexLink.label}
                  to={indexLink.path}
                  label={indexLink.label}>
                  <StyledTypography
                    variant="button"
                    display="inline"
                    color="text.primary"
                    bold={true}
                    capitalized={true}>
                    {indexLink.label}
                  </StyledTypography>
                </StyledNavLink>
              ))}
            {routes
              .filter((link) => !link.index)
              .map((nonIndexLink) => (
                <Fragment key={nonIndexLink.label}>
                  <Divider orientation="vertical" sx={{ color: 'green' }} />
                  <StyledNavLink
                    exact
                    to={nonIndexLink.path}
                    label={nonIndexLink.label}
                    activeStyle={{
                      color: theme.palette.primary.main,
                      textDecoration: 'underline',
                    }}>
                    <StyledTypography
                      variant="overline"
                      display="inline"
                      color="text.primary"
                      capitalized={true}>
                      {nonIndexLink.label}
                    </StyledTypography>
                  </StyledNavLink>
                </Fragment>
              ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
