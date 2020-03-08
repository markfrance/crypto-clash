import React, { useEffect } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { Wallet } from 'ethers';
import * as Random from 'expo-random';

export const WalletUI = withBackground(() => {
  useEffect(() => {
    const createAccount = async () => {
      const randomBytes = await Random.getRandomBytesAsync(32);
      const wallet = Wallet.createRandom({ extraEntropy: randomBytes });
      console.log(wallet.privateKey);
    };
    createAccount();
  }, []);
  return (
    <Container>
      <Text>Wallet</Text>
    </Container>
  );
}, BackgroundColor.Black);
