import React, { useState } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import { Image } from 'react-native';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { Input } from '../../components/Input';
import { GradientCard } from '../../components/GradientCard';
import { Button } from '../../components/Button';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';

export const DepositToDex = withBackground(() => {
  const [ethAmount, setEthAmount] = useState();
  const [usdAmount, setUsdAmount] = useState();

  const handleEthAmountChange = amount => {};
  const handleUsdAmountChange = amount => {};

  const { navigate } = useNavigation();

  const handlePressMove = () => {
    navigate('DexTransactionComplete');
  }

  return (
    <Container height="100%">
      <Container flex={1} justifyContent="center" alignItems="center">
        <Container p={2}>
          <Text color="white" fontSize={5}>
            Move Ethereum to DEX
          </Text>
        </Container>
        <Container p={1}>
          <Text color="white" fontSize={4}>
            Balance
          </Text>
        </Container>
        <Text color="ccOrange" fontSize={6}>
          0.2 ETH
        </Text>
      </Container>
      <Container flex={1} alignItems="center">
        <Container flexDirection="row" width={10}>
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
        <Container>
          <Container
            width={10}
            my={2}
            flexDirection="row"
            justifyContent="space-between"
          >
            <GradientCard text="5%" />
            <GradientCard text="10%" />
            <GradientCard text="25%" />
          </Container>
          <Container
            width={10}
            my={2}
            flexDirection="row"
            justifyContent="space-between"
          >
            <GradientCard text="50%" />
            <GradientCard text="75%" />
            <GradientCard text="100%" />
          </Container>
        </Container>
        <Container width={10}>
          <Button title="Move To DEX" onPress={handlePressMove} />
        </Container>
      </Container>
      <Container flex={1}>
        <Footer
          leftButtonIcon={<ChevronOutlineLeft />}
           handleLeftButtonPress={() => navigate('WalletHome')}
          rightButtonIcon={
            <Image source={require('../../assets/CC-Dex-Icon.png')} />
          }
        />
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
