import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Router from './src/routes/drawer';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
        <Router />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
