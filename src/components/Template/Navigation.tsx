import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Fab,
  Hidden,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  useTheme,
} from '@material-ui/core';
import React, { Fragment } from 'react';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Style } from '@material-ui/icons';
import StyledNavLink from '../StyledNavLink';
import StyledTypography from '../StyledTypography';
import routes from '../../data/routes';

const { PUBLIC_URL } = process.env;
const indexLinks = routes.filter((link) => link.index);
const nonIndexLinks = routes.filter((link) => !link.index);

const DesktopNavigation = () => {
  const theme = useTheme();
  return (
    <AppBar
      variant="outlined"
      position="sticky"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Toolbar variant="dense">
        <Stack direction="row" spacing={2} alignItems="center">
          {indexLinks.map((indexLink) => (
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
          {nonIndexLinks.map((nonIndexLink) => (
            <Fragment key={nonIndexLink.label}>
              <Divider orientation="vertical" />
              <StyledNavLink
                exact
                to={nonIndexLink.path}
                label={nonIndexLink.label}
                activeStyle={{
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
  );
};

const MobileMenu = () => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null,
  );
  const isMenuOpen = Boolean(anchorElement);

  const openMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const onNavigationClick = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Fab
        aria-expanded={isMenuOpen ? 'true' : undefined}
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        size="medium"
        disableRipple
        onClick={openMenuClick}>
        <MenuRoundedIcon />
      </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={isMenuOpen}
        onClose={onNavigationClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {indexLinks.map((indexLink) => (
          <MenuItem onClick={onNavigationClick} key={indexLink.label}>
            <StyledNavLink
              exact
              to={indexLink.path}
              label={indexLink.label}
              activeStyle={{
                textDecoration: 'underline',
              }}>
              <StyledTypography
                variant="button"
                display="inline"
                color="text.primary"
                bold={true}
                capitalized={true}>
                {indexLink.label}
              </StyledTypography>
            </StyledNavLink>
          </MenuItem>
        ))}
        {nonIndexLinks.map((nonIndexLink) => (
          <MenuItem onClick={onNavigationClick} key={nonIndexLink.label}>
            <Divider orientation="horizontal" />
            <StyledNavLink
              exact
              to={nonIndexLink.path}
              label={nonIndexLink.label}
              activeStyle={{
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
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const MobileNavigation = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar variant="outlined" position="sticky">
          <Toolbar variant="dense">
            <Box justifyContent="center" sx={{ flexGrow: 1 }}>
              <StyledNavLink to="/" label="Home">
                <StyledTypography
                  variant="button"
                  bold={true}
                  capitalized={true}>
                  Nilesh Moradiya
                </StyledTypography>
              </StyledNavLink>
            </Box>
            <Box flexDirection="row-reverse" sx={{ py: 1 }}>
              <StyledNavLink to="/" label="Home">
                <Avatar
                  src={`${PUBLIC_URL}/images/me.jpg`}
                  sx={{
                    width: 50,
                    height: 50,
                  }}>
                  N M
                </Avatar>
              </StyledNavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <MobileMenu />
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <Hidden mdDown>
        <DesktopNavigation />
      </Hidden>
      <Hidden mdUp>
        <MobileNavigation />
      </Hidden>
    </>
  );
};

export default Navigation;
