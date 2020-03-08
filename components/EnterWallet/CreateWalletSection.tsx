import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Subheading,
  ButtonWrapper,
  PrimaryButton,
} from '../../pages/SelectCurrency/styles';
import { Subscribe } from 'unstated';
import { Wallet } from '../Wallet/Wallet';

interface Props {
  handleCreateWalletPressed: () => void;
  handleUseBuiltInWalletPressed: (wallet: Wallet) => void;
}

export const CreateWalletSection = ({
  handleCreateWalletPressed,
  handleUseBuiltInWalletPressed,
}: Props) => (
  <Subscribe to={[Wallet]}>
    {(wallet: Wallet) => (
      <View style={styles.container}>
        {wallet.state.data.length > 0 ? (
          <TouchableOpacity
            onPress={() => handleUseBuiltInWalletPressed(wallet)}
          >
            <ButtonWrapper>
              <PrimaryButton>Use Crypto Credit Wallet</PrimaryButton>
            </ButtonWrapper>
          </TouchableOpacity>
        ) : (
          <>
            <Subheading style={{ maxWidth: 300 }} size="18px">
              Don't have one?
            </Subheading>
            <TouchableOpacity onPress={handleCreateWalletPressed}>
              <ButtonWrapper>
                <PrimaryButton>Create wallet now!</PrimaryButton>
              </ButtonWrapper>
            </TouchableOpacity>
          </>
        )}
      </View>
    )}
  </Subscribe>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodeScanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
