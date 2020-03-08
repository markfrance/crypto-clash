import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { NavigationComponent } from 'react-navigation';
import React, { useState, useEffect } from 'react';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import Swiper from 'react-native-swiper';

export const WalletHowTo = withBackground(() => {

  const { navigate } = useNavigation();

    return (

           <View style={{flex:1}}>
           <TouchableHighlight  style={{flex:1}} onPress={() => navigate('WalletHome')}>
            <Image style={{flex:1, resizeMode:'contain', width:'auto'}} source={require("../../assets/WalletHowTo.png")}
            />
            </TouchableHighlight>
          </View>
         
    );

}, BackgroundColor.Black);
