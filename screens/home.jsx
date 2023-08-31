import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// components
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../images/ban.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});