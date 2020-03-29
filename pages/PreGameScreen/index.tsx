import React, { Component, useState, useEffect } from 'react';
import {
	View, 
	Image, 
	StyleSheet, 
	TouchableHighlight,
	TouchableOpacity,
	Animated, Dimensions

} from 'react-native';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import {
  BackgroundColor,
  withBackground,
} from '../../components/withBackground';
import { useNavigation } from 'react-navigation-hooks';
import { Footer } from '../../components/Footer';
import { ChevronOutlineLeft } from '../../components/Icons/ChevronOutlineLeft';

export const PreGameScreen = withBackground(() => {

 const { navigate } = useNavigation();

  const [scrollAmount, setScrollAmount] = useState(new Animated.Value(0));
  const [containerOpacity, setContainerOpacity] = useState(new Animated.Value(1));

  const openMenu = () => {
    Animated.timing(scrollAmount, {
        toValue: -Dimensions.get('window').height + 275,
        duration: 800,
      }).start(() => navigate('DexHome'));
    Animated.timing(containerOpacity, {
      toValue: 0,
      duration: 400,
    }).start();
   
  };

  		return(

  			<Container style={{flex:1}}>
  			 <Container >
        <Footer
          scrollAmount={scrollAmount}
        />
      </Container>

	  			<Container style={localStyles.header} >
	  				<Text fontSize={6} color="white" textAlign="center"> Clash Ends In </Text>
	  				<Text style={localStyles.timer}> 7h 16m 10s </Text>
	  			</Container>
	  		<Animated.View style={{opacity:containerOpacity, height:'100%'}}>
	  			<Container style={{flex:1, flexDirection:'row'}}>
		  			<Container style={localStyles.leftBox}>
		  				<Text style={localStyles.subheader}>Clash Details</Text>
		  				<Container style={localStyles.infoContainer} >
		  					<Container style={localStyles.leftColumn}>
		  						<Text style={localStyles.label}>Prizes</Text>
		  					
		  						<Text style={localStyles.label}>Entry Volume</Text>
		  					
		  						<Text style={localStyles.label}>Participants</Text>
		  					
		  						<Text style={localStyles.label}>Length</Text>
		  						
		  					</Container>
		  					<Container style={localStyles.rightColumn}>
		  						<Text style={localStyles.value}>10 ETH</Text>
		  						<Text style={localStyles.value}>1%</Text>
		  						<Text style={localStyles.value}>100</Text>
		  						<Text style={localStyles.value}>24hr</Text>
		  					</Container>
		  				</Container>
		  				<Text style={localStyles.subheader}>Trade Volume</Text>
		  				<Container style={localStyles.leftBox}>
		  					<Container style={localStyles.infoContainer}>
		  					<Container style={localStyles.leftColumn}>
		  						<Text style={localStyles.label}>24hr</Text>
		  		
		  						<Text style={localStyles.label}>Used</Text>
		  					
		  						<Text style={localStyles.label}>Available</Text>
		  						
		  						<Text style={localStyles.label}>Per Entry</Text>
		  					</Container>
		  					<Container style={localStyles.rightColumn}>
		  						<Text style={localStyles.value}>$66.50</Text>
		  						<Text style={localStyles.value}>$65</Text>
		  						<Text style={localStyles.value}>$2.90</Text>
		  						<Text style={localStyles.value}>$2.90</Text>
		  					</Container>
		  					</Container>
		  				</Container>
		  			</Container>
		  			<Container style={localStyles.rightBox}>
		  				<Text style={localStyles.subheader}>Prizes</Text>
		  				<Container style={localStyles.infoContainer}>
		  				
	          				<Container style={localStyles.leftColumn}>
	          					<Text style={localStyles.label}>1st</Text>
	          					<Text style={localStyles.label}>2nd </Text>
	          					<Text style={localStyles.label}>3rd </Text>
	          					<Text style={localStyles.label}>4th </Text>
	          					<Text style={localStyles.label}>5th </Text>
	          					<Text style={localStyles.label}>6th </Text>
	          					<Text style={localStyles.label}>7th </Text>
	          					<Text style={localStyles.label}>8th</Text>
	          					<Text style={localStyles.label}>9th </Text>
	          					<Text style={localStyles.label}>10th</Text>
	          				</Container>
	          				<Container style={localStyles.rightColumn}>
	          						<Text style={localStyles.value}>1000</Text>
	          					<Text style={localStyles.value}>900 </Text>
	          					<Text style={localStyles.value}>800 </Text>
	          					<Text style={localStyles.value}>700 </Text>
	          					<Text style={localStyles.value}>600 </Text>
	          					<Text style={localStyles.value}>500 </Text>
	          					<Text style={localStyles.value}>400 </Text>
	          					<Text style={localStyles.value}>300</Text>
	          					<Text style={localStyles.value}>200 </Text>
	          					<Text style={localStyles.value}>100</Text>
	          				</Container>
	          				
		  				</Container>

		  			</Container>
		  		</Container>
		  		</Animated.View>
		  		
		  		<Container bottom={200}>
		  		<Animated.View style={{opacity:containerOpacity, height:'100%'}}>
		  		<TouchableOpacity style={{left:10, top:70 }}onPress={() => navigate('ClashList')}>
		  		    <ChevronOutlineLeft/>
		  		    </TouchableOpacity>
		  		    <TouchableOpacity style={{position:'absolute',right:0}} onPress={() => openMenu()}>
		  		     <Image source={require('../../assets/CC-Dex-Icon.png')} />
		  		    </TouchableOpacity>
		  		    </Animated.View>
          
 
		  		</Container>
		
  			</Container>);
  		
  }, BackgroundColor.Black);

var localStyles = StyleSheet.create({
	main:{
    	backgroundColor: '#3b3b3b',
    	fontFamily:'Medel-Regular',
    	color:'#fff'
	},
	header: {
		marginTop:20,
		textAlign:'center',
		width:'100%'
	},
	timer: {
		fontSize:24,
		textAlign:'center',
		color:'#FF9E27'
	},
	subheader: {
		fontSize:16,
		color:'white',
		textAlign:'center'
	},
	label: {
		fontSize:12,
		margin:8,
		textAlign:'center'
	},
	description: {
		fontSize:12
	},
	infoContainer:{
		flexDirection:'row',
		backgroundColor:'#FF9E27',
		borderRadius:45,
		margin:10,
		padding:10
	},
	value: {
		fontSize:12,
		margin:8,
		color:'white',
		textAlign:'center'
	},
	leftBox: {
		flex:1,


	},
	rightBox: {
		flex:1,
	},
	leftColumn: {
		flex:2
	},
	rightColumn: {
		flex:1
	}
});