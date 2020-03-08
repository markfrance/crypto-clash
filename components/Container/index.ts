import styled from 'styled-components/native';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  color,
  ColorProps,
} from 'styled-system';

type ContainerProps = LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  ColorProps;

export const Container = styled.View<ContainerProps>`
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${space}
  ${color}
`;
