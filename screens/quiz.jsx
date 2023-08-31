import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <View style={styles.containerQuiz}>
      <View style={styles.top}>
        <Text style={styles.question}>
          Q. Imagine this is a really cool question
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text style={styles.options}>Cool option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>End</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  containerQuiz: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  top: {
    marginVertical: 16,
  },

  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1b263b',
    padding: 10,
    paddingHorizontal: 29,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  question: {
    fontSize: 28,
    textAlign: 'center',
  },
  option: {
    fontSize: 18,
    color: '#e0e1dd',
    fontWeight: '500',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#778da9',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
