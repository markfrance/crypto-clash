import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { SCProps } from '../theme/theme';

const Container = styled.View`
  position: absolute;
  top: 70;
  left: 40;
`;

const Label = styled.Text`
  font-size: 24px;
  font-family: Medel;
  color: ${(props: SCProps) => props.theme.white};
`;

export const ScannerLabel = () => (
  <Container>
    <Label>Scan Credit</Label>
  </Container>
);
