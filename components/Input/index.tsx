import React from 'react';
import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  TypographyProps,
  typography,
} from 'styled-system';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  KeyboardTypeOptions,
} from 'react-native';
import { Text } from '../Text';
import { Container } from '../Container';

interface BaseInputProps
  extends SizeProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    TypographyProps {}

const BaseInput = styled.TextInput<BaseInputProps>`
  ${border}
  ${size}
  ${layout}
  ${color}
  ${space}
  ${typography}
  font-family: Medel;
`;

interface InputProps {
  value: string;
  handleChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  label?: string;
  secureTextEntry?: boolean;
  bgColor?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

export const Input: React.FC<InputProps> = ({
  value,
  handleChange,
  label,
  secureTextEntry,
  bgColor,
  placeholder,
  keyboardType,
}) => (
  <Container width="100%">
    {label && (
      <Text color="white" fontSize={5} my={1}>
        {label}
      </Text>
    )}
    <BaseInput
      placeholder={placeholder}
      height={4}
      backgroundColor={bgColor || 'ccLightOrange'}
      padding={1}
      borderRadius={2}
      color="grey9"
      fontSize={2}
      value={value}
      onChange={handleChange}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </Container>
);
