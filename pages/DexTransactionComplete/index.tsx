import React from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Image } from 'react-native';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { theme } from '../../theme';
import { Dimensions, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';

export const DexTransactionComplete = withBackground(() => {
  const transactionFee = useNavigationParam('transactionFee');
  const ethAmount = useNavigationParam('ethAmount');
  const transactionFeeUsd = useNavigationParam('transactionFeeUsd');
  const transactionId = useNavigationParam('transactionId');

   const { navigate } = useNavigation();

   const { goBack } = useNavigation();

  return (
    <Container position="absolute" bottom={-64}>
      <Svg
          width={Dimensions.get('window').width}
          height={858}
          viewBox="0 0 825 858"
        >
          <Path
            d="M0 181.615c3.252.4 6.48.974 9.67 1.72 43.07 12.29 86 25.23 129.2 36.86 30.4 8.17 61.16 15.17 92 21.59 21.54 4.49 43.4 7.75 65.25 10.36a546.99 546.99 0 0 0 57 3.92c26.83.36 50.57-8 70.64-26.92 16.1-15.19 29.17-32.62 41.72-50.54 17.91-25.56 34.87-51.8 53.31-77 13.39-18.28 27-36.49 44.42-51.53 25.67-22.08 54.66-37.19 87.67-44.89a195.85 195.85 0 0 1 58.39-4.71c35 2.44 67.68 12.82 97 32.56 6.17 4.15 11.84 9 17.74 13.58v262H0v-127z"
            fill={theme.colors.ccOrange}
          />
          <Path d="M0 308h824v1200H0V308z" fill={theme.colors.ccOrange} />
        </Svg>
        
      <Container position="absolute" bottom={-200} height="80%" width="100%">

        <Container position="absolute" top={-150} left={60}>
          <Text color="white" fontSize={6}>Balance</Text>
          <Text color={theme.colors.ccOrange} fontSize={6}>0.2 ETH</Text>
        </Container>
        <Container position="absolute" top={-40} left={15}>
          <TouchableOpacity onPress={() => goBack()}>
           <ChevronOutlineLeft />
        </TouchableOpacity>
        </Container>
        <Container position="absolute" top={-100} right={15} >
         <Image source={require('../../assets/CC-Dex-Icon.png')} />
       </Container>
        <Container justifyContent="center" alignItems="center">
          <Text color="white" fontSize={6}>
            Ethereum Moved To/From Dex
          </Text>
        </Container>
        <Container margin={3} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Status
          </Text>
          <Text color="black" fontSize={4}>
            Waiting for transaction confirmation
          </Text>
        </Container>
        <Container margin={3}  justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Amount Sent
          </Text>
          <Text color="black" fontSize={4}>
            {`${ethAmount} ETH`}
          </Text>
        </Container>
        <Container margin={3} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Blockchain Transaction Fee
          </Text>
          <Text color="black" fontSize={4}>
            {`${transactionFee} ETH - ${transactionFeeUsd} USD`}
          </Text>
        </Container>
        <Container margin={3} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Transaction ID
          </Text>
          <Text color="black" fontSize={4}>
            {transactionId}
          </Text>
        </Container>
        <Container  width="100%" justifyContent="center" alignItems="center">
          <Button title="View on Etherscan" />
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
