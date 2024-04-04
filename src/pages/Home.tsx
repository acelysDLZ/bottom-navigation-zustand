import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTabIndexStore } from '../store/store';
import { TabIndexContextType } from '../types';

const Home = (props : any) => {

    const setNavIndex = useTabIndexStore((state : TabIndexContextType) => state.setIndex);

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable  onPress={() => {
                    setNavIndex(1);
                }}><Text>Aller sur About</Text></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Home;