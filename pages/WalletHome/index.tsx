import { ethers } from 'ethers';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
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
import { useNavigation, useFocusEffect } from 'react-navigation-hooks';
import { CurrencySpinner } from '../../components/CurrencySpinner/CurrencySpinner';
import { getCurrencySymbol } from '../../consts/getCurrencySymbol';
import { currencyIcons } from '../../consts/currencyIcons';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';

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
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [spinnerScrollAmount, setSpinnerScrollAmount] = useState(new Animated.Value(0));
  const { navigate } = useNavigation();

  const [scrollAmount, setScrollAmount] = useState(new Animated.Value(0));
  const [spinnerPosition, setSpinnerPosition] = useState(new Animated.Value(-200));
  const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));

 const enterPage = () => {
     Animated.timing(containerOpacity, {
      toValue: 1,
      duration: 400,
    }).start();
     Animated.timing(spinnerPosition, {
      toValue: 0,
      duration: 400,
    }).start();
      Animated.timing(scrollAmount, {
      toValue: 0,
      duration: 0,
    }).start();

  }

  useEffect(() => {
    // TODO This should display total wallet balance in USD
   
    getWalletBalance().then(bal => setEthBalance(bal));
  }, []);

  useFocusEffect(() => {
     enterPage();

   });


  const handleWheelScroll = (newSelectedIndex: number) => {
   setSelectedCurrencyIndex(newSelectedIndex);
  };

  const leavePage  = (page) => {
    Animated.timing(scrollAmount, {
        toValue: -Dimensions.get('window').height + 275,
        duration: 800,
      }).start(() => {
       navigate(page)
      });
    Animated.timing(containerOpacity, {
      toValue: 0,
      duration: 400,
    }).start();
     Animated.timing(spinnerPosition, {
      toValue: -200,
      duration: 400,
    }).start();
   
  };

  const closeMenu = () => {
    Animated.timing(scrollAmount,{
      toValue: 0,
      duration:0
    }).start();
  }

  return (
    <Container height="100%">
     <Container >
        <Footer
         scrollAmount={scrollAmount}
        />
      </Container>
      <Container justifyContent="flex-start" alignItems="center" flex={1}>
         <Text fontSize={6} color="white">
          Total Balance
        </Text>
        <Text fontSize={7} color="ccOrange">
          $9.26
        </Text> 
        <Container width={10}>
         { /*<Select
            value={selectedToken}
            onValueChange={val => setSelectedToken(val)}
            items={tokens}
          />*/}
        </Container>
      </Container>
      <Container position="absolute" top={150}>
      <Animated.View style={{
        transform:[
        {
          translateX: spinnerPosition
        }
        ]
      }} >
        <CurrencySpinner
            selectedIndex={selectedCurrencyIndex}
            scrollAmount={spinnerScrollAmount}
            currencyIcons={currencyIcons}
            handleScroll={handleWheelScroll}
          />
          </Animated.View>
       </Container>
      <Container flex={2} alignItems='center' width="50%" position="absolute" right={6} top={85}>
         <Animated.View style={{opacity:containerOpacity}}>
        <Container alignItems="center" my={3}>
          <Text fontSize={4} color="white">
            Wallet Balance
          </Text>
          <Text fontSize={5} color="ccOrange">
            {ethBalance ? `${ethBalance} ETH` : 'Fetching balance...'}
          </Text>
        </Container>
        <Container
          flexDirection="row"
          width={8}
        >
          <Container>
            <Button
              borderWidth={1}
              fontSize={4}
              onPress={() => navigate('SendEthereum')}
              title="Send"
              width={6}
            />
          </Container>
          <Container>
            <Button
              borderWidth={1}
              fontSize={4}
              title="Receive"
              width={6}
              onPress={() => navigate('ReceiveEthereum')}
            />
          </Container>
        </Container>
        <Container width={8} py={1}>
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
        <Container width={8} py={1}>
          <Button fontSize={4} 
          borderWidth={1} 
          title="Withdraw From DEX"
          onPress={() => navigate('WithdrawFromDex')} />
        </Container>
        </Animated.View>
      </Container>
        <Container position='absolute' bottom={200} width="100%">
          <Animated.View style={{opacity:containerOpacity}}>
          <TouchableOpacity style={{position:'absolute',left:10, top:140 }}onPress={() => leavePage('Menu')}>
              <MenuIcon />
              </TouchableOpacity>
              <TouchableOpacity style={{position:'absolute',top:80, right:0}} onPress={() => leavePage('DexHome')}>
               <Image source={require('../../assets/CC-Dex-Icon.png')} />
              </TouchableOpacity>
              </Animated.View>
          
 
          </Container>
     
    </Container>
  );
}, BackgroundColor.Black);
