import * as React from 'react';
import { NavigationComponent } from 'react-navigation';
import { withBackground } from '../../components/withBackground';
import { WalletAddressInput } from '../../components/EnterWallet/WalletAddressInput';
import { CreateWalletSection } from '../../components/EnterWallet/CreateWalletSection';
import { HeaderSection } from '../../components/EnterWallet/HeaderSection';
import { SetupWalletForm } from '../../components/EnterWallet/SetupWalletForm';
import { Animated } from 'react-native';
import { Wallet } from '../../components/Wallet/Wallet';
import { currencies } from '../SelectCurrency';

interface Props {
  navigation: NavigationComponent;
}

class EnterWallet extends React.Component<Props> {
  state = {
    walletAddress: '',
    barcodeScannerEnabled: false,
    setupWalletFormOpen: false,
    mainViewOpacity: new Animated.Value(1),
    setupWalletFormOpacity: new Animated.Value(0),
  };

  selectedCurrencyIndex = this.props.navigation.getParam(
    'selectedCurrencyIndex',
    0,
  );
  selectedCryptoCurrencyData = this.props.navigation.getParam(
    'selectedCryptoCurrencyData',
    {},
  );
  transactionAmount = this.props.navigation.getParam('transactionAmount', 0);

  handleChangeText = (text: string) => this.setState({ walletAddress: text });

  handleBarCodeScanned = (data: string, _: string) =>
    this.setState({
      walletAddress: data,
      barcodeScannerEnabled: false,
      setupWalletFormOpen: false,
    });

  handleCreateWalletPressed = () => {
    Animated.timing(this.state.mainViewOpacity, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      this.setState({ setupWalletFormOpen: true });
      Animated.timing(this.state.setupWalletFormOpacity, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };

  handleCreateWalletCancel = () => {
    Animated.timing(this.state.setupWalletFormOpacity, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      this.setState({ setupWalletFormOpen: false });
      Animated.timing(this.state.mainViewOpacity, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };

  navigateToHomePage = () => {
    this.props.navigation.navigate('Home');
  };

  handleUseBuiltInWalletPressed = (wallet: Wallet) => {
    wallet.addAsset({
      ticker: currencies[this.selectedCurrencyIndex],
      quantity:
        (1 / this.selectedCryptoCurrencyData.GBP) * this.transactionAmount,
      index: wallet.state.data.length,
    });
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <>
        {this.state.setupWalletFormOpen ? (
          <Animated.View
            style={{
              opacity: this.state.setupWalletFormOpacity,
            }}
          >
            <SetupWalletForm
              navigateToHomePage={this.navigateToHomePage}
              handleCancelPress={this.handleCreateWalletCancel}
              transactionAmount={this.transactionAmount}
              selectedCryptoCurrencyData={this.selectedCryptoCurrencyData}
              selectedCurrencyIndex={this.selectedCurrencyIndex}
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={{ height: '100%', opacity: this.state.mainViewOpacity }}
          >
            <HeaderSection
              transactionAmount={this.transactionAmount}
              selectedCryptoCurrencyData={this.selectedCryptoCurrencyData}
              selectedCurrencyIndex={this.selectedCurrencyIndex}
            />
            <WalletAddressInput
              navigation={this.props.navigation}
              walletAddress={this.state.walletAddress}
              barcodeScannerEnabled={this.state.barcodeScannerEnabled}
              handleChangeText={this.handleChangeText}
            />
            <CreateWalletSection
              handleCreateWalletPressed={this.handleCreateWalletPressed}
              handleUseBuiltInWalletPressed={this.handleUseBuiltInWalletPressed}
            />
          </Animated.View>
        )}
      </>
    );
  }
}

export default EnterWallet;
