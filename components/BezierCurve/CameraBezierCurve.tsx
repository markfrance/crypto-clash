import * as React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import { View, Dimensions } from 'react-native';
import { bezierCommand } from './bezierCommand';
import { svgPath } from './svgPath';

export const CameraBezierCurve = () => {
  const width = Dimensions.get('window').width;
  const points = [
    [0, 175],
    [0, 125],
    [45, 100],
    [140, 150],
    [275, 25],
    [width, 50],
    [width, 175],
  ];

  const path = (
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={svgPath(points, bezierCommand)}
      fill="url(#gradient)"
    />
  );
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        opacity: 0.5,
      }}
    >
      <Svg width={width} height={175}>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#f8cfa0" />
          <Stop offset="100%" stopColor="#f5b56b" />
        </LinearGradient>
        {path}
      </Svg>
    </View>
  );
};
