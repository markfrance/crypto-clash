import styled from 'styled-components/native';
import {
  space,
  typography,
  color,
  ColorProps,
  SpaceProps,
  TypographyProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
} from 'styled-system';

interface TextProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    BorderProps {}

export const Text = styled.Text<TextProps>`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${layout}
  font-family: Medel;
`;
