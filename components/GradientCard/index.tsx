import React from 'react';
import { Text } from '../Text';
import { Container } from '../Container';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  text: string;
}

export const GradientCard: React.FC<Props> = ({ text }) => {
  return (
    <TouchableOpacity>
      <Container width={6}>
        <LinearGradient
          start={[1, 1]}
          end={[0, 0]}
          colors={[theme.colors.ccOrange, theme.colors.ccLightOrange2]}
          style={{ borderRadius: 12 }}
        >
          <Container p={3} borderRadius={2} alignItems="center">
            <Text fontSize={5} color="white" fontWeight={700}>
              {text}
            </Text>
          </Container>
        </LinearGradient>
      </Container>
    </TouchableOpacity>
  );
};
