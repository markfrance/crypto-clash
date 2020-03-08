import React from 'react';
import Svg, { Rect, Stop, Ellipse, LinearGradient } from 'react-native-svg';
import { theme } from '../../theme';

export const Wheel = () => (
  <Svg width={150} height={300}>
    <Rect width={150} height={300} fill="none" />
    <LinearGradient id="gradient">
      <Stop offset="0%" stopColor={theme.colors.ccLightOrange} />
      <Stop offset="100%" stopColor={theme.colors.ccOrange} />
    </LinearGradient>
    <Ellipse cx={-30} cy={150} rx={150} ry={150} fill="url(#gradient)" />
  </Svg>
);
