import * as React from 'react';
import { Svg, Circle, G, Path, Defs, ClipPath, LinearGradient, Stop } from 'react-native-svg';

export const EosIcon = () => (
  <Svg viewBox="0 0 528 528" width={64} height={64}>
    <G transform="translate(-99.244 -146.244)">
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={-729.37}
        y1={196.55}
        x2={-712.87}
        y2={196.55}
        gradientTransform="rotate(-45 -14775.033 -20201.407) scale(25.8535)"
      >
        <Stop offset={"0"} stopColor="#cf8724" />
        <Stop offset={"1"} stopColor="#fdce58" />
      </LinearGradient>
      <Path
        d="M366 631.5c-120.3 0-218.5-98.3-218.5-218.5 0-120.3 98.3-218.5 218.5-218.5 120.3 0 218.5 98.3 218.5 218.5 0 120.3-98.2 218.5-218.5 218.5z"
        fill="url(#prefix__a)"
      />
    </G>
    <Path stroke="#fcfcfc" d="M264 528C118.8 528 0 409.2 0 264S118.8 0 264 0s264 118.8 264 264-118.8 264-264 264zm0-469.3C151.1 58.7 58.7 151.1 58.7 264S151.1 469.3 264 469.3 469.3 376.9 469.3 264 376.9 58.7 264 58.7z" />
    <Path d="M257.886 335.511h114.4v57.2h-67.5v48.4h-58.7v-46.9h-70.4c0-19.1-2.9-38.1 1.5-55.7 1.5-8.8 11.7-17.6 19.1-26.4 22-26.4 44-52.8 67.5-79.2 8.8-10.3 17.6-19.1 27.9-30.8h-110v-57.2h64.5v-48.4h57.2v46.9h70.4c0 19.1 2.9 38.1-1.5 55.7-1.5 8.8-11.7 17.6-19.1 26.4-22 26.4-44 52.8-67.5 79.2-8.8 10.3-17.6 20.5-27.8 30.8z" />
  </Svg>
);