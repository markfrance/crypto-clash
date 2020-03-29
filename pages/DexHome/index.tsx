import React, { useEffect, useState } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Image, Animated, View } from 'react-native';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigationParam, useNavigation, useFocusEffect } from 'react-navigation-hooks';
import { theme } from '../../theme';
import { Dimensions, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { getCurrencySymbol } from '../../consts/getCurrencySymbol';
import { currencyIcons } from '../../consts/currencyIcons';
import { CurrencySpinner } from '../../components/CurrencySpinner/CurrencySpinner';
import { Wheel } from '../../components/Wheel';

export const DexHome = withBackground(() => {
  const transactionFee = useNavigationParam('transactionFee');
  const ethAmount = useNavigationParam('ethAmount');
  const transactionFeeUsd = useNavigationParam('transactionFeeUsd');
  const transactionId = useNavigationParam('transactionId');

    const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [spinnerScrollAmount, setSpinnerScrollAmount] = useState(new Animated.Value(0));

  const [scrollAmount, setScrollAmount] = useState(new Animated.Value(-Dimensions.get('window').height + 275));
  const [rightSpinnerPosition, setRightSpinnerPosition] = useState(new Animated.Value(400));
  const [leftSpinnerPosition, setLeftSpinnerPosition] = useState(new Animated.Value(-400));
  const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));

    const handleWheelScroll = (newSelectedIndex: number) => {
   setSelectedCurrencyIndex(newSelectedIndex);
  };

const enterPage = () =>{
    Animated.timing(scrollAmount, {
        toValue: -Dimensions.get('window').height + 275,
        duration: 0,
      }).start();
  Animated.timing(containerOpacity, {
      toValue: 1,
      duration: 400,
    }).start();
     Animated.timing(leftSpinnerPosition, {
      toValue: 0,
      duration: 400,
    }).start();
        Animated.timing(rightSpinnerPosition, {
      toValue: 0,
      duration: 400,
    }).start();
}

  useFocusEffect(() => {
 
       enterPage();
   
  });

const leavePage = () => {
    Animated.timing(scrollAmount, {
        toValue: 0,
        duration: 800,
      }).start(() => {
        goBack()
      });
    Animated.timing(containerOpacity, {
      toValue: 0,
      duration: 400,
    }).start();
     Animated.timing(leftSpinnerPosition, {
      toValue: -400,
      duration: 400,
    }).start();
        Animated.timing(rightSpinnerPosition, {
      toValue: 1400,
      duration: 400,
    }).start();
   
  };


  const closeMenu = () => {
    Animated.timing(scrollAmount,{
      toValue: 0,
      duration:0
    }).start();
  }

   const { navigate } = useNavigation();
   const { goBack } = useNavigation();
   
  return (
    <Container >

    <Container >
        <Footer
         scrollAmount={scrollAmount}
        />
      </Container>

        
      <Container position="absolute" bottom={-250} height="100%" width="100%">
     
          <Container position="absolute" top={-200} left={60}>
           <Animated.View style={{opacity:containerOpacity}}>
            <Text color="white" fontSize={6}>Balance</Text>
            <Text color={theme.colors.ccOrange} fontSize={6}>0.2 ETH</Text>
            </Animated.View>
          </Container>
          <Container position="absolute" top={-85} left={0}>
           <Animated.View style={{opacity:containerOpacity}}>
            <TouchableOpacity onPress={() => leavePage()}>
             <ChevronOutlineLeft />
          </TouchableOpacity>
          </Animated.View>
          </Container>
          <Container position="absolute" top={-150} right={15} >
           <Animated.View style={{opacity:containerOpacity}}>
           <Image source={require('../../assets/CC-Dex-Icon.png')} />
           </Animated.View>
         </Container>
          <Container position="absolute" top={-50} width="100%" justifyContent="center" alignItems="center">
           <Animated.View style={{opacity:containerOpacity}}>
            <Text color="white" fontSize={4}>
              Line up the assets you wish to trade
            </Text>
            </Animated.View>
          </Container>
          
          <Container position="absolute" width="100%" justifyContent="center" alignItems="center">
           <Animated.View style={{opacity:containerOpacity}}>
            <Text color="white" fontSize={6} textAlign='center'>
             ETH -> CLASH
            </Text>
            <Text color="white" fontSize={6} textAlign='center'>
             0.023 = 1
            </Text>
            </Animated.View>
          </Container>

          <Animated.View style={{
        transform:[
        {
          translateX: leftSpinnerPosition
        }
        ]
      }} >
               <CurrencySpinner
            selectedIndex={selectedCurrencyIndex}
            scrollAmount={spinnerScrollAmount}
            currencyIcons={currencyIcons}
            handleScroll={handleWheelScroll}
            colorFrom='#383838' colorTo='#585858'
          />
          </Animated.View>
   
           <Animated.View style={{
        transform:[
        {
          translateX: rightSpinnerPosition
        }
        ]
      }} >
         <View style={{ top: 300, transform: [{ rotate: "180deg" }] }}>
          <Wheel colorFrom='#383838' colorTo='#585858' />
         </View>
           <Image style={{position:'absolute', top:110, right:70}}source={require('../../assets/ClashToken.png')} />
         
           </Animated.View>
     
          
   
        <Container position="absolute" top={250} width="100%" justifyContent="center" alignItems="center">
          <Container width={7}>
           <Animated.View style={{opacity:containerOpacity}}>
            <Button title="Trade" onPress={() => navigate("BasicDexTrade")}/>
            </Animated.View>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
