import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CopyIcon = () => (
  <Svg viewBox="0 0 20 20" width={64} height={64}>
    <Path
      fill="#fff"
      d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"
    />
  </Svg>
);
