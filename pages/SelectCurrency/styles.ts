// @ts-ignore
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { SCProps } from '../../theme/theme';

export const Header = styled(Text)`
  font-family: 'Medel';
  color: ${(props: SCProps) => props.theme.white};
  font-size: 32px;
  text-align: center;
`;

interface SubheadingProps {
  size: string;
}

export const Subheading = styled(Text)<{ size?: string }>`
  font-family: 'Medel';
  color: ${(props: SCProps & SubheadingProps) => props.theme.grey1};
  font-size: ${(props: SCProps & SubheadingProps) =>
    props.size ? props.size : '18px'};
  text-align: center;
  margin: 2px;
`;

export const Body = styled.View`
  align-items: center;
  height: 100%;
`;

export const PrimaryButton = styled.Text`
  font-family: 'Medel';
  color: red;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const SecondaryButton = styled.Text`
  font-family: 'Medel';
  color: ${(props: SCProps) => props.theme.grey1};
  border: 1px solid ${(props: SCProps) => props.theme.grey1};
  padding: 10px 20px;
  border-radius: 20;
  shadow-color: #000;
  shadow-offset: 2px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6;
  elevation: 4;
`;

export const ButtonWrapper = styled.View`
  border-radius: 30;
  background-color: grey;
  padding: 12px;
  margin: 12px 0px;
  shadow-color: #000;
  shadow-offset: 2px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6;
  elevation: 4;
`;

export const SecondaryButtonWrapper = styled.View`
  border-radius: 30;
  padding: 12px;
  margin: 12px 0px;
  shadow-color: #000;
  shadow-offset: 2px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6;
  elevation: 4;
`;

interface QRCodeIconContainerProps {
  large: boolean;
}

export const QRCodeIconContainer = styled.View`
  height: ${(props: QRCodeIconContainerProps) =>
    props.large ? '64px' : '50px'};
  width: ${(props: QRCodeIconContainerProps) =>
    props.large ? '64px' : '50px'};
  border-radius: 10;
  align-items: center;
  justify-content: center;
  margin: 3px;
`;
