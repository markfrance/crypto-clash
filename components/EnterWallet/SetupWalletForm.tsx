import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import * as Yup from 'yup';
import { Input } from '../../pages/EnterWallet/styles';
import {
  ButtonWrapper,
  Header,
  PrimaryButton,
  SecondaryButton,
} from '../../pages/SelectCurrency/styles';
import { QuestionMarkIcon } from '../QuestionMarkIcon';
import { SCProps } from '../../theme/theme';
import { currencies } from '../../pages/SelectCurrency/SelectCurrency';
import { Subscribe } from 'unstated';
import { Wallet } from '../Wallet/Wallet';

interface Props {
  handleCancelPress: () => void;
  navigateToHomePage: () => void;
  transactionAmount: number;
  selectedCryptoCurrencyData: {
    USD: number;
    GBP: number;
    EUR: number;
  };
  selectedCurrencyIndex: number;
}

const InputLabel = styled.Text`
  color: ${(props: SCProps) => props.theme.white};
  text-align: left;
  margin: 10px 5px 2px;
  width: 80%;
`;

const ErrorMessage = styled.Text`
  color: #000;
  text-align: center;
  margin: 10px 5px 2px;
  width: 80%;
`;

const DisclaimerLabel = styled.Text`
  color: ${(props: SCProps) => props.theme.white};
  margin: 0px 5px;
`;

const DisclaimerText = styled.Text`
  color: ${(props: SCProps) => props.theme.white};
  text-align: left;
  width: 80%;
  max-width: 80%;
  font-size: 12px;
`;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Your username must contain at least 5 characters')
    .required(),
  password: Yup.string().min(
    5,
    'Your password must contain at least 5 characters',
  ),
});

export class SetupWalletForm extends React.Component<Props> {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
  };

  handleFormChange = (text: string, name: string) =>
    this.setState({ [name]: text });

  handleSubmit = async (wallet: Wallet) => {
    // Check that values have been entered for username and password
    const isValidated = await validationSchema
      .validate({
        username: this.state.username,
        password: this.state.password,
      })
      .catch(err => {
        this.setState({ errorMessage: err.errors[0] });
        return;
      });
    if (!isValidated) {
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage: 'Passwords do not match. Please check and try again',
      });
      return;
    }
    // Quantity is given by
    wallet.addAsset({
      ticker: currencies[this.props.selectedCurrencyIndex],
      quantity:
        (1 / this.props.selectedCryptoCurrencyData.GBP) *
        this.props.transactionAmount,
      index: wallet.state.data.length,
    });
    wallet.setUsernameAndPassword(this.state.username, this.state.password);
    this.props.navigateToHomePage();
  };

  render() {
    return (
      <Subscribe to={[Wallet]}>
        {(wallet: Wallet) => (
          <View style={styles.container}>
            <View style={styles.headerSection}>
              <Header>Create Wallet</Header>
            </View>
            <View style={styles.section}>
              <InputLabel>Username</InputLabel>
              <Input
                value={this.state.username}
                onChangeText={(text: string) =>
                  this.handleFormChange(text, 'username')
                }
              />
              <InputLabel>Password</InputLabel>
              <Input
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text: string) =>
                  this.handleFormChange(text, 'password')
                }
              />
              <InputLabel>Confirm Password</InputLabel>
              <Input
                secureTextEntry={true}
                value={this.state.confirmPassword}
                onChangeText={(text: string) =>
                  this.handleFormChange(text, 'confirmPassword')
                }
              />
            </View>
            <View style={styles.section}>
              {this.state.errorMessage ? (
                <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
              ) : null}
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.handleSubmit(wallet);
                  }}
                >
                  <ButtonWrapper style={{ width: 250 }}>
                    <PrimaryButton>Complete wallet setup</PrimaryButton>
                  </ButtonWrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.handleCancelPress}>
                  <SecondaryButton style={{ width: 250, textAlign: 'center' }}>
                    Cancel
                  </SecondaryButton>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.disclaimerHeader}>
                  <DisclaimerLabel>Important!</DisclaimerLabel>
                  <QuestionMarkIcon />
                </View>
                <DisclaimerText>
                  This username and password is the key to your funds. If you
                  lose them you will be unable to access your funds.
                </DisclaimerText>
              </View>
            </View>
          </View>
        )}
      </Subscribe>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  section: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
