import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const CancelButton = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color:'white'}}>x</Text>
    <Text style={{color:'white'}}>CLOSE</Text>
  </View>
);
