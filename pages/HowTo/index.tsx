import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { NavigationComponent } from 'react-navigation';
import React, { useState, useEffect } from 'react';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import Swiper from 'react-native-swiper';

export const HowTo = withBackground(() => {

  const { navigate } = useNavigation();

    return (

      <Swiper loop={false} showsPagination={true} index={0}
      dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#ffa028', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
         >
           <View style={{flex:1}}>
            <Image source={require("../../assets/CryptoClashHowTo1.png")}
            style={{flex:1, width:'auto', resizeMode:'contain'}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={require("../../assets/CryptoClashHowTo2.png")}
            style={{flex:1, width:'auto', resizeMode:'contain'}}/>
          </View>
          <View style={{flex:1}}>
          <TouchableHighlight style={{flex:1}}
            onPress={() => navigate('tabNavigator')}
            >
            <Image source={require("../../assets/CryptoClashHowTo3.png")}
            style={{flex:1, width:'auto', resizeMode:'contain'}}/>
            
            </TouchableHighlight>
          </View>
        </Swiper>
    );

}, BackgroundColor.Black);
