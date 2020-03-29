import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { NavigationComponent } from 'react-navigation';
import { Text } from '../../components/Text';
import React, { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import { NotificationIcon } from '../../components/Icons/NotificationIcon'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import {View, Image, StyleSheet, TouchableHighlight, Linking} from 'react-native';
import { Button } from '../../components/Button';
import { theme } from '../../theme';
import Swiper from 'react-native-swiper';

export const BecomeClash = withBackground(() => {

  const { navigate } = useNavigation();

  const goToAppStore = () => {
    Linking.openURL("https://apps.apple.com/us/app/flappy-reborn-the-bird-game/id1228763803/");
  };

    return (
           <Container margin={2} justifyContent="center" alignItems="center">
             <Container margin={3} justifyContent="center" alignItems="center">
               <Text color="white" fontSize={6}>If this game becomes </Text>
               <Text color="white" fontSize={6}>the clash you will </Text>
             </Container>
             <Container justifyContent="center" alignItems="center">
               <Image source={require('../../assets/NotificationIcon.png')}  />
                <Text color="white" fontSize={6}>Receive a notification</Text>
                <Image source={require('../../assets/ClockIcon.png')}  />
                <Text color="white" fontSize={6}>Have 24 hours to play</Text>
                <Image source={require('../../assets/TradeIcon.png')}  />
                <Text color="white" fontSize={6}>Use up $ of your trade volume?</Text>
                 <Text color={theme.colors.ccOrange} fontSize={2}>Don't understand this? Learn about entry requirements</Text>
             </Container>
             <Container margin={3}>
                 <Button title="CHOOSE GAME" onPress={() => navigate('GameList')}/>
             </Container>
             <Container justifyContent="center" alignItems="center" >
               <TouchableHighlight onPress={() => navigate('GameList')}>
                  <Text margin={3} color={theme.colors.ccOrange} fontSize={3}> GO BACK </Text>
                </TouchableHighlight>
                <Text color="white" fontSize={3}> Don't have flappy bird yet? </Text>
                <TouchableHighlight onPress={goToAppStore}>
                <Image source={require('../../assets/AppStore.png')}  />
                </TouchableHighlight>
             </Container>
          </Container>
         
    );

}, BackgroundColor.Black);
