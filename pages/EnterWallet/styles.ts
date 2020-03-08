// @ts-ignore
import styled from 'styled-components/native';
import { SCProps } from '../../theme/theme';

export const Input = styled.TextInput`
  flex: 1;
  color: ${(props: SCProps) => props.theme.grey9};
  background-color: ${(props: SCProps) => props.theme.lightOrange};
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  width: 80%;
  border-radius: 10;
  padding: 10px;
  margin: 3px;
`;

export const IconContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4;
  elevation: 4;
`;
