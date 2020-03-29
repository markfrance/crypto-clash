import React, { useState, useEffect } from 'react';
import {
	View, 
  Alert,
	Image, 
	Text,
  Animated,
	StyleSheet, 
	TouchableHighlight,
	Modal,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Svg, { Path } from 'react-native-svg';


import LeaderboardItem from '../../components/LeaderboardItem';
import LeaderboardData from '../../data/leaderboard.json';
import { BezierCurve } from '../../components/BezierCurve/BezierCurve';

export const Leaderboard = (props) => {
	
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    setLeaderboardData(LeaderboardData);
  });

    return (
      <View style={localStyles.leaderboard}>
        <Text style={localStyles.headerText}> LEADERBOARD</Text>
        <View style={localStyles.row}>
          <Text style={localStyles.rowText}> PLAYER </Text>
          <Text style={localStyles.rowText}> TIME </Text>
          <Text style={localStyles.rowText}> ATTEMPT </Text>
          <Text style={localStyles.rowText}> PRIZE </Text>
        </View>
        <View style={{flex:1}}>
          <FlatList 
          data={leaderboardData}
          renderItem={({item, index}) => <LeaderboardItem leaderboardItem={item} position={index}
          navigation={props.navigation}/> }
          />
         
        </View>
        <View>
            </View>
          
         <View style={localStyles.waveFooter}>
          
            <Svg
            width={Dimensions.get('window').width}
            height={160}
            viewBox="0 0 825 300"
            >
              <Path
              d="M0 181.615c3.252.4 6.48.974 9.67 1.72 43.07 12.29 86 25.23 129.2 36.86 30.4 8.17 61.16 15.17 92 21.59 21.54 4.49 43.4 7.75 65.25 10.36a546.99 546.99 0 0 0 57 3.92c26.83.36 50.57-8 70.64-26.92 16.1-15.19 29.17-32.62 41.72-50.54 17.91-25.56 34.87-51.8 53.31-77 13.39-18.28 27-36.49 44.42-51.53 25.67-22.08 54.66-37.19 87.67-44.89a195.85 195.85 0 0 1 58.39-4.71c35 2.44 67.68 12.82 97 32.56 6.17 4.15 11.84 9 17.74 13.58v262H0v-127z"
              fill="#ffa028"
              />
              <Path d="M0 308h824v1200H0V308z" fill="#ffa028" />
            </Svg>
          

          <TouchableOpacity style={localStyles.backButton}
            onPress={() => props.navigation.navigate('PlayGame')}
            >
          <Image source={require('../../assets/CryptoClash-Back-Arrow.png')}
          style={localStyles.backImage}/>
          </TouchableOpacity>


            <Text style={localStyles.yourPosition}> Your Position</Text>
            <Text style={localStyles.positionText}> 3rd</Text>
          </View>         
      </View>

    );
}

var localStyles = StyleSheet.create({
  leaderboard: {
    backgroundColor: '#3b3b3b',
    fontFamily:'Medel',
    flex:1
  },
  headerText: {
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffa028',
      fontFamily:'Medel'
  },
  waveFooter: {
    height:150,
    bottom:0
  },
  row: {

    fontSize:18,
    flexDirection: 'row',
    marginBottom: 15,
    color: '#ffa028'
  },
  rowText: {
     fontFamily:'Medel',
    fontSize:18,
    flex: 1, 
    textAlign: 'center',
    color: '#ffa028'
  },
  waveImage: {
    width:400,
    height:150
  },
  yourPosition: {
     fontFamily:'Medel',
    color: '#fff',
    position:'absolute',
    top: 35,
    right: 25
  },
  positionText: {
     fontFamily:'Medel',
    color: '#fff',
    position:'absolute',
    top: 55,
    right: 35,
    fontSize: 40
    
  },
  playAgain: {
    position: 'absolute',
    bottom:40,
    right: 15
  },
  playAgainButton: {
    textAlign:'center',
    padding:5,
    fontSize:18,
    width:120,
    color:'white',
    borderColor:'white',
    borderWidth:2,
    borderRadius:20
  },
  backButton: {
    position:'absolute',
    bottom:10,
    left:10
  },
  backImage: {
    height:30,
    width:30
  }
});


