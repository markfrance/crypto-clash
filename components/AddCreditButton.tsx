import * as React from 'react';
//@ts-ignore
import styled from 'styled-components/native';
import { QRCodeIconContainer } from '../pages/SelectCurrency/styles';
import { QRCodeIcon } from './QRCodeIcon';
import { SCProps } from '../theme/theme';
import { View } from 'react-native';

const Label = styled.Text`
  font-family: Medel;
  color: #f8f8f8;
  margin-top: 10px;
  text-align: center;
`;

const AddIcon = styled.Text`
  font-family: Medel;
  font-size: 36px;
  margin-top: 4px;
  color: ${(props: SCProps) => props.theme.white};
`;

export const AddCreditButton = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <QRCodeIconContainer large={true}>
      {/* <Icon name="add" color="#f8f8f8" size={32} /> */}
      <AddIcon>+</AddIcon>
      <QRCodeIcon large={true} />
    </QRCodeIconContainer>
    <Label>ADD CREDIT</Label>
  </View>
);
