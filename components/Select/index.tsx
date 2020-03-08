import React from 'react';
import { Picker, PickerItem } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
  border,
  size,
  layout,
  color,
  space,
  typography,
} from 'styled-system';

interface BasePickerProps
  extends SizeProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    TypographyProps {}

const BasePicker = styled.Picker<BasePickerProps>`
  ${border}
  ${size}
  ${layout}
  ${color}
  ${space}
  ${typography}
  font-family: Medel;
  color: #fff;
`;

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onValueChange: (itemValue: any, itemPosition: number) => void;
  items: SelectItem[];
}

export const Select = ({ value, onValueChange, items }: SelectProps) => {
  return (
    <Picker onValueChange={onValueChange} selectedValue={value}>
      {items.map(item => (
        <PickerItem
          key={item.value}
          value={item.value}
          label={item.label}
          color="white"
        />
      ))}
    </Picker>
  );
};
