import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Quiz = navigation => {
  return (
    <View style={styles.containerQuiz}>
      <View style={styles.top}>
        <Text>Imagine this is a really cool question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Result')}>
          <Text>End</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  containerQuiz: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },

  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
