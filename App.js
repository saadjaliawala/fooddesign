/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text
} from 'react-native';
import burger from './src/assets/img/burger.jpg';
import food1 from './src/assets/img/food1.jpg';
import food2 from './src/assets/img/food2.jpg';
import food3 from './src/assets/img/food3.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <View style={{ flex: 1 }} >

      <Image source={burger} style={{ height: 300, width: '100%', borderBottomRightRadius: 135, position: 'relative', zIndex: 0 }}>
      </Image>

      <ScrollView style={{ marginTop: 250, borderTopLeftRadius: 55, height: '100%', width: '100%', backgroundColor: 'white', position: 'absolute', zIndex: 1000 }} >
        <View style={{ marginTop: 50 , marginHorizontal: 30 }} >
          <Text style={{ fontWeight: 'bold' , color: '#5B779D' , fontSize: 18 }} >Description</Text>
          <Text style={{marginTop: 10 , color: 'grey'}} >Text mental organizcation between colleagns happened earlier witeasy way to ing in contexts where a call would be impolite or inappropriate calling very late at night  </Text>
        </View>
        <Text style={{fontWeight: 'bold' , color: '#5B779D' , fontSize: 18 , marginLeft: 30 , marginTop: 20  }} >Ingredients</Text>
        <ScrollView horizontal={true} style={{ marginTop: 25 }}  >
          
          <Image source={food1} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>
          <Image source={food2} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>
          <Image source={food3} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>
          <Image source={food1} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>
          <Image source={food2} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>
          <Image source={food3} style={{ height: 100, width: 90, marginHorizontal: 10 }} ></Image>

        </ScrollView>
        {/* <View style={{height: 50 , width: 100}} > */}
        <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        colors={['#462797', '#2FC1BF',]} style={{ borderRadius: 13 , alignSelf: 'center', marginVertical: 40, height: 50 , width: 200 , alignItems: 'center' , justifyContent: 'center' }} > 
        <Text style={{color: 'white'}}  >Order here...</Text>       
      </LinearGradient>
        {/* </View> */}
        
      </ScrollView>



      <View style={{ marginTop: 230, position: 'absolute', marginLeft: '82%' }}  >
        <View style={{ width: 40, elevation: 10, height: 40, borderRadius: 40, backgroundColor: '#F1355B', alignItems: 'center', justifyContent: 'center' }}  >
          <AntDesign
            name="hearto"
            size={18}
            color="white"
          />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
