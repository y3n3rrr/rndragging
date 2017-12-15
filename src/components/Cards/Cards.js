'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return (
     <View style={[styles.card]}>
       {/* <Text>{this.props.text}</Text> */}
       <Image style={styles.fruitImage} source={this.props.imgUrl} />
     </View>
   )
 }
}

class NoMoreCards extends Component {
 constructor(props) {
   super(props);
 }

 render() {
   return (
     <View>
       <Text style={styles.noMoreCardsText}>Başka resim yok..</Text>
     </View>
   )
 }
}

export default class extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     cards: [
       {text: 'Maydonoz', backgroundColor: 'green', imgUrl:require('../../assets/img/fruits/blackberry.png')},
       {text: 'Böğürtlen', backgroundColor: 'blue', imgUrl:require('../../assets/img/fruits/cherry.png')},
       {text: 'Portakal', backgroundColor: 'orange', imgUrl:require('../../assets/img/fruits/strawberry.png')},
       {text: 'Portakal', backgroundColor: 'orange', imgUrl:require('../../assets/img/fruits/tomato.png')},
       {text: 'Portakal', backgroundColor: 'orange', imgUrl:require('../../assets/img/fruits/fig.png')},
       {text: 'Portakal', backgroundColor: 'orange', imgUrl:require('../../assets/img/fruits/banana.png')}
     ]
   };
 }

 handleYup (card) {
   console.log(`Yup for ${card.text}`)
 }
 handleNope (card) {
   console.log(`Nope for ${card.text}`)
 }
 handleMaybe (card) {
   console.log(`Maybe for ${card.text}`)
 }
 render() {
   // If you want a stack of cards instead of one-per-one view, activate stack mode
   // stack={true}
   return (
     <SwipeCards
       cards={this.state.cards}
       renderCard={(cardData) => <Card {...cardData} />}
       renderNoMoreCards={() => <NoMoreCards />}

       handleYup={this.handleYup}
       handleNope={this.handleNope}
       handleMaybe={this.handleMaybe}
       hasMaybeAction
     />
   )
 }
}

const styles = StyleSheet.create({
 card: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 300,
   height: 300,
 },
 noMoreCardsText: {
   fontSize: 22,
 },
 fruitImage:{
   width:300,
   height:300,
   position:'absolute',
   resizeMode:'cover'
 }
})