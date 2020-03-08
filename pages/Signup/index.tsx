import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from 'react-navigation-hooks';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { secureStoreKeys } from '../../consts/secureStoreKeys';

export const Signup = withBackground(() => {
  const [username, setUsername] = useState('');
  const { navigate } = useNavigation();

  useEffect(() => {
    const checkForExistingUser = async () => {
      const username = await SecureStore.getItemAsync(
        secureStoreKeys.CRYPTO_CLASH_USERNAME
      );
      console.log(username);
      if (username != null) {
        const passwordHash = await SecureStore.getItemAsync(
          secureStoreKeys.CRYPTO_CLASH_PASSWORD_HASH
        );
        console.log(passwordHash);
        if (passwordHash != null) {
          navigate('EnterPassword');
        }

        // navigate('Wallet');
      }
    };
    checkForExistingUser();
  });

  const handleJoinButtonPress = async () => {
    // save username in device storage
    await SecureStore.setItemAsync(
      secureStoreKeys.CRYPTO_CLASH_USERNAME,
      username
    );
    // navigate to create password page
    navigate('CreatePassword');
  };

  return (
    <Container height="100%" alignItems="center">
      <Container width={10} height="100%">
        <Container flex={2} />
        <Container flex={1}>
          <Input
            label="Enter Username"
            value={username}
            handleChange={e => setUsername(e.nativeEvent.text)}
          />
        </Container>
        <Container flex={1}>
          <Button title="Join" onPress={handleJoinButtonPress} />
        </Container>
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text fontSize={5} color="white" my={2}>
            Important!
          </Text>
          <Text fontSize={4} color="white">
            Your username will be public and will be displayed when you enter
            games.
          </Text>
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Orange);
