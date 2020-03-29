import * as React from 'react';
import {
  Svg,
  Rect,
  RadialGradient,
  Stop,
  Ellipse,
  LinearGradient,
} from 'react-native-svg';

interface Props {
  colorFrom?: string;
  colorTo?: string;
}

export const Wheel = ({colorFrom, colorTo}:Props) => (
  <Svg width={150} height={300}>
    <Rect width={150} height={300} fill="none" />
    <LinearGradient id="gradient">
      <Stop offset="0%" stopColor={colorFrom ?? "#f5b56b"} />
      <Stop offset="100%" stopColor={colorTo ?? "#f8cfa0" }/>
    </LinearGradient>
    <Ellipse cx={-30} cy={150} rx={150} ry={150} fill="url(#gradient)" />
  </Svg>
);
