import React, { useState } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from 'react-navigation-hooks';
import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
import { secureStoreKeys } from '../../consts/secureStoreKeys';

export const CreatePassword = withBackground(() => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { navigate } = useNavigation();

  async function handleSaveButtonPress() {
    // check that passwords are equal
    if (password !== confirmPassword) {
      // show error message
      return;
    }
    const passwordHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    await SecureStore.setItemAsync(
      secureStoreKeys.CRYPTO_CLASH_PASSWORD_HASH,
      passwordHash
    );

    navigate('SetupComplete');
  }

  const handleSkipButtonPress = () => {
    navigate('SkipPassword');
  };

  return (
    <Container height="100%" alignItems="center">
      <Container width={10} height="100%">
        <Container flex={1} />
        <Container flex={1} justifyContent="center">
          <Input
            label="Create Password"
            value={password}
            handleChange={e => setPassword(e.nativeEvent.text)}
            secureTextEntry
          />
          <Input
            label="Repeat Password"
            value={confirmPassword}
            handleChange={e => setConfirmPassword(e.nativeEvent.text)}
            secureTextEntry
          />
        </Container>
        <Container flex={1} justifyContent="center">
          <Button title="Save" onPress={handleSaveButtonPress} />
          <Button
            title="Skip Password"
            onPress={handleSkipButtonPress}
            variant="text"
          />
        </Container>
        <Container flex={1} alignItems="center">
          <Text fontSize={5} color="grey1" my={2}>
            Important!
          </Text>
          <Text fontSize={4} color="grey2">
            We do not keep as copy of your password. If you forget it, it cannot
            be recovered.
          </Text>
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Orange);
