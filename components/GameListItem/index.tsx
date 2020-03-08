import React from 'react';
import {
	View, 
	Image, 
	Text,
	StyleSheet, 
	TouchableHighlight,
	Modal
} from 'react-native';

export const GameListItem = (props) =>  {

    return(
			<TouchableHighlight style={localStyles.buttons}
            onPress={() => props.navigate('BecomeClash')}
             >
        <View style={localStyles.container}>

          <Text style={localStyles.buttonText}> {props.gameItem.participants} / {props.gameItem.maxParticipants}</Text>
         
          <Image source={require('../../assets/Frappy.png')}  
          style={localStyles.buttonImage} />
          
        </View>
           
      </TouchableHighlight>
    );
}

var localStyles = StyleSheet.create({

  buttons : {
    flex: 1,
    height: 175,
    backgroundColor:'#f86e00',
  },
  container: {
    backgroundColor:'#3b3b3b'
  },
  header: {
    backgroundColor:'#f86e00',
  },
  buttonText: {
    backgroundColor:'#f86e00', 
    color:'#fff',
    textAlign:'center',
    fontSize : 18,
    height:25
  },
  buttonImage : {
    position:'absolute',
    left:0, 
    top:25,
    height:150, 
    width:380
  },
});