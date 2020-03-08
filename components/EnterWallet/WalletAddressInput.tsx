import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Input } from '../../pages/EnterWallet/styles';
import {
  QRCodeIconContainer,
  Subheading,
  SecondaryButton,
} from '../../pages/SelectCurrency/styles';
import { QRCodeIcon } from '../QRCodeIcon';
import { NavigationComponent } from 'react-navigation';

interface Props {
  walletAddress: string;
  barcodeScannerEnabled: boolean;
  navigation: NavigationComponent;
  handleChangeText: (text: string) => void;
}

export const WalletAddressInput = ({
  walletAddress,
  barcodeScannerEnabled,
  navigation,
  handleChangeText,
}: Props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Subheading size="18px">
      Enter or scan your bitcoin wallet address
    </Subheading>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 20,
      }}
    >
      <Input value={walletAddress} onChangeText={handleChangeText} />
      <TouchableOpacity
        onPress={() => navigation.navigate('WalletQRCodeScanner')}
      >
        <QRCodeIconContainer>
          <QRCodeIcon />
        </QRCodeIconContainer>
      </TouchableOpacity>
    </View>
    {barcodeScannerEnabled ? (
      <>
        <Subheading size="18px" style={{ margin: 10 }}>
          Scan your wallet address QR code now!
        </Subheading>
      </>
    ) : null}
    {walletAddress ? (
      <SecondaryButton>Connect existing wallet</SecondaryButton>
    ) : null}
  </View>
);
