import { NavLink, NavLinkProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

interface IStyledLinkLinkProps extends NavLinkProps {
  to: string;
  label: string;
  capitalized?: boolean;
  bold?: boolean;
  bottomBorder?: boolean;
  typographyProps?: Omit<TypographyProps, 'children'>;
  children?: ReactNode;
}

const StyledNavLink = ({
  to,
  label,
  capitalized,
  bold,
  bottomBorder = true,
  typographyProps,
  children,
  ...rest
}: IStyledLinkLinkProps) => {
  const transformedLabel = capitalized
    ? label?.toString()?.toUpperCase()
    : label;
  return (
    <NavLink
      {...rest}
      to={to}
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}>
      {children}
      {!children && (
        <Typography
          {...typographyProps}
          component="span"
          style={{
            transition: 'color 0.2s ease, border-bottom-color 0.2s ease',
            borderBottom: bottomBorder
              ? 'dotted 1px rgba(160, 160, 160, 0.65)'
              : undefined,
            fontWeight: bold ? 'bold' : undefined,
          }}>
          {transformedLabel}
        </Typography>
      )}
    </NavLink>
  );
};

export default StyledNavLink;
