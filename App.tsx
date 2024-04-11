import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CalculatorScreen from './src/presentation/screens/CalculatorScreen';
import { globalStyles } from './src/theme/app-theme';
import CalculatorMe from './src/presentation/screens/CalculatorMe';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <CalculatorScreen /> */}
      <CalculatorMe />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})

