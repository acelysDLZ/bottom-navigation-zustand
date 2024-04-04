import React, { useContext, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../pages/Home';
import About from '../pages/About';
import { useTabIndexStore } from '../store/store';
import { TabIndexContextType } from '../types';

const BottomNavBar = ({props}:any) => {

    const navIndex = useTabIndexStore((state : TabIndexContextType) => state.index);
    const setNavIndex = useTabIndexStore((state : TabIndexContextType) => state.setIndex);

    const [routes] = useState([
        { key : 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
        { key : 'about', title: 'About', focusedIcon: 'information', unfocusedIcon: 'information-outline'}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        about: About
    });

    return (
        <BottomNavigation 
            navigationState={{index : navIndex,routes}}
            onIndexChange={setNavIndex}
            renderScene={renderScene}
            shifting={false}
            sceneAnimationEnabled={true}
            sceneAnimationType='shifting'
        />
    )
};

export default BottomNavBar;