import React, { useEffect, useState } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Image, Animated } from 'react-native';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { theme } from '../../theme';
import { Dimensions, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { getCurrencySymbol } from '../../consts/getCurrencySymbol';
import { currencyIcons } from '../../consts/currencyIcons';
import { CurrencySpinner } from '../../components/CurrencySpinner/CurrencySpinner';

export const DexHome = withBackground(() => {
  const transactionFee = useNavigationParam('transactionFee');
  const ethAmount = useNavigationParam('ethAmount');
  const transactionFeeUsd = useNavigationParam('transactionFeeUsd');
  const transactionId = useNavigationParam('transactionId');

    const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [spinnerScrollAmount, setSpinnerScrollAmount] = useState(new Animated.Value(0));

    const handleWheelScroll = (newSelectedIndex: number) => {
   setSelectedCurrencyIndex(newSelectedIndex);
  };


   const { navigate } = useNavigation();

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
          <TouchableOpacity onPress={() => navigate('WalletHome')}>
           <ChevronOutlineLeft />
        </TouchableOpacity>
        </Container>
        <Container position="absolute" top={-100} right={15} >
         <Image source={require('../../assets/CC-Dex-Icon.png')} />
       </Container>
        <Container justifyContent="center" alignItems="center">
          <Text color="white" fontSize={4}>
            Line up the assets you wish to trade
          </Text>
        </Container>
        
        <Container justifyContent="center" alignItems="center">
          <Text color="white" fontSize={6}>
           ETH -> CLASH
          </Text>
          <Text color="white" fontSize={6}>
           0.023 = 1
          </Text>
        </Container>
               <CurrencySpinner
            selectedIndex={selectedCurrencyIndex}
            scrollAmount={spinnerScrollAmount}
            currencyIcons={currencyIcons}
            handleScroll={handleWheelScroll}
          />
          <Container position="absolute" top={185} right={7}>
           <Image source={require('../../assets/ClashToken.png')} />
         </Container>
        <Container position="absolute" top={300} width="100%" justifyContent="center" alignItems="center">
          <Container width={7}>
            <Button title="Trade" onPress={() => navigate("BasicDexTrade")}/>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
