import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet} from 'react-native';
import React from 'react';

// import all other screens

import NavigatorsQuiz from './navigation/nav';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorsQuiz />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
// });
