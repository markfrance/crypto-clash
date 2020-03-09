import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { fromBottom, fadeIn } from 'react-navigation-transitions';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { ThemeProvider } from 'styled-components';
import {
  CreatePassword,
  EnterPassword,
  SetupComplete,
  Signup,
  SkipPassword,
  WalletHome,
  SecureWallet,
  SendEthereum,
  ScanQRCode,
  TransactionComplete,
  ReceiveEthereum,
  DepositToDex,
  WithdrawFromDex,
  DexTransactionComplete,
  HowTo,
  ClashList,
  WalletQRCodeScanner,
  PlayGame,
  Leaderboard,
  PreGameScreen,
  Menu,
  WalletHowTo,
  BasicDexTrade,
  PlaceOrder,
  TradeHistory,
  BecomeClash,
  DexHome,
  GameList
} from './pages';
import { theme } from './theme';

console.disableYellowBox = true;

const clashStack = createStackNavigator(
{
   PlayGame,
    Leaderboard,
    ClashList,
    PreGameScreen,
    BecomeClash,
    GameList
},
{
  initialRouteName: 'ClashList',
  headerMode: 'none',
  transitionConfig: () => fadeIn()
});

const cryptoStack = createStackNavigator({
  WalletHome,
   SendEthereum,
   BasicDexTrade,
    ScanQRCode,
    TransactionComplete,
    ReceiveEthereum,
    DepositToDex,
    WithdrawFromDex,
    DexTransactionComplete,
    Menu,
    WalletHowTo,
    PlaceOrder,
    TradeHistory,
    DexHome
},
{
  initialRouteName: 'WalletHome',
  headerMode: 'none',
  transitionConfig: () => fromBottom(),
});

const tabNavigator = createMaterialTopTabNavigator(
{
  AirdropScreen: {
    screen: clashStack,
    navigationOptions: {
      title: "CLASHES"}
  },
  WalletScreen: {
    screen: cryptoStack,
    navigationOptions: {title: "CRYPTO",}
  }
},
{
  tabBarOptions: {
    activeTintColor: '#ffa028',
    inactiveTintColor: '#f86e00',
  labelStyle: {
    fontSize: 16,
  },
  style: {
    backgroundColor: '#3b3b3b',
  },
   indicatorStyle: {
      backgroundColor: '#ffa028',
  }
}}
);

const appNavigator = createStackNavigator({
    tabNavigator,
    Signup,
    CreatePassword,
    SkipPassword,
    EnterPassword,
    SetupComplete,
    SecureWallet,
    HowTo
  },
  {
    initialRouteName: 'tabNavigator',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(appNavigator);

const App = () => {
  const [isLoadingAssets, setIsLoadingAssets] = React.useState(true);
  useEffect(() => {
    Font.loadAsync({
      Medel: require('./assets/fonts/Medel.ttf'),
    }).then(() => setIsLoadingAssets(false));
  });

  return isLoadingAssets ? null : (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
