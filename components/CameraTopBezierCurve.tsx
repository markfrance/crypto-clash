import * as React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import { Dimensions, View } from 'react-native';

export const CameraTopBezierCurve = () => (
  <View
    style={{
      position: 'absolute',
      top: -90,
      left: 0,
    }}
  >
    <Svg
      height={319.92}
      width={Dimensions.get('window').width}
      viewBox="0 0 824 319.92"
    >
      <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#f7931a" />
        <Stop offset="100%" stopColor="#fcbb24" />
      </LinearGradient>
      <Path
        fill="url(#gradient)"
        d="M9.66 247.17c43.07 12.29 86 25.23 129.2 36.86 30.4 8.17 61.16 15.17 92 21.59 21.54 4.49 43.4 7.75 65.25 10.36a546 546 0 0 0 57 3.92c26.83.36 50.57-8 70.65-26.92 16.1-15.19 29.17-32.62 41.72-50.54 17.91-25.56 34.87-51.8 53.31-77 13.39-18.28 27-36.49 44.42-51.53 25.67-22.08 54.65-37.19 87.67-44.91a196.31 196.31 0 0 1 58.39-4.71c35 2.44 67.68 12.82 97 32.56 6.16 4.15 11.83 9 17.73 13.58V0H0v245.46a90 90 0 0 1 9.66 1.71z"
      />
    </Svg>
  </View>
);
