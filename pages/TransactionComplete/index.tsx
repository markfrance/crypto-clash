import React from 'react';
import {
  withBackground,
  BackgroundColor,
} from '../../components/withBackground';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { useNavigationParam } from 'react-navigation-hooks';

export const TransactionComplete = withBackground(() => {
  const transactionFee = useNavigationParam('transactionFee');
  const ethAmount = useNavigationParam('ethAmount');
  const transactionFeeUsd = useNavigationParam('transactionFeeUsd');
  const transactionId = useNavigationParam('transactionId');

  return (
    <Container height="100%" alignItems="center">
      <Container height="100%" width="100%">
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={6}>
            Transaction Complete
          </Text>
        </Container>
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Status
          </Text>
          <Text color="ccOrange" fontSize={4}>
            Waiting for transaction confirmation
          </Text>
        </Container>
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Amount Sent
          </Text>
          <Text color="ccOrange" fontSize={4}>
            {`${ethAmount} ETH`}
          </Text>
        </Container>
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Blockchain Transaction Fee
          </Text>
          <Text color="ccOrange" fontSize={4}>
            {`${transactionFee} ETH - ${transactionFeeUsd} USD`}
          </Text>
        </Container>
        <Container flex={1} justifyContent="center" alignItems="center">
          <Text color="white" fontSize={5}>
            Transaction ID
          </Text>
          <Text color="ccOrange" fontSize={4}>
            {transactionId}
          </Text>
        </Container>
        <Container flex={1} width="100%">
          <Footer leftButtonIcon={<ChevronOutlineLeft />} />
        </Container>
      </Container>
    </Container>
  );
}, BackgroundColor.Black);
