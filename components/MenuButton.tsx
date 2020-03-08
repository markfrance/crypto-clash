import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
`;

export const MenuButton = () => (
  <Container>
    <Icon name="menu" color="#f8f8f8" size={36} />
  </Container>
);
