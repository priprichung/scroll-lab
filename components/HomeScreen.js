import React, { Component } from 'react';
import { Easing,Text, Image, Animated,TouchableOpacity, StyleSheet, View, ScrollView,TouchableHighlight, Button, FlatList } from 'react-native';
import InviteCard from './InviteCard';
import Carousel from 'react-native-snap-carousel';

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      inviteList: null, 
      currentDate:'12/12/2019',
    }
  }

  componentDidMount(){
    this.getData()
  }

  async getData(){
    let response = await fetch('https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json')
    let parsedResponse = await response.json()
    this.setState({
      inviteList : parsedResponse, 
    })
  }

    _renderItem ({item, index}) {
    return (
      <View style={styles.pendingCards}>
          <InviteCard id={item.date} name={item.name} date={item.date} pic={item.pic} />
      </View>
  );}

  render() {
    // wait for json to complete before rendering
    if (this.state.inviteList === null){
      return (<View/>)
    }

    return (

      <View style={styles.container}>

        <View style={{flex:1}}>        
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.inviteList}
            renderItem={this._renderItem}
            sliderWidth={360}
            itemWidth={315}
            layout={'stack'}
          />
        </View>

        <View style={styles.agenda}>
          <ScrollView>
            <View style={styles.box}>
              <Text> Monday </Text>
              <Image style ={styles.event} source={require('../assets/newEvent.png')} />
            </View>
            <View style={styles.box}>
              <Text> Tuesday </Text>
              <Image style ={styles.event} source={require('../assets/newEvent.png')} />
            </View>
            <View style={styles.box}>
              <Text> Wednesday </Text>
              <Image style ={styles.event} source={require('../assets/newEvent.png')} />
            </View>
            <View style={styles.box}>
              <Text> Thursday </Text>
              <Image style ={styles.event} source={require('../assets/newEvent.png')} />
            </View>
            <View style={styles.box}>
              <Text> Friday </Text>
              <Image style ={styles.event} source={require('../assets/newEvent.png')} />
            </View>
          </ScrollView>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pendingCards: {
    paddingTop: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  agenda:{
    alignItems: 'flex-start'
  },

  box:{
    height: 70,
    width: 300,
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 0.5,

  },
});


export default HomeScreen;