import React, { useState } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import { Image, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { Input } from '../../components/Input';
import { GradientCard } from '../../components/GradientCard';
import { Button } from '../../components/Button';
import { useNavigationParam, useNavigation, useFocusEffect } from 'react-navigation-hooks';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';

export const DepositToDex = withBackground(() => {
  const [ethAmount, setEthAmount] = useState();
  const [usdAmount, setUsdAmount] = useState();

    const [scrollAmount, setScrollAmount] = useState(new Animated.Value(0));
  const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));

  const handleEthAmountChange = amount => {};
  const handleUsdAmountChange = amount => {};

  const { navigate } = useNavigation();
const { goBack } = useNavigation();

  const handlePressMove = () => {
    navigate('DexTransactionComplete');
  }


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

  useFocusEffect(() => {
     enterPage();

   });

 const leavePage  = () => {
    Animated.timing(scrollAmount, {
        toValue: -Dimensions.get('window').height + 275,
        duration: 800,
      }).start(() => {
       navigate('DexHome')
      });
    Animated.timing(containerOpacity, {
      toValue: 0,
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
    <Container zIndex={-1} >
       <Footer
         scrollAmount={scrollAmount}
        />
      </Container>
        
      
      <Container flex={1} justifyContent="center" alignItems="center">
      <Animated.View style={{opacity:containerOpacity,justifyContent:"center", alignItems:"center"}}>
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
        </Animated.View>
      </Container>
      <Container flex={2} alignItems="center">
   <Animated.View style={{opacity:containerOpacity}}>
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
        </Animated.View>
      </Container>
      <Container flex={1}></Container>
           
       <Container flex={1} position='absolute' bottom={200} width="100%">
          <Animated.View style={{opacity:containerOpacity}}>
          <TouchableOpacity style={{position:'absolute',left:10, top:140 }}onPress={() => goBack()}>
              <ChevronOutlineLeft />
              </TouchableOpacity>
              <TouchableOpacity style={{position:'absolute',top:80, right:0}} onPress={() => leavePage()}>
               <Image source={require('../../assets/CC-Dex-Icon.png')} />
              </TouchableOpacity>
              </Animated.View>
          
 
          </Container>
      
    </Container>
  );
}, BackgroundColor.Black);
