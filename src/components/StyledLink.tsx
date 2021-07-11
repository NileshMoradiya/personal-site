import { Link, LinkProps } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

interface IStyledLinkLinkProps extends Omit<LinkProps, 'href'> {
  to: string;
  label: string;
  capitalized?: boolean;
  bold?: boolean;
  bottomBorder?: boolean;
  typographyProps?: Omit<TypographyProps, 'children'>;
  children?: ReactNode;
}

const StyledLink = ({
  to,
  label,
  capitalized,
  bold,
  bottomBorder = true,
  typographyProps,
  children,
  ...rest
}: IStyledLinkLinkProps) => {
  const transformedLabel = capitalized ? label?.toUpperCase() : label;
  return (
    <Link
      {...rest}
      href={to}
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}>
      {children}
      {!children && (
        <Typography
          {...typographyProps}
          style={{
            transition: 'color 0.2s ease, border-bottom-color 0.2s ease',
            borderBottom: bottomBorder
              ? 'dotted 1px rgba(160, 160, 160, 0.65)'
              : undefined,
            fontWeight: bold ? 'bold' : undefined,
          }}
          component="span">
          {transformedLabel}
        </Typography>
      )}
    </Link>
  );
};

export default StyledLink;
