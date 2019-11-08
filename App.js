import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './components/HomeScreen';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>


        <View style={styles.search}>
          <View style={{justifyContent: 'flex-start'}}>
            <Image style ={styles.sideMenu} source={require('./assets/sideMenu.png')} />
          </View>

          <Text style={styles.title}> DinDin </Text>
          <View style={{justifyContent: 'flex-start'}}>
            <Image style ={styles.searchIcon} source={require('./assets/searchIcon.png')} />
          </View>
        </View>


        <View style={styles.monthContainer}>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Button title="January" color='grey'></Button>
            <Button title="February" color='grey'></Button>
            <Button title="March" color='grey'></Button>
            <Button title="April" color='grey'></Button>
            <Button title="May" color='grey'></Button>
            <Button title="June" color='grey'></Button>
            <Button title="July" color='grey'></Button>
            <Button title="August" color='grey'></Button>
            <Button title="September" color='grey'></Button>
            <Button title="October" color='grey'></Button>
            <Button title="November" color='grey'></Button>
            <Button title="December" color='grey'></Button>
          </ScrollView>
        </View>

        <View style={styles.homeScreen}>
          <HomeScreen />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  search:{
    height:25,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    letterSpacing: 0.4,
    textAlign: 'center',
    fontSize: 20,
  },
  searchIcon:{
    height: 20,
    width:20,
    marginRight: 10,
    marginTop: 2,
  },

  sideMenu:{
    marginLeft: 10,
    marginTop: 5,
  },

  monthContainer:{
    alignItems: 'flex-start', 
    paddingTop:10,
  },

  homeScreen: {
    flex: 1,
  }
})
