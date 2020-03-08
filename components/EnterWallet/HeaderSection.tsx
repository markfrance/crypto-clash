import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconContainer } from '../../pages/EnterWallet/styles';
import { Header, Subheading } from '../../pages/SelectCurrency/styles';
import { getCurrencySymbol } from '../../consts/getCurrencySymbol';
import { currencies } from '../../pages/SelectCurrency/SelectCurrency';
import { currencyIcons } from '../../consts/currencyIcons';

interface Props {
  selectedCurrencyIndex: number;
  selectedCryptoCurrencyData: any;
  transactionAmount: number;
}

export const HeaderSection = ({
  selectedCurrencyIndex,
  selectedCryptoCurrencyData,
  transactionAmount,
}: Props) => (
  <View style={styles.container}>
    <IconContainer>{currencyIcons[selectedCurrencyIndex].icon()}</IconContainer>
    <Header>
      {selectedCryptoCurrencyData
        ? `${getCurrencySymbol('GBP')}${transactionAmount} = ${(
            (1 / selectedCryptoCurrencyData['GBP']!) *
            transactionAmount
          ).toFixed(5)} ${currencies[selectedCurrencyIndex]}`
        : 'Fetching data...'}
    </Header>
    <Subheading>
      1 {currencies[selectedCurrencyIndex]} = ${selectedCryptoCurrencyData.GBP}
    </Subheading>
    <Subheading size="14px">Includes fees</Subheading>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
