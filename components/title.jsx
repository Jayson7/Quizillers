import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigation.naviagte('Home')}>
        xQuizer
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,

    fontWeight: '600',
    color: 'purple',
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
