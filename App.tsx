
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Home from './src/pages/Home'
import About from './src/pages/About';
import { globalStyle } from './src/styles';
import { BottomNavigation } from 'react-native-paper';
import { useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavBar from './src/components/BottomNavBar';

export default function App() {

  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.androidSafeArea}>
        <BottomNavBar/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routerBar:{
    backgroundColor:'#DDD',
    width: '100%',
    justifyContent:'space-evenly',
    flexDirection:'row'
  }
});
