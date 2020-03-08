import React, { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { API_BASE_URL } from '../../consts/apiBaseUrl';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { QRCodeIcon } from '../../components/Icons/QRCodeIcon';
import { ethers } from 'ethers';
import * as SecureStore from 'expo-secure-store';
import { secureStoreKeys } from '../../consts/secureStoreKeys';

export const SendEthereum = withBackground(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [toAddress, setToAddress] = useState();
  const [ethAmount, setEthAmount] = useState('');
  const [usdAmount, setUsdAmount] = useState('');
  const [usdToEthRate, setUsdToEthRate] = useState(150.522758301);
  const { navigate } = useNavigation();
  const address = useNavigationParam('address');

  useEffect(() => {
    // const fetchUsdToEthRate = async () => {
    //   const rate = await fetch(
    //     `${API_BASE_URL}/wallet/rates/usd-eth`
    //   ).then(res => res.json());
    //   setUsdToEthRate(rate);
    //   setIsLoading(false);
    // };
    // fetchUsdToEthRate();
    setToAddress(address);
  }, [address]);

  const convertToUsdString = (value: string) =>
    `$ ${(Number(value) * usdToEthRate).toFixed(2)}`;

  const handleEthAmountChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    // caculate usd quantity
    const usd = convertToUsdString(e.nativeEvent.text);
    setUsdAmount(usd.toString());
    setEthAmount(e.nativeEvent.text);
  };

  const handleUsdAmountChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const ethToUsdRate = 1 / usdToEthRate;
    const eth = Number(e.nativeEvent.text) * ethToUsdRate;
    setEthAmount(eth.toString());
    setUsdAmount(`$ ${e.nativeEvent.text.replace('$', '')}`);
  };

  const handleSendButtonPress = async () => {
    const privateKey = await SecureStore.getItemAsync(
      secureStoreKeys.CRYPTO_CLASH_WALLET_PRIVATE_KEY
    );
    const provider = ethers.getDefaultProvider('ropsten');

    const wallet = new ethers.Wallet(privateKey, provider);
    const tx = {
      to: toAddress,
      value: ethers.utils.parseEther(ethAmount),
    };
    const transactionStatus = await wallet.sendTransaction(tx);
    console.log(transactionStatus);
    const transactionFee = ethers.utils.formatEther(
      transactionStatus.gasPrice.toString()
    );
    navigate('TransactionComplete', {
      ethAmount,
      transactionFee,
      transactionFeeUsd: convertToUsdString(transactionFee),
      transactionId: transactionStatus.hash,
    });
  };

  return (
    <Container height="100%" alignItems="center">
      <Container flex={1} justifyContent="center" alignItems="center">
        <Text color="white" fontSize={6}>
          Send Ethereum
        </Text>
      </Container>
      <Container
        justifyContent="center"
        alignItems="center"
        width={10}
        flex={1}
      >
        <Input
          bgColor="grey4"
          label="Pay To"
          value={toAddress}
          handleChange={e => setToAddress(e.nativeEvent.text)}
        />
      </Container>
      <Container
        justifyContent="center"
        alignItems="center"
        width={10}
        flex={1}
      >
        <Container flexDirection="row" width="100%">
          <Container flex={2}>
            <Input
              bgColor="grey4"
              label="Amount"
              value={ethAmount}
              handleChange={handleEthAmountChange}
              placeholder="ETH"
              keyboardType="numeric"
            />
          </Container>
          <Container mt="39" ml={1} flex={1}>
            <Input
              keyboardType="numeric"
              bgColor="grey4"
              value={usdAmount}
              handleChange={handleUsdAmountChange}
              placeholder="USD"
            />
          </Container>
        </Container>

        <Container m={1} width="100%">
          <Button title="Send" onPress={handleSendButtonPress} />
        </Container>
      </Container>
      <Container flex={1} width="100%">
        <Footer
          leftButtonIcon={<ChevronOutlineLeft />}
          rightButtonIcon={<QRCodeIcon large />}
          handleLeftButtonPress={() => navigate('WalletHome')}
          handleRightButtonPress={() => navigate('ScanQRCode')}
          rightButtonLabel="Scan QR Code"
        />
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
