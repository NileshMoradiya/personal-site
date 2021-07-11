import { Avatar, Divider, Stack, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import React from 'react';
import StyledLink from '../StyledLink';
import StyledNavLink from '../StyledNavLink';
import StyledTypography from '../StyledTypography';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LearnMoreLink = ({ to }: { to: string }) => {
  return (
    <>
      <StyledNavLink
        exact
        to={to}
        label="Learn More"
        style={{
          textDecoration: 'none',
        }}>
        <StyledTypography
          variant="overline"
          display="inline"
          color="text.primary"
          capitalized={true}>
          Learn More
        </StyledTypography>
      </StyledNavLink>
    </>
  );
};

const SideBar = () => {
  const resumePageRoute = useRouteMatch(`/resume`);
  return (
    <>
      <Stack spacing={6}>
        <Stack spacing={3}>
          <Link to="/">
            <Avatar
              src={`${PUBLIC_URL}/images/me.jpg`}
              sx={{
                width: 160,
                height: 160,
              }}>
              N M
            </Avatar>
          </Link>
          <StyledTypography fontVariant="title" capitalized={true}>
            Nilesh Moradiya
          </StyledTypography>
          <StyledLink
            to="mailto:nileshmoradiya_coder@outlook.com"
            bold={true}
            capitalized={true}
            label="nileshmoradiya_coder@outlook.com"
            typographyProps={{
              variant: 'overline',
              color: 'text.disabled',
            }}
          />
        </Stack>
        <Divider />
        <Stack spacing={3}>
          <StyledTypography variant="button" bold={true} capitalized={true}>
            About
          </StyledTypography>
          <Typography variant="body2" paragraph>
            Hi, I&apos;m Nilesh. I like building things. I am a{' '}
            <StyledLink
              to="https://svitvasad.ac.in/"
              label="SVIT, Vasad - GTU"
              target="_blank"
            />{' '}
            graduate, and currently working as a Technical Architect/Software
            Engineer at{' '}
            <StyledLink
              to="https://imriel.com/"
              label="IMRIEL"
              target="_blank"
            />
            . Before IMRIEL I was at{' '}
            <StyledLink
              to="https://www.techgrains.com/"
              label="TechGrains"
              target="_blank"
            />
            , and{' '}
            <StyledLink
              to="https://promactinfo.com/"
              label="PROMACT"
              target="_blank"
            />
            .
          </Typography>
          <LearnMoreLink to={resumePageRoute?.isExact ? '/about' : '/resume'} />
        </Stack>
        <Divider />
        <Stack direction="row">
          <ContactIcons />
        </Stack>
        <p className="copyright">
          &copy; Nilesh Moradiya <Link to="/">nileshmoradiya.in</Link>.
        </p>
      </Stack>
    </>
  );
};

export default SideBar;
