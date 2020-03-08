import * as React from 'react';
import { Dimensions, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../theme';
import { Container } from '../Container';
import { Text } from '../Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  leftButtonIcon?: JSX.Element;
  handleLeftButtonPress?: (e: GestureResponderEvent) => void;
  rightButtonIcon?: JSX.Element;
  handleRightButtonPress?: (e: GestureResponderEvent) => void;
  rightButtonLabel?: string;
}

export const Footer = ({
  leftButtonIcon,
  rightButtonIcon,
  handleLeftButtonPress,
  handleRightButtonPress,
  rightButtonLabel,
}: Props) => {
  return (
    <Container pointerEvents="auto" position="absolute" bottom={-64}>
    <Container pointerEvents="none">
      <Svg
        pointerEvents="none"
        width={Dimensions.get('window').width}
        height={308}
        viewBox="0 0 825 308"
      >
        <Path
          d="M0 181.615c3.252.4 6.48.974 9.67 1.72 43.07 12.29 86 25.23 129.2 36.86 30.4 8.17 61.16 15.17 92 21.59 21.54 4.49 43.4 7.75 65.25 10.36a546.99 546.99 0 0 0 57 3.92c26.83.36 50.57-8 70.64-26.92 16.1-15.19 29.17-32.62 41.72-50.54 17.91-25.56 34.87-51.8 53.31-77 13.39-18.28 27-36.49 44.42-51.53 25.67-22.08 54.66-37.19 87.67-44.89a195.85 195.85 0 0 1 58.39-4.71c35 2.44 67.68 12.82 97 32.56 6.17 4.15 11.84 9 17.74 13.58v262H0v-127z"
          fill={theme.colors.ccOrange}
        />
        <Path d="M0 308h824v1200H0V308z" fill={theme.colors.ccOrange} />
      </Svg>
      </Container>

      <Container position="absolute" left={16} top={192}>
        <TouchableOpacity onPress={handleLeftButtonPress}>
          {leftButtonIcon}
        </TouchableOpacity>
      </Container>
      <Container
        position="absolute"
        right={0}
        top={128}
        justifyContent="center"
        alignItems="center"
      >
        <TouchableOpacity onPress={handleRightButtonPress}>
          {rightButtonIcon}
        </TouchableOpacity>
        <Container m={2}>
          <Text color="white">{rightButtonLabel || ''}</Text>
        </Container>

      </Container>
    </Container>
  );
};
