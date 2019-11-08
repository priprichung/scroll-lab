import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import InviteCard from './InviteCard';

class Months extends Component {
  render() {
    return (
      <View style={{height:100, width:50}}>
        <View style = {{flex:1, paddingLeft:10, paddingTop:10}}>
          <Text> {this.props.month} </Text>
        </View>
      </View>
    )
  }
}

export default Months;