import React, { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import * as SecureStore from 'expo-secure-store';
import { secureStoreKeys } from '../../consts/secureStoreKeys';
import { Wallet } from 'ethers';
import QRCode from 'react-native-qrcode-svg';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigation } from 'react-navigation-hooks';
import { CopyIcon } from '../../components/Icons/CopyIcon';
import { Clipboard } from 'react-native';

export const ReceiveEthereum = withBackground(() => {
  const [walletAddress, setWalletAddress] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    const retrieveWalletAddress = async () => {
      const privateKey = await SecureStore.getItemAsync(
        secureStoreKeys.CRYPTO_CLASH_WALLET_PRIVATE_KEY
      );
      const wallet = new Wallet(privateKey);
      setWalletAddress(wallet.address);
    };
    retrieveWalletAddress();
  });

  return (
    <Container height="100%" alignItems="center">
      <Container height="100%" width="100%">
        <Container justifyContent="center" alignItems="center" flex={1}>
          <Text color="white" fontSize={6} my={2}>
            Your Address
          </Text>
          <Text color="ccOrange" fontSize={6} maxWidth={10} textAlign="center">
            {walletAddress || 'Loading...'}
          </Text>
        </Container>
        <Container justifyContent="center" alignItems="center" flex={1}>
          <QRCode value={walletAddress} size={200} />
        </Container>
        <Container flex={1}>
          <Footer
            rightButtonLabel="Copy Address"
            leftButtonIcon={<ChevronOutlineLeft />}
            handleLeftButtonPress={() => navigate('WalletHome')}
            rightButtonIcon={<CopyIcon />}
            handleRightButtonPress={() => Clipboard.setString(walletAddress)}
          />
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
