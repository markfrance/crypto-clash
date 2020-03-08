import React, { useState, useEffect } from 'react';

import {
	View, 
	Image, 
	StyleSheet, 
	TouchableHighlight,
	Modal,
  FlatList
} from 'react-native';

import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import {ButtonGroup} from 'react-native-elements';
import { GameListItem } from '../../components/GameListItem/';
import gameData from '../../data/gamelist.json';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
 import { theme } from '../../theme';

export const GameList  = () => {

  const [modalStatus, setModalStatus] = useState(false);
  const { navigate } = useNavigation();
	
    return (
      <Container backgroundColor='#3b3b3b'>
      <Container  justifyContent="center" alignItems="center">
        <Text color={theme.colors.ccOrange}>Select one or more games you wish to become the clash</Text>
        <Text color="white">Clashes begin once all entries are filled, you will be </Text>
         <Text color="white">notified if one of your choices reaches full participation</Text>
        
      </Container>

      <Container>
      <TouchableHighlight onPress={() => navigate('ClashList')}>
       <ChevronOutlineLeft/>
      </TouchableHighlight>
      </Container>

  
        <FlatList
          data={gameData}
          renderItem={({item}) => 
            <GameListItem
              gameItem={item} 
              navigate={navigate}
            />}
	      />
      </Container>
      );

    
   const _setModal = (modalStatus) => {
    return () => {
      setModalStatus(modalStatus);
      }
    }

};


