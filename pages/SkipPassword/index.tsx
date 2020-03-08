import React from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { useNavigation } from 'react-navigation-hooks';
import { Button } from '../../components/Button';

export const SkipPassword = withBackground(() => {
  const { navigate } = useNavigation();
  return (
    <Container height="100%" alignItems="center">
      <Container width={10} height="100%">
        <Container flex={1} />
        <Container flex={1} alignItems="center">
          <Text fontSize={5} color="grey1" my={2}>
            Important!
          </Text>
          <Text fontSize={4} color="grey2">
            Your password is used to secure your cryptocurrency wallet. Without
            a password your funds could be at risk.
          </Text>
        </Container>
        <Container flex={1} alignItems="center">
          <Button
            title="Don't Skip"
            onPress={() => navigate('CreatePassword')}
          />
          <Button
            title="Skip Password"
            onPress={() => navigate('Wallet')}
            variant="text"
          />
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Orange);
