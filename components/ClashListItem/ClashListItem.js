import React, { Component } from 'react';
import {
	View, 
	Image, 
	Text,
	StyleSheet, 
	TouchableHighlight,
	Modal
} from 'react-native';
import { Container } from '../../components/Container';


export default class ClashListItem extends Component {

	constructor(props) {
    	super(props);

    this.state = {
      	joined : true,
        timer : props.clashItem.startTime
    }
  }

  componentDidMount() {
    this.interval = setInterval(
    () => this.setState(({ timer: this.state.timer - 1 })),
    1000
    );
  }

  componentDidUpdate(){
    if(this.state.timer < 0){ 
      this.setState({timer: 0});
      clearInterval(this.interval);
      //Start game
    }
  }

  getHeaderText() {
    if(this.props.clashItem.open){
      return  (<Text style={localStyles.buttonText}> {this.props.clashItem.value} {this.props.clashItem.tokenName}</Text>);
    } else {
     return (<Container width="100%"><Container><Text style={localStyles.buttonText}> Prize Timer Position</Text></Container>
     <Container><Text style={localStyles.buttonText}> Timer</Text></Container>
     <Container><Text style={localStyles.buttonText}> Position</Text></Container></Container>);
    
    }
  }

  handleItemPress() {
    if(this.props.clashItem.open){
      this.props.navigate('GameList');
    } else {
      this.props.navigate('PreGameScreen');
    }

  }

  getBannerImage() {
    if(this.props.clashItem.open){
     return <Image source={require('../../assets/CryptoClash-List-Clash-Token.png')}  
          style={localStyles.buttonImage} />
    } else {
      return <Image source={require('../../assets/Frappy.png')}  
          style={localStyles.buttonImage} />
        }
    
  }

	render() {
    var imagePath = '../../assets/' + this.props.clashItem.image;
      var startTime = new Date(this.state.timer * 1000).toISOString().substr(11, 8);
   
    return(
			<TouchableHighlight style={localStyles.buttons}
            onPress={() => this.handleItemPress()}
             >
        <View style={localStyles.container}>

          {this.getHeaderText()}
         
         {this.getBannerImage()}
         
          <Image source={require('../../assets/GameTimerIcon.png')}
          style={localStyles.clockIcon} />
          <Text style={localStyles.airdropTimer}>{this.props.clashItem.participants}</Text> 
          <Image source={require('../../assets/EmptyIcon.png')}
          style={localStyles.percentIcon} />
          <Text style={localStyles.percentAmount}> {this.props.clashItem.percentAmount}%</Text>
        
        </View>
           
      </TouchableHighlight>
    );
	}

  _renderJoined() {
    if(this.props.clashItem.joined) {
      return(
        <Image source={require('../../assets/CryptoClash-Joined-Sash.png')}
      style={localStyles.joinedFlag} />
      );
    }
  }

}

var localStyles = StyleSheet.create({
  airdropTimer: {
    fontSize: 12,
    position:'absolute', 
    top:30,
    color:'#fff',
    right:45
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
  buttons : {
    flex: 1,
    height: 175,
    backgroundColor:'#f86e00',
  },
  container: {
    backgroundColor:'#3b3b3b'
  },
  clockIcon : {
  	position:'absolute', 
    top:30,
    right:5,
    width:25, 
    height:25
  },
  percentAmount : {
    position:'absolute', 
    fontSize: 8,
    top: 37,
    left: 7
  },
  percentIcon : {
    position:'absolute', 
    top:30,
    left:5,
    width:25, 
    height:25
  },
  header: {
    backgroundColor:'#f86e00',
  },
  infoIcon : {
  	position:'absolute', 
  	top:55,
  	right:5,
  	width:25, 
  	height:25
  },
  joinedFlag : {
  	position:'absolute', 
  	top:95,
  	right:1,
  	width:100, 
  	height:100
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign:'center'
  }
});