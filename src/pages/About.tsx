import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = ({props}:any) => {
    return (
        <View style={styles.container}>
            <Text>About</Text>
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

export default About;