import React from 'react';
import { Text } from '../Text';
import { Container } from '../Container';

interface Props {
  text: string;
}

export const MnemonicCard = ({ text }: Props) => {
  return (
    <Container
      backgroundColor="ccLightOrange2"
      height={3}
      width={6}
      justifyContent="center"
      alignItems="center"
      borderRadius={2}
    >
      <Text>{text}</Text>
    </Container>
  );
};
