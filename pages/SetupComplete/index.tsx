import React, { useState, useEffect } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Wallet } from 'ethers';
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';
import { secureStoreKeys } from '../../consts/secureStoreKeys';
import { ActivityIndicator } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from 'react-navigation-hooks';

export const SetupComplete = withBackground(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();

  useEffect(() => {
    const createWallet = async () => {
      const randomBytes = await Random.getRandomBytesAsync(32);
      const wallet = Wallet.createRandom({ extraEntropy: randomBytes });
      await SecureStore.setItemAsync(
        secureStoreKeys.CRYPTO_CLASH_WALLET_PRIVATE_KEY,
        wallet.privateKey
      );
      await SecureStore.setItemAsync(
        secureStoreKeys.CRYPTO_CLASH_WALLET_MNEMONIC,
        wallet.mnemonic
      );
    };
    createWallet().then(() => setIsLoading(false));
  }, []);

  const handleStartPlayingPress = () => console.log('start playing pressed');

  const handleSecureWalletPress = () => navigate('SecureWallet');

  return (
    <Container height="100%" alignItems="center">
      {isLoading ? (
        <Container height="100%" justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5} margin={4}>
            Setting up wallet...
          </Text>
          <ActivityIndicator size="large" color="#fff" animating={true} />
        </Container>
      ) : (
        <Container width={10} height="100%">
          <Container flex={1} />
          <Container flex={1} alignItems="center">
            <Text color="white" fontSize={5}>
              Setup Complete
            </Text>
          </Container>
          <Container flex={1}>
            <Container my={1}>
              <Button title="Start Playing" onPress={handleStartPlayingPress} />
            </Container>
            <Container my={1}>
              <Button
                title="Secure Wallet"
                variant="text"
                onPress={handleSecureWalletPress}
              />
            </Container>
          </Container>
          <Container flex={1} alignItems="center">
            <Text fontSize={5} color="grey1" my={2}>
              Important!
            </Text>
            <Text fontSize={4} color="grey2">
              A cryptocurrency wallet has been created for you. It is advised
              that you secure your wallet now.
            </Text>
          </Container>
        </Container>
      )}
    </Container>
  );
}, BackgroundColor.Orange);
