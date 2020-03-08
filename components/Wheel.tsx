import * as React from 'react';
import {
  Svg,
  Rect,
  RadialGradient,
  Stop,
  Ellipse,
  LinearGradient,
} from 'react-native-svg';

export const Wheel = () => (
  <Svg width={150} height={300}>
    <Rect width={150} height={300} fill="none" />
    <LinearGradient id="gradient">
      <Stop offset="0%" stopColor="#f5b56b" />
      <Stop offset="100%" stopColor="#f8cfa0" />
    </LinearGradient>
    <Ellipse cx={-30} cy={150} rx={150} ry={150} fill="url(#gradient)" />
  </Svg>
);
