import React, { Fragment } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

import { SxProps } from '@material-ui/system';

type FontVariant = 'normal' | 'title' | 'subtitle';

const fontVariantStyles: Record<FontVariant, SxProps> = {
  normal: {},
  title: {
    fontWeight: 900,
    fontSize: '1.5em',
    fontFamily: '"Raleway", Helvetica, sans-serif',
    letterSpacing: '0.25em',
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '0.7em',
    fontFamily: '"Raleway", Helvetica, sans-serif',
    letterSpacing: '0.25em',
  },
};

export interface IStyledTypographyProps extends TypographyProps {
  bold?: boolean;
  capitalized?: boolean;
  fontVariant?: FontVariant;
}

const StyledTypography = ({
  bold = false,
  capitalized = false,
  fontVariant = 'normal',
  children,
  ...rest
}: IStyledTypographyProps & TypographyProps) => {
  const fontVariantStyle = fontVariantStyles[fontVariant];
  const capitalizedChildren =
    capitalized && typeof children === 'string'
      ? children?.toString()?.toUpperCase()
      : children;
  return (
    <Typography
      {...rest}
      fontWeight={bold ? 'bold' : undefined}
      sx={fontVariantStyle}>
      {capitalizedChildren}
    </Typography>
  );
};

export default StyledTypography;
