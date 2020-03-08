import React from 'react';
import styled from 'styled-components/native';
import {
  typography,
  color,
  border,
  space,
  layout,
  ColorProps,
  TypographyProps,
  BorderProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';
import { Text } from '../Text';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Container } from '../Container';

interface BaseButtonProps
  extends ColorProps,
    TypographyProps,
    BorderProps,
    SpaceProps,
    LayoutProps {}

export const BaseButton = styled.Button<BaseButtonProps>`
  font-family: Medel;
  ${color}
  ${typography}
  ${border}
  ${space}
  ${layout}
`;

interface ButtonProps {
  title: string;
  onPress: (e: GestureResponderEvent) => void;
  variant?: 'solid' | 'outline' | 'text';
  fontSize?: number;
  borderWidth?: number;x
  width?: number;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  fontSize,
  borderWidth,
  width,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '100%' }}>
      <Container
        borderRadius={5}
        backgroundColor={variant === 'solid' ? 'white' : 'transparent'}
        width={width}
      >
        <Text
          color={variant === 'solid' ? 'ccOrange' : 'white'}
          borderWidth={borderWidth || 2}
          borderColor={variant === 'text' ? 'transparent' : 'white'}
          padding={1}
          textAlign="center"
          borderRadius={20}
          fontSize={fontSize || 6}
          fontWeight="bold"
        >
          {title}
        </Text>
      </Container>
    </TouchableOpacity>
  );
};

// export const PrimaryButton: React.FC<ButtonProps> = ({
//   title,
//   width,
//   onPress,
// }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <Container borderRadius={4}>
//         <Text
//           color="white"
//           borderWidth={2}
//           borderColor="white"
//           padding={2}
//           width={width}
//           margin={1}
//           textAlign="center"
//           borderRadius={5}
//           fontSize={4}
//           fontWeight={700}
//         >
//           {title}
//         </Text>
//       </Container>
//     </TouchableOpacity>
//   );
// };
