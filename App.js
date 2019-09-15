import React, { Component, View } from 'react';

//import SplashScreen from './js/pages/SplashScreen.js';
import HowToFirstScreen from './js/pages/HowToFirstScreen.js';
import AirdropListScreen from './js/pages/AirdropList.js'; 
import HowToRedropScreen from './js/pages/HowToRedropScreen.js';
import ARViewScreen from './js/pages/ARViewScreen.js';
import MapViewScreen from './js/pages/MapViewScreen.js';
import ARMapTiltScreen from './js/pages/ARMapTiltScreen.js';
//import PortalGame from './js/pages/PortalGame.js';
import ParachuteGame from './js/pages/ParachuteGame.js';
import WalletScreen from './js/pages/Wallet.js';
import LeaderboardScreen from './js/pages/Leaderboard.js';
import PreGameScreen from './js/pages/PreGameScreen.js';
import DemoModeSelectionScreen from './js/pages/DemoModeSelectionScreen.js';
import DemoEndScreen from './js/pages/DemoEndScreen.js';
import DemoHowToScreen from './js/pages/DemoHowToScreen.js';
import DemoCryptoSelectionScreen from './js/pages/DemoCryptoSelectionScreen.js';
import DemoLeaderboardScreen from './js/pages/DemoLeaderboardScreen.js';

import { createStackNavigator, 
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator } from 'react-navigation';

const TabNavigator = createMaterialTopTabNavigator({
  AirdropScreen: {
    screen: AirdropListScreen,
    navigationOptions: {
      title: "CLASHES"}
  },
  WalletScreen: {
    screen: WalletScreen,
    navigationOptions: {title: "CRYPTO",
 }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#3b3b3b',
    activeTintColor: '#ffa028',
    inactiveTintColor: '#f86e00',
    borderBottomWidth:0,
    borderWidth:0,
  labelStyle: {
    fontSize: 16,
  },
  style: {
    backgroundColor: '#3b3b3b',
    marginTop: 20
  },
   indicatorStyle: {
      backgroundColor: '#ffa028',
  }
 
}}
);

const RootStack = createSwitchNavigator(
  {
    // Splash: SplashScreen,
    HowToSplash: HowToFirstScreen,
    Airdrop: TabNavigator,
    HowToRedrop: HowToRedropScreen,
    ARView: ARViewScreen,
    Tilt: ARMapTiltScreen,
    MapView: MapViewScreen,
   // Portal: PortalGame,
    Parachute: ParachuteGame,
    Leaderboard: LeaderboardScreen,
    PreGame: PreGameScreen,

    DemoMode: DemoModeSelectionScreen,
    DemoEnd: DemoEndScreen,
    DemoHowTo: DemoHowToScreen,
    DemoCrypto: DemoCryptoSelectionScreen,
    DemoLeaderboard: DemoLeaderboardScreen
  },
  {
    initialRouteName: 'HowToFirstScreen'
  }
);

const AppNavigator = createSwitchNavigator({
  Main: RootStack,
  AirdropWallet: TabNavigator,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
     return <AppContainer />;
  }
}

module.exports = App;