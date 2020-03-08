import { ethers } from 'ethers';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { Select } from '../../components/Select';
import { Text } from '../../components/Text';
import {
  BackgroundColor,
  withBackground,
} from '../../components/withBackground';
import { secureStoreKeys } from '../../consts/secureStoreKeys';
import { tokens } from '../../consts/tokens';
import { Button } from '../../components/Button';
import { useNavigation } from 'react-navigation-hooks';

const getWalletBalance = async () => {
  const privateKey = await SecureStore.getItemAsync(
    secureStoreKeys.CRYPTO_CLASH_WALLET_PRIVATE_KEY
  );
  const provider = ethers.getDefaultProvider('ropsten');
  const wallet = new ethers.Wallet(privateKey, provider);
  const balance = await wallet.getBalance();
  return ethers.utils.formatEther(balance.toString());
};

export const WalletHome = withBackground(() => {
  const [ethBalance, setEthBalance] = useState();
  const [selectedToken, setSelectedToken] = useState('eth');
  const { navigate } = useNavigation();

  useEffect(() => {
    // TODO This should display total wallet balance in USD
    getWalletBalance().then(bal => setEthBalance(bal));
  }, []);

  return (
    <Container height="100%">
      <Container justifyContent="center" alignItems="center" flex={1}>
        {/* <Text fontSize={6} color="white">
          Total Balance
        </Text>
        <Text fontSize={7} color="ccOrange">
          {ethBalance}
        </Text> */}
        <Container width={10}>
          <Select
            value={selectedToken}
            onValueChange={val => setSelectedToken(val)}
            items={tokens}
          />
        </Container>
      </Container>
      <Container flex={2} alignItems="center" width="100%">
        <Container alignItems="center" my={3}>
          <Text fontSize={4} color="white">
            Wallet Balance
          </Text>
          <Text fontSize={5} color="ccOrange">
            {ethBalance ? `${ethBalance} ETH` : 'Fetching balance...'}
          </Text>
        </Container>
        <Container
          py={1}
          flexDirection="row"
          justifyContent="space-between"
          width={9}
        >
          <Container>
            <Button
              borderWidth={1}
              fontSize={4}
              onPress={() => navigate('SendEthereum')}
              title="Send"
              width={7}
            />
          </Container>
          <Container>
            <Button
              borderWidth={1}
              fontSize={4}
              title="Receive"
              width={7}
              onPress={() => navigate('ReceiveEthereum')}
            />
          </Container>
        </Container>
        <Container width={9} py={1}>
          <Button
            borderWidth={1}
            fontSize={4}
            onPress={() => navigate('DepositToDex')}
            title="Deposit To DEX"
          />
        </Container>
        <Container alignItems="center" my={3}>
          <Text fontSize={4} color="white">
            DEX Balance
          </Text>
          <Text fontSize={5} color="ccOrange" fontWeight={700}>
            {ethBalance ? `${ethBalance} ETH` : 'Fetching balance...'}
          </Text>
        </Container>
        <Container width={9} py={1}>
          <Button fontSize={4} 
          borderWidth={1} 
          title="Withdraw From DEX"
          onPress={() => navigate('DepositToDex')} />
        </Container>
      </Container>
      <Container flex={1}>
        <Footer
          leftButtonIcon={<MenuIcon />}
          handleLeftButtonPress={() => navigate('Menu')}
          rightButtonIcon={
            <Image source={require('../../assets/CC-Dex-Icon.png')} />
          }
        />
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
