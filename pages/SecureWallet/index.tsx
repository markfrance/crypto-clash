import React, { useState, useEffect } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import * as SecureStore from 'expo-secure-store';
import { secureStoreKeys } from '../../consts/secureStoreKeys';
import { MnemonicCard } from '../../components/MnemonicCard';
import { Button } from '../../components/Button';
import { useNavigation } from 'react-navigation-hooks';

export const SecureWallet = withBackground(() => {
  const { navigate } = useNavigation();
  const [recoveryPhrase, setRecoveryPhrase] = useState();

  useEffect(() => {
    const getMnemonic = async () => {
      const mnemonic = await SecureStore.getItemAsync(
        secureStoreKeys.CRYPTO_CLASH_WALLET_MNEMONIC
      );
      setRecoveryPhrase(mnemonic.split(' '));
    };
    getMnemonic();
  }, []);

  const handleWalletSecuredPress = () => navigate('WalletHome');

  return (
    <Container height="100%" alignItems="center">
      <Container flex={1} justifyContent="center" alignItems="center">
        <Text color="white" fontSize={6}>
          This is your recovery phrase
        </Text>
      </Container>
      <Container flex={1}>
        <Container
          width={10}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          {recoveryPhrase?.slice(0, 3).map(word => (
            <MnemonicCard key={word} text={word} />
          ))}
        </Container>
        <Container
          width={10}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          {recoveryPhrase?.slice(3, 6).map(word => (
            <MnemonicCard key={word} text={word} />
          ))}
        </Container>
        <Container
          width={10}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          {recoveryPhrase?.slice(6, 9).map(word => (
            <MnemonicCard key={word} text={word} />
          ))}
        </Container>
        <Container
          width={10}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          {recoveryPhrase?.slice(9, 12).map(word => (
            <MnemonicCard key={word} text={word} />
          ))}
        </Container>
      </Container>
      <Container flex={1} width={10} justifyContent="center">
        <Button title="Wallet Secured" onPress={handleWalletSecuredPress} />
      </Container>
      <Container flex={1} alignItems="center" width={10}>
        <Text fontSize={5} color="grey1" my={2}>
          Important!
        </Text>
        <Text fontSize={4} color="grey2">
          Write down your recovery phrase. If you lose it, your wallet cannot be
          recovered!
        </Text>
      </Container>
    </Container>
  );
}, BackgroundColor.Orange);
