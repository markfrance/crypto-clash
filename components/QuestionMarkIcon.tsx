import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const QuestionMarkIcon = () => (
  <Svg width={16} height={16}>
    <Path
      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.8 13.6H7.2V12h1.6v1.6zm1.68-6.16l-.72.72c-.64.56-.96 1.04-.96 2.24H7.2V10c0-.88.32-1.68.96-2.24l.96-1.04c.32-.24.48-.64.48-1.12C9.6 4.72 8.88 4 8 4c-.88 0-1.6.72-1.6 1.6H4.8c0-1.76 1.44-3.2 3.2-3.2 1.76 0 3.2 1.44 3.2 3.2 0 .72-.32 1.36-.72 1.84z"
      fill="#FCFCFC"
    />
  </Svg>
);
