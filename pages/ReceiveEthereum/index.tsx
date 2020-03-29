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
import { useNavigation, useFocusEffect } from 'react-navigation-hooks';
import { CopyIcon } from '../../components/Icons/CopyIcon';
import { Clipboard, Animated, Dimensions, TouchableOpacity, Image, View } from 'react-native';

export const ReceiveEthereum = withBackground(() => {
  const [walletAddress, setWalletAddress] = useState();
  const { navigate } = useNavigation();
  const { goBack } = useNavigation();
    const [scrollAmount, setScrollAmount] = useState(new Animated.Value(0));

    const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));

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

  useFocusEffect(() => {
     enterPage();

   });

   const enterPage = () => {
     Animated.timing(containerOpacity, {
      toValue: 1,
      duration: 400,
    }).start();
      Animated.timing(scrollAmount, {
      toValue: 0,
      duration: 0,
    }).start();

  }

   const leavePage  = () => {
    Animated.timing(scrollAmount, {
        toValue: -Dimensions.get('window').height + 275,
        duration: 800,
      }).start(() => {
       navigate("DexHome")
      });
    Animated.timing(containerOpacity, {
      toValue: 0,
      duration: 400,
  }).start();
   
   
  };

  return (
    <Container height="100%">
       <Container >
        <Footer
         scrollAmount={scrollAmount}
        />
      </Container>
      <Container height="100%" width="100%">
          <Animated.View style={{opacity:containerOpacity, width:"100%", flex:2, justifyContent:"center", alignItems:"center"}}>
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
        </Animated.View>
        <Container flex={1}>
        </Container>
         <Container position='absolute' bottom={200} width="100%">
          <Animated.View style={{opacity:containerOpacity}}>
          <TouchableOpacity style={{position:'absolute',left:10, top:140 }}onPress={() => goBack()}>
              <ChevronOutlineLeft/>
              </TouchableOpacity>
              <TouchableOpacity style={{position:'absolute',top:80, right:10}} onPress={() => Clipboard.setString(walletAddress)}>
               <CopyIcon/>
               <Text>Copy Address</Text>
              </TouchableOpacity>
              </Animated.View>
          
 
          </Container>
      </Container>

    </Container>
  );
}, BackgroundColor.Black);
