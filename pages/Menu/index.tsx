import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigationParam, useNavigation, useFocusEffect } from 'react-navigation-hooks';
import { Footer } from '../../components/Footer';

import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Dimensions, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../theme';

export const Menu = withBackground(() => {

  const { navigate, goBack } = useNavigation();
  const [scrollAmount, setScrollAmount] = useState(new Animated.Value(-Dimensions.get('window').height + 275));
  const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));



 const enterPage = () => {
     Animated.timing(containerOpacity, {
      toValue: 1,
      duration: 400,
    }).start();
      Animated.timing(scrollAmount, {
      toValue: -Dimensions.get('window').height + 275,
      duration: 0,
    }).start();

  }

  useFocusEffect(() => {
     enterPage();

   });

 const leavePage  = () => {
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
  };


	return(
		<Container width='100%'>
			 <Container zIndex={-1} > 
			  <Footer
         scrollAmount={scrollAmount}
        />
        </Container >
       <Animated.View style={{opacity:containerOpacity}}>
	      <Container position="absolute" top={20}>
	        <Text color="white" margin={30} fontSize={8}>Menu</Text>
	      </Container>
	      <Container position="absolute" top={150}>
	        <Text color="white" margin={30} fontSize={8}>Wallet</Text>
	      </Container>
	      <Container margin={30} position="absolute" top={200}>
	        <Text fontSize={6}>Username: User X</Text>
	      
	        <Text fontSize={6}>Password: ******</Text>
	     
	        <Text  fontSize={6}>View Public Key</Text>
	        <Text  fontSize={6}>View Private Key</Text>
	      </Container>
	       <Container margin={30} position="absolute" top={350}>
	       <Text color="white" fontSize={8}>Prize History</Text>
	       <Text color="white"  fontSize={8}>Transaction History</Text>
	       <Text color="white" fontSize={8}>Trade History</Text>
	       </Container>
	    <View
        style={{
          position: 'absolute',
          top: 100,
          right: 40,
        }}
      >
        <TouchableOpacity onPress={() => leavePage()}>
           <ChevronOutlineLeft />
        </TouchableOpacity>
      </View>
      </Animated.View>
      </Container>
		)

}, BackgroundColor.Black);


