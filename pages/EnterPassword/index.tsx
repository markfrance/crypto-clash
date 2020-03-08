import React, { useState, useEffect } from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import { secureStoreKeys } from '../../consts/secureStoreKeys';
import { useNavigation } from 'react-navigation-hooks';

export const EnterPassword = withBackground(() => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    async function getUsername() {
      const fetchedUsername = await SecureStore.getItemAsync(
        secureStoreKeys.CRYPTO_CLASH_USERNAME
      );
      setUsername(fetchedUsername);
    }
    getUsername();
  });

  async function handleSubmitButtonPress() {
    const passwordHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    const storedPasswordHash = await SecureStore.getItemAsync(
      secureStoreKeys.CRYPTO_CLASH_PASSWORD_HASH
    );
    if (passwordHash === storedPasswordHash) {
      navigate('WalletHome');
    }
    else
    {
    console.log("WRONG PASSWORD");
    }
  }

  return (
    <Container height="100%" alignItems="center">
      <Container width={10} height="100%">
        {/* {username && (
          <Container justifyContent="center" alignItems="center" flex={2}>
            <Text fontSize={6} color="white">
              Welcome {username}
            </Text>
          </Container>
        )} */}
        <Container flex={1} justifyContent="center">
          <Container my={3}>
            <Input
              label="Enter Password"
              handleChange={e => setPassword(e.nativeEvent.text)}
              secureTextEntry
              value={password}
            />
          </Container>
          <Button title="Submit" onPress={handleSubmitButtonPress} />
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Orange);
