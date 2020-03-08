import React, { useState, useEffect } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { View, TouchableOpacity, Animated } from 'react-native';
import {
  Body,
  Header,
  Subheading,
  PrimaryButton,
  ButtonWrapper,
} from './styles';
import { FadeInView } from '../../components/FadeInView';
import { CurrencySpinner } from '../../components/CurrencySpinner/CurrencySpinner';
import { getCurrencySymbol } from '../../consts/getCurrencySymbol';
import { NavigationComponent } from 'react-navigation';
import { currencyIcons } from '../../consts/currencyIcons';
import { Text } from '../../components/Text';

interface CoinData {
  EUR: number;
  GBP: number;
  USD: number;
}

interface Props {
  navigation: NavigationComponent;
}

interface State {
  ethData: CoinData | undefined;
  btcData: CoinData | undefined;
  bchData: CoinData | undefined;
  ltcData: CoinData | undefined;
  xlmData: CoinData | undefined;
  usdtData: CoinData | undefined;
  eosData: CoinData | undefined;
  zecData: CoinData | undefined;
  selectedCurrency: string;
  selectedCurrencyIndex: number;
}

export const currencies = ['BTC', 'XLM', 'LTC', 'ETH', 'BCH', 'ZEC'];

export const SelectCurrency = withBackground(() => {

  const [ethData, setEthData] = useState();
  const [btcData, setBtcData] = useState();
  const [bchData, setBchData] = useState();
  const [usdtData, setUsdtData] = useState();
  const [ltcData, setLtcData] = useState();
  const [xlmData, setXlmData] = useState();
  const [eosData, setEosData] = useState();
  const [zecData, setZecData] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [spinnerScrollAmount, setSpinnerScrollAmount] = useState(new Animated.Value(0));

  useEffect(() => { 
    this.getPriceData();
  });
  
  getPriceData = async () => {
    // TODO remove api key from fetch request
    const priceData = (await fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,ZEC,LTC,XLM&tsyms=USD,EUR,GBP&api_key=b6df060832ca71bcd4a092e44da24bd309db8a72010ab0fcd5bcc48957b90f32`,
    )) as any;
    const data = JSON.parse(priceData._bodyText);
    setEthData(data.ETH);
      setBtcData(data.BTC);
      setBchData(data.BCH);
      setLtcData(data.LTC);
      setXlmData(data.XLM);
      setZecData(data.ZEC);

  };

  handleWheelScroll = (newSelectedIndex: number) => {
    setSelectedCurrencyIndex(newSelectedIndex); };

  getDataToDisplay = () => {
    switch (selectedCurrencyIndex) {
      case 0:
        return btcData;
      case 1:
        return xlmData;
      case 2:
        return ltcData;
      case 3:
        return ethData;
      case 4:
        return bchData;
      case 5:
        return zecData;
      default:
        return {
          EUR: NaN,
          GBP: NaN,
          USD: NaN,
        };
    }
  };

    /*
     * Transaction amount and currency are passed as navigation params.
     * These values are originally returned from the server when validating the QR code.
     * Fallbacks are given in situtations where the passed parameters may be undefined.
     */
    const { navigate } = useNavigation();
    const transactionAmount = navigate(
      'transactionAmount',
      'No transaction amount found.',
    );
    const currency = navigate('currency', 'No currency found');

    const selectedCryptoCurrencyData = this.getDataToDisplay();

    return (
      <View>
        <FadeInView style={{ margin: 20, flex: 1, justifyContent: 'center' }}>
          <>
        
            <Text font-size={32} color="white">
              You added {`${getCurrencySymbol(currency)}${transactionAmount}`}{' '}
              credit!
              </Text>
      
            <Text font-size={18} color="grey">
              Select the cryptocurrency that you would like to receive
            </Text>
          </>
        </FadeInView>
        <View style={{ width: '100%', flex: 2, flexDirection: 'row' }}>
          <CurrencySpinner
            selectedIndex={selectedCurrencyIndex}
            scrollAmount={spinnerScrollAmount}
            currencyIcons={currencyIcons}
            handleScroll={handleWheelScroll}
          />
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text font-size={18} color="grey">
              1 {currencies[selectedCurrencyIndex]} = £
              {selectedCryptoCurrencyData
                ? selectedCryptoCurrencyData.GBP
                : 'Fetching data...'}
            </Text>
           <Text font-size={18} color="grey">
              {selectedCryptoCurrencyData
                ? `${getCurrencySymbol(currency)}${transactionAmount} = ${(
                    (1 / selectedCryptoCurrencyData[currency]!) *
                    transactionAmount
                  ).toFixed(5)} ${currencies[selectedCurrencyIndex]}`
                : 'Fetching data...'}
            </Text>
            <Text font-size={14} color="grey">Includes fees</Text>
            <TouchableOpacity
              style={{ width: '60%' }}
              onPress={() =>
                this.props.navigation.navigate('EnterWallet', {
                  selectedCurrencyIndex: selectedCurrencyIndex,
                  selectedCryptoCurrencyData,
                  transactionAmount,
                })
              }
            >
              <View>
                <Text>{`Receive ${
                  currencies[selectedCurrencyIndex]
                }`}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            margin: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text font-size={18} color="grey">Spin the wheel to view more cryptcurrencies</Text>
        </View>
      </View>
    );
}, BackgroundColor.Black);

