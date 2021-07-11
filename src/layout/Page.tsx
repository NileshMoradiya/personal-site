import {
  Box,
  Card,
  CardHeader,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@material-ui/core';
import React, { ReactNode } from 'react';

import Analytics from '../components/Template/Analytics';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../components/Template/ScrollToTop';
import StyledTypography from '../components/StyledTypography';

interface IPageProps {
  title: string;
  description: string;
  header?: ReactNode;
  subHeader?: ReactNode;
  children: ReactNode;
}

const Page = ({
  title,
  description,
  header,
  subHeader,
  children,
}: IPageProps) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Nilesh Moradiya" defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Paper variant="outlined">
      <Stack sx={{ px: 6, py: 6 }} spacing={2}>
        {header}
        {!header && (
          <StyledTypography
            fontVariant="title"
            aria-label="title"
            capitalized={true}>
            {title}
          </StyledTypography>
        )}
        {subHeader}
        {!subHeader && (
          <StyledTypography
            fontVariant="subtitle"
            variant="overline"
            aria-label="subtitle"
            capitalized={true}>
            {description}
          </StyledTypography>
        )}
      </Stack>
      <Divider />
      <Box sx={{ p: 6 }}>{children}</Box>
    </Paper>
  </>
);

export default Page;
