import React, {Component} from 'react';
import { Text, Image, TouchableHighlight,TouchableOpacity, StyleSheet, View } from 'react-native';
import dude from '../assets/boy.png';

export default class Card extends Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
  return (
    <View style={styles.containerStyle}>
      <View style={styles.topContainer}>
        {this.props.pic ? (
          <Image style={styles.profileImg} source={{ uri: 'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/' + this.props.pic }} />
        ) : (
            <Image source={dude} />
          )}
        <View>
          <Text style={styles.nameText}>{this.props.name}</Text>
          <Text style={styles.dateText}>{this.props.date}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.responseButton}>
        <Image style ={styles.cross} source={require('../assets/cross.png')} />
          <Text style={{color:'red'}}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.responseButton}>
        <Image style ={styles.check} source={require('../assets/check.png')} />
          <Text style={{color:'green'}}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 133,
    width: 315,
    backgroundColor:'#FFFFFF'
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingBottom: 36,
    margin:15
  },
  buttonContainer: {
    //flex: 1,
    flexDirection: 'row',
    height: 51,
  },
  nameText: {
    fontSize: 14,
    color:'black',
  },
  dateText: {
    fontSize: 14,
    opacity: .5,
  },
  profileImg: {
    height: 50,
    width: 50,
    marginRight:10
  },
  responseButton: {
    height:50,
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center',
    width:'50%', 
    borderWidth: 0.5,
    borderColor: '#ddd',
  }
};