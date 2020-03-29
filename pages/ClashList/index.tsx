import React, { useState, useEffect } from 'react';

import {
	View, 
  Text,
	Image, 
	StyleSheet, 
	TouchableHighlight,
	Modal,
  FlatList
} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import ClashListItem from '../../components/ClashListItem/ClashListItem.js';

import UpcomingClashes from '../../data/upcomingclashes.json';
import ActiveClashes from '../../data/activeclashes.json';
import EndedClashes from '../../data/endedclashes.json';

import { useNavigationParam, useNavigation } from 'react-navigation-hooks';

const UpcomingButton = () => <Text style={localStyles.buttonText}>Open</Text>;
const ActiveButton = () => <Text style={localStyles.buttonText}>Joined</Text>;
const EndedButton = () => <Text style={localStyles.buttonText}>Ended</Text>;

export const ClashList  = () => {

  const { navigate } = useNavigation();

  const [modalStatus, setModalStatus] = useState(false);
  const [clashData, setClashData] = useState(UpcomingClashes);
  const [selectedIndex, setSelectedIndex] = useState(0);
	
  const _updateIndex = (sel) => {

    if(sel == 0) {
      //TODO: Replace with API calls
      clashList = UpcomingClashes;
    }
    if(sel == 1) {
      clashList = ActiveClashes;
    }
    if(sel == 2) {
      clashList = EndedClashes;
    }

    setSelectedIndex(sel);
    setClashData(clashList);
  }

    const buttons = [{ element: UpcomingButton }, 
    { element: ActiveButton }, 
    { element: EndedButton }]
  
    return (
      <View style={localStyles.mainView}>
        <ButtonGroup
          onPress={_updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonStyle={{borderWidth:0}}
          innerBorderStyle={{width:0}}
          containerStyle={{height:30,borderWidth:0, backgroundColor:'#3b3b3b'}}
          selectedButtonStyle={{borderBottomWidth:2, borderRightWidth:0, borderLeftWidth:0, borderBottomColor:'#f86e00',backgroundColor:'#3b3b3b'}}
          />
        <FlatList
          data={clashData}
          renderItem={({item}) => 
            <ClashListItem 
              clashItem={item} 
              navigate={navigate}
            />}
	      />
      </View>
      );

    
   const _setModal = (modalStatus) => {
    return () => {
      setModalStatus(modalStatus);
      }
    }

};

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor:"transparent"
  },
  mainView: {
    backgroundColor:'#3b3b3b'
  },
  headerText: {
    color:'#f86e00',
    textAlign:'center',
    fontSize : 35
  },
  modalText: {
    padding:20,
    fontSize:20
  },
  modalTimer: {
    fontSize:35
  },
  airdropTimer: {
    fontSize: 10,
    position:'absolute', 
    top:55,
    left:30
  },
  buttonText: {
    marginTop:10,
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    flex: 1,
    height: 200,
    backgroundColor:'#f86e00',
    borderWidth: 1,
    borderColor: '#fff'
  },
  modal : {
    marginTop:100,
    backgroundColor:'#fff',
    height:500,
    borderColor:'#f86e00',
    borderWidth:5,
    borderRadius:15,
    alignItems:'center'
  },
  smallIcon : {
  	width:100, 
  	height:100
  },
  row : {
  	flex:1, 
  	flexDirection:'row'
  },
  topButton : {
    flex: 1, 
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  buttonText: {
    color:'#f86e00',
    borderWidth: 0
  }
});


